import styled from "styled-components";
import Link from "next/link";

const NavbarLink = styled.a`
  color: red;
  height: 80px;
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  top: 0;
  z-index: 999;
  position: sticky;
  background: red;
`;

const NavListContainer = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  width:100%;
`;

export const NavListItem = styled.li`
  list-style: none;
  height: 80px;
`;

const Navbar = () => {
  return (
    <NavbarContainer role="navigation">
      <NavListContainer>
        <NavListItem>
          <Link href="/" passHref>
            <NavbarLink>Home</NavbarLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/blog" passHref>
            <NavbarLink>Blog</NavbarLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/projects" passHref>
            <NavbarLink>Projects</NavbarLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/about" passHref>
            <NavbarLink>About Me</NavbarLink>
          </Link>
        </NavListItem>
      </NavListContainer>
    </NavbarContainer>
  );
};

export default Navbar;