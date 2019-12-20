import React from 'react';
import BlogPreview from './BlogPreview';
import $ from 'jquery';
import { json } from '../utils/api';

interface IHomepageProps {

}

interface IHomepageState {
    previewCards: Array<blogPost>
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

    async componentDidMount() {

        try {
            let blogs = await json('/api/blog');
            this.setState({ previewCards: blogs });
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        let blogCards = this.state.previewCards.map(post => {

            let date = new Date(post._created);

            return (
                <BlogPreview authorName={post.author} blogId={post.id} key={post.id} title={post.title} date={date.toDateString()} />
            );
        });

        return (
            <React.Fragment>
                <main className="container my-5">
                    <div className="d-flex flex-row flex-wrap-reverse justify-content-center align-content-center">
                        {blogCards}
                    </div>
                </main>
            </React.Fragment>
        );
    }
}