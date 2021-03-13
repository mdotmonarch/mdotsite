import React from 'react';
import './Home.css';

import Container from 'react-bootstrap/Container'

class Home extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className='Home'>
				<Container>
					Nothing to see here... yet :)
				</Container>
			</div>
		);
	}
}

export default Home;
