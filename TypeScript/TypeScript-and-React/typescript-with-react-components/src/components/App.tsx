import * as React from 'react';
import List from './List';

interface IAppProps {

}

interface IAppState {

}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props : IAppProps){
        super(props);
    }

    render() {
        return (
            <List />
        )
    }
}

export default App;