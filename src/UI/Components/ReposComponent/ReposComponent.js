import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ReposComponent extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {}
	}

	render() {

		const renderRepo = (repo) => {
			const date = new Date(repo.created_at);
			const dd = date.getDate();
			const mm = date.getMonth()+1;
			const yyyy = date.getFullYear();
			const hrs = date.getHours();
			const min = date.getMinutes();
			const sec = date.getSeconds();
			const stringDate = mm+'-'+dd+'-'+yyyy+' '+hrs+':'+min+':'+sec;
			return (
					<Row>
						<Col>
						<a href={repo.html_url}>
							{repo.full_name}
						</a>
						</Col>
						<Col>
							{repo.description}
						</Col>
						<Col>
						{stringDate}
						</Col>
					</Row>
			)
		}

		return (
			<div>
			<div className='YellowText'>Repos</div>
			<Row>
				<Col>
					<div className='CyanText'>Name</div>
				</Col>
				<Col>
					<div className='MagentaText'>Description</div>
				</Col>
				<Col>
					<div className='YellowText'>Created at</div>
				</Col>
			</Row>
			<div>
				{
					this.props.repos.map((repo) => {
						return ( <div>{ renderRepo(repo) }</div> )
					})
				}
			</div>
		</div>
		);
	}
}

export default ReposComponent;