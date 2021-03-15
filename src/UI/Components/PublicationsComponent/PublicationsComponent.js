import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PublicationsComponent extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {}
	}

	render() {

		const renderAuthors = (authorList) => {
			return authorList.map((author, index) => {
				let optionalComma = (index === authorList.length-1) ? '' : ', '
				if (author === 'Maximiliano Orellana') {
					return (
						<span>
							<span className='MagentaText'>
								{author}
							</span>
							{optionalComma}
						</span>
					)
				}
				return (
					author+optionalComma
				)
			})
		}

		return (
			<div>
				<div className='YellowText'>
					Publications
				</div>
				<Row>
					<Col lg={true}>
						{
							this.props.publications.map((publication) => {
								return (
									<div>
									<div>
										<a href={ publication.reference }>
											{ publication.title }
										</a> <br />
										{ renderAuthors(publication.authors) } <br />
										{ publication.source }
									</div>
									<br />
									</div>
								)
							})
						}
					</Col>
				</Row>
			</div>
		);
	}
}

export default PublicationsComponent;