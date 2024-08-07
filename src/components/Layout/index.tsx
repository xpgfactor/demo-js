import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { LayoutContainer } from './Layout.styled';

export const Layout = () => (
  <LayoutContainer>
    <Header />
    <Outlet />
  </LayoutContainer>
);
