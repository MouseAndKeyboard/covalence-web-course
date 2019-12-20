import React from 'react';
import jq from 'jquery';
declare var $: any;
import { json, User } from '../utils/api';
import { Redirect, RouteComponentProps } from 'react-router-dom';

interface ICreatePageProps extends RouteComponentProps {
}

interface ICreatePageState {
    tags: Array<Tag>,
    loading: boolean,
    toHome: boolean
}

interface Tag {
    id: number,
    name: string,
    _created: string
}

export default class CreatePage extends React.Component<ICreatePageProps, ICreatePageState>  {

    constructor(params: Readonly<ICreatePageProps>) {
        super(params);
        this.state = {
            tags: [{id: 1, name: "test", _created: "test" }],
            loading: true,
            toHome: false
        }
    }

    private saving: boolean = false;

    async componentDidMount() {
        
        if (!User || User.userid === null || User.role !== 'admin') {
            this.props.history.replace('/login');
        }
        
        try {
            let result = (await json('/api/tags'));
            this.setState({tags: result, loading: false});
        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate() {
        $('select').selectpicker();
    }

    submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (this.saving){
            return;
        }
        this.saving = true;

        let formdata = jq("#newPost").serializeArray();
        
        let formDataObject = formdata.reduce((o: any, val) => {
            if (val.name === "tags"){
                if (o["tags"]){
                    o["tags"].push(val.value);
                } else {
                    o["tags"] = [val.value];
                }
            } else {
                o[val.name] = val.value;
            }
            return o;
        }, {});
        formDataObject['author'] = User.userid;

        try {
            let result = (await json('/api/blog', 'POST', formDataObject));
        } catch (error) {
            console.log(error);
            
        } finally {
            this.saving = false;
            this.setState({toHome: true});
        }

    };

    render() {

        if (this.state.toHome === true) {
            return <Redirect to={`/`} />
          }

        let tagObjects = this.state.tags.map(tag => {
            return (
                <option value={tag.id} key={tag.id}>{tag.name}</option>
            );
        })
      
        if (this.state.loading) {
            return (
                <div></div>
            )
        } else {
            
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="card my-4 shadow">
                            <div className="card-body">
                                <form name="newPost" id="newPost">
                                    <div className="form-group">
                                        {/* author */}
                                        <label htmlFor="author">Author name</label>
                                        <input type="text" className="form-control" name="author" id="author" />
                                    </div>
                                    <div className="form-group">
                                        {/* title */}
                                        <label htmlFor="title">Blog title</label>
                                        <input type="text" className="form-control" name="title" id="title" />
                                    </div>
                                    <div className="form-group">
                                        {/* tags */}
                                        <label htmlFor="tagSelect">Tags</label>
                                        <select className="selectpicker form-control" name="tags" id="tags" multiple data-live-search="true">                                      
                                            {tagObjects}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        {/* content */}
                                        <label htmlFor="content">Blog</label>
                                        <textarea className="form-control" name="content" id="content" />
                                    </div>
                                    <button className="btn btn-success" onClick={this.submit}>Publish</button>
                                </form>
                            </div>
                        </div>
                    </div>
    
                </React.Fragment>
            );
        }

        
    }
}