import React from 'react';
import './Navbar.css';

import Image from 'react-bootstrap/Image'

class Navbar extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {
			elements: [
				'about',
				'resume',
				'github',
				'instagram',
				'e-mail'
			],
			element_links: [
				'/about',
				process.env.PUBLIC_URL+'/files/resume.pdf',
				'https://github.com/mdotmonarch',
				'https://instagram.com/mdotmonarch',
				'mailto:max@mdotmonarch.dev'
			]
		}
	}
	render() {
		const iter = [0, 1, 2, 3, 4]

		return (
			<div className='Navbar'>
				<div
				style={{
					position: 'fixed',
					top: 0,
					backgroundColor: '#090e1b',
					height: '100px',
					width: '100%',
					zIndex: 1
				}}
				>
				</div>
				<a href='/'>
					<Image
						src={
							process.env.PUBLIC_URL+'/images/logo-m.png'
						}
						style={{
							position: 'fixed',
							top: 25,
							left: 25,
							height: '48px',
							zIndex: 2
						}}
						className='NavbarIcon'
					/>
				</a>
				{
				iter.map( (i) => {
					return <a href={this.state.element_links[i]} key={i}>
						<Image
							src={
								process.env.PUBLIC_URL+'/icons/'+this.state.elements[i]+'.svg'
							}
							style={{
								right: 25 + (43*i),
								position: 'fixed',
								top: 35,
								height: '28px',
								zIndex: 2
							}}
							className='NavbarIcon'
						/>
					</a>
				})
				}
			</div>
		)
	}
}

export default Navbar;