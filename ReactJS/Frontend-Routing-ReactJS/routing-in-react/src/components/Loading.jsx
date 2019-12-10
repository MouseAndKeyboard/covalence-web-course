import React from 'react'

const Loading = (props) => {
    return (
        <div className="container text-center">
            <div className="spinner-border m-5" role="status">
                <span className="sr-only">{props.message}</span>
            </div>
        </div>
    )
}

export default Loading;