import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import GlobalStyle from '../components/globalstyle'
import styled from 'styled-components'
import Navbar from '../components/navbar'

const Index = () => {
  return (
    <>
    <GlobalStyle/>
    <Navbar/>
      <h1>Header</h1>
      <Link to="/activitiespage">Link</Link>
    </>)
}

export default Index
