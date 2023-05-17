import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavMenu, NavItem, Logo } from './style';

const Navbar = () => {
    return (
    <Nav>
        <NavbarContainer>
            <Logo>
                <Link href="/">
                    Albin Ryberg
                </Link>
            </Logo>
            <NavMenu>
                <NavItem><Link href="/">About</Link></NavItem>
                <NavItem><Link href="/">Projects</Link></NavItem>
                <NavItem><Link href="/">Contact</Link></NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    );
};

export default Navbar;