import React from 'react';
import BlogPreview from './BlogPreview';
import $ from 'jquery';

interface IHomepageProps {

}

interface IHomepageState {
    previewCards: Array<JSX.Element>
}


interface blogPost {
    id: number,
    title: string,
    _created: string
    author: string,
}

export default class Homepage extends React.Component<IHomepageProps, IHomepageState>  {

    constructor(params: IHomepageProps) {
        super(params);

        this.state = { previewCards: [] };



    }

    componentDidMount() {
        

        $.ajax("/api/blog", { method: "GET" })
            .then((blogList: Array<blogPost>) => {


                let blogCards = blogList.map(post => {

                    let date = new Date(post._created);

                    return (
                        <BlogPreview authorName={post.author} blogId={post.id} key={post.id} title={post.title} date={date.toDateString()} />
                    );
                });

                this.setState({ previewCards: blogCards });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        return (
            <React.Fragment>

                <div className="d-flex flex-row flex-wrap-reverse justify-content-center align-content-center">
                    {this.state.previewCards}
                </div>

            </React.Fragment>
        );
    }
}