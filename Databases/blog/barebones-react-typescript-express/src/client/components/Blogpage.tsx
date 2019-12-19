import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import $ from 'jquery';


interface IBlogpageProps extends RouteComponentProps<{ id: string }> {

}

interface IBlogpageState {
    blog: Blog
    tags: Array<Tag>
}

export interface Blog {
    id: number,
    title: string,
    content: string,
    authorid: number,
    _created: string,
    name: string
}

interface Tag {
    id: number, 
    name: string, 
    _created: string
}

export default class Blogpage extends React.Component<IBlogpageProps, IBlogpageState>  {
    constructor(props: IBlogpageProps) {
        super(props)

        this.state = {
            blog: {
                id: -1,
                title: "",
                content: "",
                authorid: -1,
                _created: "",
                name: ""
            },
            tags: []
        }

    }

    getData = async () => {
        try {
            let blog: Blog = await $.ajax(`/api/blog/${this.props.match.params.id}`, { method: "GET" });
            let tags: Array<Tag> = await $.ajax(`/api/blog/${this.props.match.params.id}/tags`, { method: "GET" });

            this.setState({ blog, tags });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData();

    }

    render() {

        let date = new Date(this.state.blog._created);

        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid bg-light shadow">
                    <div className="jumbotron-background">
                        <img src="https://picsum.photos/2000/1000" className="blur " />
                    </div>

                    <div className="container text-white shadow-sm">
                        <h1 className="display-4">{this.state.blog.title}</h1>
                        <p className="lead">{date.toDateString()}</p>
                        <p>{this.state.blog.name}</p>
                    </div>

                </div>
                <div className="container">
                    <div className="text-break word-wrap">
                        {this.state.blog.content}
                    </div>
                </div>
            </React.Fragment>




        );
    }
}