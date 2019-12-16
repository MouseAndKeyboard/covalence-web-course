import React from 'react';
import Header from './Header';
import Timeline from './Timeline';

const Home: React.FunctionComponent = () => {
    return (
        <React.Fragment>
					<Header />
					<div className="container">
						<Timeline />
					</div>
				</React.Fragment>
    );
}

export default Home;