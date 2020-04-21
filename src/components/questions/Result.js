import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby'
import styled from 'styled-components'

const styledH2 = styled.h2`

`;
const ResDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border: 2px solid #73AD21;
    border-radius: 25px;
    margin:0 2rem;
    
    button{
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        &:hover{
            background-color: black;
        }
    }
`;

function Result(props) {
  return (
    <ResDiv className="result">
        <h1>Review your answers:</h1>
        <h2>Who's the activity for'?</h2>
        <h3>{props.resArr[0]}</h3>
        <h2>Do you have a garden?</h2>
        <h3>{props.resArr[1]}</h3>
        <h2>How long do you have for the activity?</h2>
        <h3>{props.resArr[2]}</h3>
        <h3>Are these correct?</h3>
        <div>
            <Link to="/tags"><button>Yes</button></Link>
            <button onClick={()=>window.location.reload(false)}>No</button>
        </div>
    </ResDiv>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;