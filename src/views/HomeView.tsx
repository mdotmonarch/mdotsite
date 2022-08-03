import * as React from 'react';
import { Container } from '@chakra-ui/react';

import { AttractorComponent } from '../components/AttractorComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { CardComponent } from '../components/CardComponent';

import { lorenz, aizawa, thomas, rucklidge } from '../assets/attractors';

const aboutMe = `
	My name is Maximiliano Orellana. I have a deep interest in neuroscience, 3D modeling/printing, and programming.
	I'd like to make things in the future that involve these topics.
`;

const selectRandomAttractor = (): JSX.Element => {
	const index = Math.floor(Math.random() * 4);
	switch (index) {
		case 0:
			return <AttractorComponent attractor={aizawa}/>;
		case 1:
			return <AttractorComponent attractor={thomas}/>;
		case 2:
			return <AttractorComponent attractor={lorenz}/>;
		case 3:
			return <AttractorComponent attractor={rucklidge}/>;
		default:
			return <AttractorComponent attractor={lorenz}/>;
	}
}

export const HomeView = () => (
	<Container>
		{selectRandomAttractor()}
		<HeaderComponent />
		<CardComponent
			title='About me'
			title_align='left' 
			title_color='mdot.yellow'
			content={aboutMe}
		/>
	</Container>
);