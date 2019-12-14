import React from 'react';
import { Link } from 'react-router-dom'

interface IListProps {

}

interface IListState {
    names: Array<string>
}

export default class List extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);

        this.state = {
            names: ["Geoff", "Jeff", "Jef"]
        }
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.names.map(name => {
                    return (
                        <li className="list-group-item">
                            <Link to={`/${name}`}>{name}</Link>
                        </li>
                    )
                })}
            </ul>
        )


    }
}