import React from 'react'

const MetaInfoCard = (props) => {
    // props.info = [{l, r}, {l, r}]
    let elements = props.info.map(({left, right}) => {
        return (
            <div className="row">
                <div className="col text-right">
                    {left}
                </div>
                <div className="col">
                    {right}
                </div>
            </div>
        );
    });

    return (
        <div className="card">
            <div className="grid">
                {elements}
            </div>
        </div>
    );
}

export default MetaInfoCard;