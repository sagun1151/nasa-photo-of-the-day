import React from 'react'

const Bottom = (props) => {
    const { info, copy } = props;

    return (
        <div>
            <p>Info: {info}</p>
            <footer>
                <p>{copy}</p>
            </footer>
        </div>
    )

}

export default Bottom;