import React from 'react'
import "./App.css";
import styled from 'styled-components'

const StyledBottom = styled.div`
    .info{
        color: #F933FF;
    }
    footer {
        color: #9F2424;
    }
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Bottom = (props) => {
    const { info, copy } = props;

    return (
        <StyledBottom className='bottom'>
            <h2>Info</h2>
            <p className='info'>{info}</p>
            <footer>
                <p>{copy}</p>
            </footer>
        </StyledBottom>
    )

}

export default Bottom;