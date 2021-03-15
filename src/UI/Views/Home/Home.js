import React from 'react';
import './Home.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PublicationsComponent from '../../Components/PublicationsComponent/PublicationsComponent';
import ReposComponent from '../../Components/ReposComponent/ReposComponent';
import InfoComponent from '../../Components/InfoComponent/InfoComponent';

class HomeView extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {
			publications: [
				{
					title: 'Dealing with the Balanced Academic Curriculum Problem considering the Chilean Academic Credit Transfer System',
					authors: [
						'Manuel Villalobos-Cid',
						'Maximiliano Orellana',
						'Oscar C. Vásquez',
						'Eduardo Pinto-Sothers',
						'Mario Inostroza-Ponta'
					],
					source: '2019 38th International Conference of the Chilean Computer Science Society (SCCC)',
					reference: 'https://ieeexplore.ieee.org/document/8966411'
				}
			],
			repos: [
				{
					full_name: 'mdotmonarch/mdotsite',
					html_url: 'https://github.com/mdotmonarch/mdotsite',
					description: "mdotmonarch's personal website",
					created_at: "2021-03-13T19:33:52Z"
				}
			]
		}
	}

	render() {
		return (
			<div className='HomeView'>
				<Container>
					<Row>
						<Col lg={true}>
							<div className='YellowText'>
								Hello there!
							</div>
							<div>
								I'm <span className='MagentaText'>Maximiliano Orellana</span>, a software developer currently studying civil informatics engineering.
								Here's a brief summary of who I am.
							</div>
						</Col>
					</Row>
					<br />
					<InfoComponent />
					<br />
					<ReposComponent repos={this.state.repos}/>
					<br />
					<PublicationsComponent publications={this.state.publications}/>
				</Container>
			</div>
		);
	}
}

export default HomeView;