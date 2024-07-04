import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: var(--text-black);
  font-size: 18px;
  transition: all 0.2s linear;

  &:hover {
    opacity: 0.6;
  }
`;

export const HeaderContainer = styled.div`
  padding: 0;
  width: 100%;
  height: 50px;
  padding: 20px;
  background: var(--background-secondary);
  display: flex;
  gap: 16px;
  align-items: center;
  box-shadow: var(--shadow);
`;
