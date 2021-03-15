import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class InfoComponent extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div>
				<div className='YellowText'>
					Info
				</div>
				<Row>
					<Col>
						<div className='CyanText'>Skills</div>
						Lua - Python - React - Vue.js - TypeScript -
						Java - C# - LaTeX - Jenkins - Git
					</Col>
					<Col>
						<div className='MagentaText'>Education</div>
						Civil Informatics Engineering, USACH<br />
						[2016-Present]
					</Col>
					<Col>
						<div className='YellowText'>Interests</div>
						3D modelling and printing - Photography - Web design - Academic research
					</Col>
				</Row>
			</div>
		);
	}
}

export default InfoComponent;