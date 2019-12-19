import React from 'react';

interface IBlogPreviewProps {
    title: string,
    date: string,
    blogId: number,
    authorName: string
}

interface IBlogPreviewState {

}


export default class BlogPreview extends React.Component<IBlogPreviewProps, IBlogPreviewState>  {

    constructor(params: Readonly<IBlogPreviewProps>) {
        super(params);
    }

    render() {

        return (
            <div className="card blogPreview shadow-sm">
                <img src="https://picsum.photos/360/200" className="card-img-top" alt="blog image" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <h6 className="card-subtitle text-muted">{this.props.date}</h6>
                    <p className="card-text">{this.props.authorName}</p>
                    <a href={`/blogs/${this.props.blogId}`} className="btn btn-primary shadow">Read</a>
                </div>
            </div>
        );
    }


}