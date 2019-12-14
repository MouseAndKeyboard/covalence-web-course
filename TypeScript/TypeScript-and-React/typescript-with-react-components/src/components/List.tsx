import React from 'react';

export default class List extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);

        this.state = {
            names: ["Jeff", "Josh", "Geoff"]
        }
    }

    render() {
        return (
            <ul className="list-group">
                {
                    this.state.names.map(name => {
                        return <li className="list-group-item">{name}</li>
                    })
                }
            </ul>
        );
    }
}

interface IListProps {

}

interface IListState {
    names: Array<string>;
}