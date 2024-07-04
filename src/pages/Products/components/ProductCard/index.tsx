import { Product } from 'src/types/products';
import { ProductBadge } from '../ProductBadge';
import {
  FlexCell,
  ProductCardContainer,
  ProductCardHeader,
  ProductCardTitle,
} from './ProductCard.styled';

interface ProductCardProps {
  product: Partial<Product>;
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <FlexCell>
    <ProductCardContainer>
      <ProductCardHeader>
        <ProductCardTitle>{product.title}</ProductCardTitle>
        <ProductBadge category={product.category || 'default'} />
      </ProductCardHeader>
      <span>{product.price}$</span>
    </ProductCardContainer>
  </FlexCell>
);
