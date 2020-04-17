import React from "react"
import styled from 'styled-components'
import {Link, navigate} from 'gatsby'
import GlobalStyle from '../components/globalstyle'

const QContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(-45deg, #febf01 0%, #fdffa8 100%);
    height:100vh;
`
const QCard =styled(props => <Link {...props} />)`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 35px;
    text-align: center;
    background:white;
    height:30vh;
    width:80vh;
    margin-bottom:1rem;
    box-shadow: 10px 10px 8px #888888;
    h1{
        font-size: 5rem;
        padding: 2rem;
    }
    h2{
        text-decoration: none;
    }
    &:hover {
        box-shadow: 10px 10px 8px #FFFFFF;
    }
    `
    const StyledLink = styled(props => <navigate {...props} />)`
        color: black;
        `;

export default function QTemplate({page}) {
    return (
    <QContainer>
    <GlobalStyle/>
        <h1>Who is the activity aimed at?</h1>
    <QCard to={page} state={{choice: "1"}}>
        <h2>Children</h2>
    </QCard>
    <QCard to={page} state={{choice: "2"}}>
        <h2>Adults</h2>
    </QCard>
    <QCard to={page} state={{choice: "3"}}>
        <h2>Family</h2>
    </QCard>  
    </QContainer>
  )
}
