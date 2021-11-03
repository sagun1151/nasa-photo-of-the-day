import React from 'react'
import Bottom from './bottom'

const Top = (props) => {
    const { data } =props;
    console.log('22',data)

    return (
        <div>
        <h1>Title: {data.title}</h1>
        <p>Picture of date: {data.date}</p>
        <img src={data.hdurl} alt='nasa pic'></img>
        <Bottom info={data.explanation} copy={data.copyright}/>
        </div>
        
    )

}

export default Top;


