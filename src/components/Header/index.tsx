import { HeaderContainer, NavLink } from './Header.styled';

export const Header = () => {
  const links = [
    {
      to: '/',
      title: 'Home',
    },
    {
      to: 'products',
      title: 'Products',
    },
  ];

  return (
    <HeaderContainer>
      {links.map((link) => (
        <NavLink key={link.to} to={link.to}>
          {link.title}
        </NavLink>
      ))}
    </HeaderContainer>
  );
};
