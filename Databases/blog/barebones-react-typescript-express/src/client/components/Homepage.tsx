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
    body: string,
    author: number
    tags: Array<number>
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
                    return (
                        <BlogPreview key={post.id}/>
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

                <div className="d-flex flex-row flex-wrap justify-content-between">
                    {this.state.previewCards}
                </div>

            </React.Fragment>
        );
    }
}