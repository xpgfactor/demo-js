import { useInfiniteQuery } from '@tanstack/react-query';
import { ProductsResponse } from '../types/products';
import { fetcher } from '../utils.ts/fetcher';

export const useGetProducts = (pageSize: number, enabled: boolean) =>
  useInfiniteQuery<ProductsResponse>(
    ['get-products', { pageSize, enabled }],
    async ({ pageParam = 0 }) =>
      fetcher(
        `products/?page=${pageParam}&skip=${
          pageSize * pageParam
        }&limit=${pageSize}&select=title,category,price,brand`,
        { method: 'GET' },
      ),
    {
      enabled,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.products.length === lastPage.limit
          ? allPages.length + 1
          : undefined,
    },
  );
