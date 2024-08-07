interface Options extends Omit<RequestInit, 'body'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: Record<string, any>;
  formData?: FormData;
}

type QueryParams = Record<string, string | number | string[] | number[]>;

const parseUrlParams = (queryParams: QueryParams = {}) =>
  Object.values(queryParams).length === 0
    ? ''
    : `?${Object.entries(queryParams)
        .filter(([, value]) => !!value)
        .map(
          ([param, value]) =>
            `${param}=${Array.isArray(value) ? value.join(',') : value}`,
        )
        .join('&')}`;

const parseFullUrl = (endpoint: string) => `https://dummyjson.com/${endpoint}`;

const updateOptions = async (
  options: Options | undefined,
): Promise<RequestInit> => {
  let body;

  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(options?.headers || {}),
  });

  if (options?.body) {
    body = JSON.stringify(options?.body);
  }

  if (options?.formData) {
    body = options?.formData;
  }

  return { method: 'GET', ...options, body, headers };
};

const fetcher = async (
  apiUrl: string,
  options?: Options,
  queryParams?: QueryParams,
) => {
  const fullUrl = parseFullUrl(apiUrl) + parseUrlParams(queryParams);
  const response = await fetch(fullUrl, await updateOptions(options));

  if (response.ok) {
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/octet-stream')) {
      return response.blob();
    }
    if (contentType?.includes('application/json')) {
      return response.json();
    }
    return response.text();
  }

  // Response Error

  if (
    response.status === 503 &&
    !window.location.pathname.includes('maintenance')
  ) {
    window.location.replace(`${window.location.origin}/maintenance`);
  }

  const errorBody = await response.json();
  return Promise.reject({
    status: response.status,
    ...errorBody,
  });
};

export { fetcher };
