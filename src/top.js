import React from 'react'
import Bottom from './bottom'
import "./App.css";
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }

`

const StyledTop = styled.div`
    img{
        width:75%;
    }
    h1{
        color: #FFC133;
        font-size: 50px;
    }
    display:flex;
    flex-direction: column;
    align-items: center;
    div{
        display:flex;
        align-items: center;
        justify-content: space-between;
        justify-content: space-around;
    }
   
`

const StylesLeft = styled.div`
    animation: ${kf} .5s linear 1s;
    animation-iteration-count:infinite;
    
`
const StylesRight = styled.div`
    animation: ${kf} .5s linear 1.35s;
    animation-iteration-count: infinite;
    animation-direction:reverse;
    
`

const Top = (props) => {
    const { data } =props;
    console.log('22',data)

    return (
        <StyledTop className='top'>
        <h1><div><StylesLeft><span>🚀</span></StylesLeft><StylesRight><span>🚀</span></StylesRight></div>{data.title}<div><StylesLeft><span>🚀</span></StylesLeft><StylesRight><span>🚀</span></StylesRight></div></h1>
        <p className='date'>Picture of date: {data.date}</p>
        <img src={data.hdurl} alt='nasa pic'></img>
        <Bottom info={data.explanation} copy={data.copyright}/>
        </StyledTop>
        
    )

}

export default Top;


