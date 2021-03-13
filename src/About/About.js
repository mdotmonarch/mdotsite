import React from 'react';
import './About.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends React.Component {
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
			]
		}
	}

	render() {

		const renderPresentation= () => {
			return (
				<Row>
					<Col lg={true}>
						<div className='AboutYellowText'>
							Hello there!
						</div>
						<div>
							I'm <span class='AboutMagentaText'>Maximiliano Orellana</span>, a software developer currently studying civil informatics engineering.
							Here's a brief summary of who I am.
						</div>
					</Col>
				</Row>
			)
		}

		const renderInfo = () => {
			return (
				<Row>
					<Col lg={true}>
						<div className='AboutCyanText'>Skills</div>
						Lua - Python - React - Vue.js - TypeScript -
						Java - C# - LaTeX - Jenkins - Git
					</Col>
					<Col lg={true}>
						<div className='AboutMagentaText'>Education</div>
						Civil Informatics Engineering, USACH<br />
						[2016-Present]
					</Col>
					<Col lg={true}>
						<div className='AboutYellowText'>Interests</div>
						3D modelling and printing - Photography - Web design - Academic research
					</Col>
				</Row>
			)
		}

		const renderRepos = () => {
			
		}

		const renderAuthors = (authorList) => {
			return authorList.map((author, index) => {
				let optionalComma = (index === authorList.length-1) ? '' : ', '
				if (author === 'Maximiliano Orellana') {
					return ( <span> <span class='AboutMagentaText'> {author}</span>{optionalComma} </span>)
				}
				return (
					author+optionalComma
				)
			})
		}

		const renderPublications = () => {
			return (
				<Row>
					<Col lg={true}>
						<div className='AboutYellowText'>
							Publications
						</div>
						{
							this.state.publications.map((publication) => {
								return (
									<div>
										<a href={ publication.reference }>
											{ publication.title }
										</a> <br />
										{ renderAuthors(publication.authors) } <br />
										{ publication.source }
									</div>
								)
							})
						}
						
					</Col>
				</Row>
			)
		}

		return (
			<div className='About'>
				<Container>
					{ renderPresentation() }
					<br />
					{ renderInfo() }
					<br />
					{ renderRepos() }
					<br />
					{ renderPublications() }
				</Container>
			</div>
		);
	}
}

export default About;