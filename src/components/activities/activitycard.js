import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import kebabCase from "lodash.kebabcase"

const ActContainer = styled.div`
    display:flex;
    flex-direction: column;
    box-shadow: 3px 4px 9px -1px rgba(0,0,0,0.53);
    transition: 0.3s;
    align-items:center;
    width: 95vw;
    border-radius: 35px;
    background:white;
    text-align:center;
    h1 {
        font-size:5rem;
        margin:10px;
        margin-bottom:2rem;
    }
    hr {
        width:50%;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        margin-right: 15px;
    }
    p {
        margin-left: 1rem;
        margin-right: 1rem;

    }

    @media only screen and (min-width: 600px) {
        width:70vw;
        h1 { 

        }
    }
    `

    const StyledH4 = styled.h4`
        margin-bottom:0;
    `;


    const StyledLink = styled(props => <Link {...props} />)`
            margin-bottom: 2rem;
            font-size:1rem;

        `;

const ActivityCard = ({title, tags, time, excerpt, link, equipment}) => {
    return (
        <ActContainer>
            <h1>{title}</h1>
            <hr/>
            <h3>Tags:</h3>
            <StyledH4><ul>
                {tags.map(t => (
                <li key={kebabCase(t)}>
                    <Link to={`/tags/${kebabCase(t)}`}>{t}</Link>
                </li>
                ))}
            </ul>
            </StyledH4>
            <hr/>
            <h3>Time:</h3>
            <h4>{time}</h4>
            <hr/>
            <h3>Equipment:</h3>
            <h4>{equipment}</h4>
            <hr/>
            <p>{excerpt}</p>
            <hr/>
            <StyledLink to={link}>More info</StyledLink>
        </ActContainer>
    )
}

export default ActivityCard
