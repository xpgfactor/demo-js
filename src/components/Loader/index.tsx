import { ReactNode } from 'react';
import { Animation } from 'src/components/Animation';
import { LoaderWrapper, Spinner } from './Loader.styled';

export interface SpinnerLoaderProps {
  small?: boolean;
  big?: boolean;
  custom?: { scale: string; width: string; height: string };
}

const SpinnerLoader = ({ small, big, custom }: SpinnerLoaderProps) => (
  <Spinner small={small} big={big} custom={custom}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </Spinner>
);

export interface LoaderProps {
  height?: number;
  width?: number;
}

const Loader = ({ height = 100, width = 100 }: LoaderProps) => (
  <LoaderWrapper data-testid='loader'>
    <Animation animationData='loader2' height={height} width={width} />
  </LoaderWrapper>
);

interface WithLoaderProps {
  isLoading: boolean;
  children: ReactNode;
}

const WithLoader = ({ isLoading, children }: WithLoaderProps) =>
  isLoading ? <Loader /> : <>{children}</>;

export { Loader, SpinnerLoader, WithLoader };
