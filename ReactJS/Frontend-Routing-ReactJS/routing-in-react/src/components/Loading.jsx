import React from 'react'

const Loading = (props) => {
    return (
        <div className="container text-center">
            <div class="spinner-border m-5" role="status">
                <span class="sr-only">{props.message}</span>
            </div>
        </div>
    )
}

export default Loading;