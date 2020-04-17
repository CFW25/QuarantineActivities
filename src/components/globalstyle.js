import React from "react"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        text-decoration:none;
        color:black;
        font-family: Roboto, sans-serif;
    }
    h1 {
        font-size: 5rem;
    }
`

export default GlobalStyle;