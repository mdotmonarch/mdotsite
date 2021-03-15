import React from 'react';
import './Footer.css';

class Footer extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className='Footer'>
				Maximiliano Orellana [mdotmonarch] • 2021
			</div>
		);
	}
}

export default Footer;
