import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import GlobalStyle from '../components/globalstyle'
import styled from 'styled-components'
import Navbar from '../components/navbar'

const QContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(-45deg, #febf01 0%, #fdffa8 100%);
    height:100vh;
`
const QCard = styled(props => <Link {...props} />)`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 35px;
    text-align: center;
    background:white;
    height:30vh;
    width:80vh;
    margin-bottom:1rem;
    margin-top:5rem;
    box-shadow: 10px 10px 8px #888888;
    h1{
        font-size: 5rem;
        padding: 2rem;
    }
    h2{
        text-decoration: none;
        padding-top: 9rem;
    }
    &:hover {
        box-shadow: 10px 10px 8px #FFFFFF;
    }
    `
    const StyledLink = styled(props => <Link {...props} />)`
        color: black;
    `;

const Index = () => {
  return (
    <QContainer>
      <GlobalStyle/>
      <Navbar/>
        <h1>Suggest an activity</h1>
        <QCard to="/questionOne">
          <h2>Suggest an activity</h2>
        </QCard>
        <QCard to="/activitiespage">
          <h2>Show me all the activities</h2>
        </QCard>
    </QContainer>)
}

export default Index
