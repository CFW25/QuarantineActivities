import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'
import GlobalStyle from './globalstyle'


const NavDiv = styled.div`
    overflow: hidden;
    background-color: black;
    display: flex;
    justify-content: center;
    width:100%;
    background:#febf01;
    
    @media only screen and (min-width: 600px) {
        justify-content: flex-end;
    }

`;

const NavList = styled.ul`
    margin:1rem;
`;

const StyledLink = styled(Link)`
    color: white;
    padding-right:1.3rem;
    font-size:1.5rem;
    font-weight: bold;
    text-decoration:none;
    float:right
    &:hover {
        color:#fdffa8;
    }
`;

const Nav = () => (
    <NavDiv>
        <NavList>
            <StyledLink to="/resourcesPage">Free Resources</StyledLink>
            <StyledLink to="/activitiespage">Activities</StyledLink>
        </NavList>
    </NavDiv>
);

export default Nav