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
    border-radius: 25px;
    background:white;
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
    @media only screen and (min-width: 600px) {
        width:50vw;
    }
    `

const ActivityCard = ({title, tags, time, excerpt, link}) => {
    return (
        <ActContainer>
            <h1>{title}</h1>
            <h4>Tags:<ul>
                {tags.map(t => (
                <li key={kebabCase(t)}>
                    <Link to={`/tags/${kebabCase(t)}`}>{t}</Link>
                </li>
                ))}
            </ul></h4>
            <hr/>
            <h3>Time:</h3>
            <p>{time}</p>
            <hr/>
            <p>{excerpt}</p>
            <hr/>
            <Link to={link}>More info</Link>
        </ActContainer>
    )
}

export default ActivityCard
