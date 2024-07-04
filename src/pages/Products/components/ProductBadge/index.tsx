import { CategoryType } from 'src/types/products';
import { BadgeContainer, BadgeText } from './ProductBadge.styled';
import { getBadgeText } from './utils';

interface ProductBadgeProps {
  category: CategoryType | 'default';
}

export const ProductBadge = ({ category }: ProductBadgeProps) => (
  <BadgeContainer variant={category}>
    <BadgeText>{getBadgeText(category)}</BadgeText>
  </BadgeContainer>
);
