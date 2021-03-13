import React from 'react';
import './Main.css';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

class Main extends React.Component {
	constructor() {
		super();
		this.state = {}
	}

	render() {
		return (
			<div className='Main'>
				<Navbar />
					<Router>
						<Switch>
							<Route path='/'>
								<About />
							</Route>
						</Switch>
					</Router>
				<Footer />
			</div>
		);
	}
}

export default Main;