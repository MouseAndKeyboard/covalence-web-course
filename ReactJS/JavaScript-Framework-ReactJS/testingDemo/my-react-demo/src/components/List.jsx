import React from 'react'

const List = (props) => {
    let listItems = props.items.map((item) => {
        return (
            <li key={item.id}>
                {item.value}
            </li>
        );
    });

    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default List