import React from 'react'
import GlobalStyle from '../components/globalstyle'
import styled from 'styled-components'
import {Link} from 'gatsby'

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border: 2px solid #73AD21;
    border-radius: 25px;
    margin:2rem 2rem;
`;

const StyledLink = styled(Link)`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    &:hover{
        background-color: black;}
`

const index = () => {
    return (
        <StyledDiv>
            <GlobalStyle />
            <h1>Suggest an activity</h1>
            <StyledLink to="/questionpage">Go!</StyledLink>
            <h1>View all activities</h1>
            <StyledLink to="/activitiespage">Go!</StyledLink>
            <h1>Check out these free resources!</h1>
            <StyledLink to="/resourcespage">Go!</StyledLink>
        </StyledDiv>
    )
}

export default index
