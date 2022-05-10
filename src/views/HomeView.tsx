import * as React from 'react';
import { Container } from '@chakra-ui/react';

import { LorenzAttractorComponent } from '../components/LorenzAttractorComponent';
import { AizawaAttractorComponent } from '../components/AizawaAttractorComponent';
import { ThomasAttractorComponent } from '../components/ThomasAttractorComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { CardComponent } from '../components/CardComponent';

const aboutMe = `
	I'm an informatics engineer student at the University of Santiago de Chile.
	I have a deep interest in neuroscience, 3D printing, and programming.
	I'd like to make things in the future that involve these topics.
`;

const aboutAttractors = `
	They're strange attractors!
	I initially programmed the Lorenz attractor in order to gain a better understanding on how to represent a system of differential equations in code,
	but then I quickly loved the idea of using them to create interesting visualizations.
	You can zoom, move and rotate the attractor to see how it behaves, and reload the page to see another random attractor.
`;


const selectRandomAttractor = (): JSX.Element => {
	const index = Math.floor(Math.random() * 3);
	switch (index) {
		case 0:
			return <LorenzAttractorComponent />;
		case 1:
			return <AizawaAttractorComponent />;
		case 2:
			return <ThomasAttractorComponent />;
		default:
			return <LorenzAttractorComponent />;
	}
}

export const HomeView = () => (
	<Container>
		{selectRandomAttractor()}
		<HeaderComponent />
		<CardComponent
			title='About me'
			title_align='left' 
			title_color='mdot.magenta'
			content={aboutMe}
		/>
		<CardComponent
			title='About the funky moving particles above this page'
			title_align='left' 
			title_color='mdot.cyan'
			content={aboutAttractors}
		/>
	</Container>
);