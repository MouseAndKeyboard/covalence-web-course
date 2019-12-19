import React from 'react';
import $ from 'jquery';
import * as bs from 'bootstrap';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { Blog } from './Blogpage';
interface IBlogEditPageProps extends RouteComponentProps<{ id: string }> {
}

interface IBlogEditPageState {
    blog: Blog,
    topage: boolean,
    tohome: boolean
}

export default class BlogEditPage extends React.Component<IBlogEditPageProps, IBlogEditPageState>  {

    constructor(params: Readonly<IBlogEditPageProps>) {
        super(params);
        this.state = {
            blog: {
                id: -1,
                title: "",
                content: "",
                authorid: -1,
                _created: "",
                name: ""
            },
            topage: false,
            tohome: false
        }
    }

    submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        let formdata = $("#newPost").serializeArray();

        let formDataObject = formdata.reduce((o: any, val) => {
            o[val.name] = val.value;
            return o;
        }, {});

        formDataObject["author"] = this.state.blog.authorid;
        let formData = JSON.stringify(formDataObject);

        await $.ajax(`/api/blog/${this.props.match.params.id}`, { method: "PUT", data: formData, dataType: "JSON", contentType: "application/json" })
        this.setState({topage: true});
    }

    delete = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        await $.ajax(`/api/blog/${this.props.match.params.id}`, { method: "DELETE" });
         this.setState({tohome: true});
    }

    getPageDetails = async () => {
        let blog: Blog = await $.ajax(`/api/blog/${this.props.match.params.id}`, { method: "GET" });
        this.setState({
            blog
        })
    }

    componentDidMount() {
        this.getPageDetails();
    }

    render() {

        if (this.state.tohome) {
            return <Redirect to={`/`} />
        }

        if (this.state.topage) {
            return <Redirect to={`/blogs/${this.props.match.params.id}`} />
        }

        return (
            <React.Fragment>
                <div className="container">
                    <div className="card my-4 shadow">
                        <div className="card-body">
                            <form name="newPost" id="newPost">
                                <div className="form-group">
                                    {/* title */}
                                    <label htmlFor="title">Blog title</label>
                                    <input type="text" className="form-control" name="title" id="title" defaultValue={this.state.blog.title} />
                                </div>
                                <div className="form-group">
                                    {/* content */}
                                    <label htmlFor="content">Blog</label>
                                    <textarea className="form-control" name="content" id="content" defaultValue={this.state.blog.content} />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-success" onClick={this.submit}>Update</button>
                                    <button className="btn btn-danger" onClick={this.delete}>Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );



    }
}