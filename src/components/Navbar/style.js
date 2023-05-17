import styled from 'styled-components';

export const Nav = styled.nav`
  height: 70px;
  /* margin-top: -70px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.5s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 800px;
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
  };
`;
export const Logo = styled.div`

`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
  li:last-child{
    margin:  0 0 0 0 ;
}

`;

export const NavItem = styled.li`
  text-decoration: none;
  border: 1px solid transparent;
  padding: 10px;
  margin: 0 5px;
  height: 100%;
  cursor: pointer;

`;