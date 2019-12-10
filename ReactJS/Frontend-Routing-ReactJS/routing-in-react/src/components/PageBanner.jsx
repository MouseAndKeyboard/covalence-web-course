import React from 'react'

const PageBanner = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid container clearfix my-2 py-3 text-white bg-dark">
            <div className="text-center">
                <h1 className="display-7">{props.title}</h1>
            </div>
        </div>
        );
}

export default PageBanner;