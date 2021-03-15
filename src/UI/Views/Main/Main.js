import React from 'react';
import './Main.css';

import Navbar from '../../../UI/Components/Navbar/Navbar';
import Footer from '../../../UI/Components/Footer/Footer';
import Home from '../../../UI/Views/Home/Home';

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
							<Home />
						</Route>
					</Switch>
				</Router>
			<Footer />
			</div>
		);
	}
}

export default Main;