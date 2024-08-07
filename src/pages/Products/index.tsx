import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useGetProducts } from 'src/queries/products';
import { Loader } from 'src/components/Loader';
import {
  LoaderContainer,
  PageContainer,
  ProductsContainer,
} from './Products.styled';
import { ProductCard } from './components/ProductCard';

const itemsOnPage = 30;

export const Products = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isLoading, hasNextPage } = useGetProducts(
    itemsOnPage,
    true,
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  const ScrollLoader = (
    <LoaderContainer ref={ref}>
      <Loader />
    </LoaderContainer>
  );

  return (
    <PageContainer>
      <h1>Products page</h1>
      {isLoading && ScrollLoader}
      <ProductsContainer>
        {data?.pages.map((page) =>
          page.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )),
        )}
        {hasNextPage && ScrollLoader}
      </ProductsContainer>
    </PageContainer>
  );
};
