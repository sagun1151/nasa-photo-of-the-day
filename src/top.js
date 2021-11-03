import React from 'react'

const Top = (props) => {
    const { data } =props;
    console.log('22',data)

    return (
        <h1>Title: {data.title}</h1>
    )

}

export default Top;


