import styled from 'styled-components';

export const FlexCell = styled.div`
  padding: 0 10px;
  width: 50%;
  margin-bottom: 20px;
`;

export const ProductCardContainer = styled.div`
  padding: 10px 20px;
  border: 2px solid;
  border-color: var(--border-primary);
  border-radius: var(--border-radius-2);
  background-color: var(--background-card);
  box-shadow: var(--shadow);
`;

export const ProductCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ProductCardTitle = styled.h4`
  margin: 10px 0;
`;
