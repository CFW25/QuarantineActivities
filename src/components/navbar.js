import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'

const NavDiv = styled.div`
    overflow: hidden;
    background-color: black;
    display: flex;
    justify-content: flex-end;
    width:100%;
`;

const NavList = styled.ul`

`;

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: white;
    padding-right:1.3rem;
    font-size:1.5rem;
    &:hover {
        background-color: #45567d;
    }
`;

const StyledLi = styled.li`
    float:right
`

const Nav = () => (
    <NavDiv>
        <NavList>
            <StyledLi><StyledLink to="/">Free Resources</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/activitiespage">Activities</StyledLink></StyledLi>
        </NavList>
    </NavDiv>
);

export default Nav