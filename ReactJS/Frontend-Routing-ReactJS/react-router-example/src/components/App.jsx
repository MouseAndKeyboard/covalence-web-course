import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Link>
                        <Link>Go to Page 1</Link>
                        <Link>Go to Page 2</Link>
                        <Switch>
                            <Route />
                            <Route />
                        </Switch>
                    </Link>
                </Fragment>
            </Router>
        );
    }
}

export default App;