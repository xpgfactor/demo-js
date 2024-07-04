import styled from 'styled-components';
import { CategoryType } from 'src/types/products';

interface BadgeContainerProps {
  variant: CategoryType | 'default';
}

export const BadgeContainer = styled.div<BadgeContainerProps>`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: var(--border-radius-2);
  width: fit-content;
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'groceries':
        return '#76a167';
      case 'mens-watches':
        return '#cc7b51';
      case 'laptops':
        return '#cf7574';
      case 'mens-shirts':
      case 'mens-shoes':
        return '#4b9bd2';
      case 'beauty':
        return '#c075ad';
      case 'default':
        return '#a89239';
      default:
        return '#bd8548';
    }
  }};
`;

export const BadgeText = styled.span`
  font-size: 12px;
  font-weight: 700;
`;
