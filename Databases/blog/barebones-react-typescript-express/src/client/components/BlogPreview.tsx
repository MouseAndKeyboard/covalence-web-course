import React from 'react';

interface IBlogPreviewProps {

}

interface IBlogPreviewState {

}


export default class BlogPreview extends React.Component<IBlogPreviewProps, IBlogPreviewState>  {

    constructor(params: Readonly<IBlogPreviewProps>) {
        super(params);
    }

    render(){
        return (
            <div className="card">
                test
            </div>
        );
    }


}