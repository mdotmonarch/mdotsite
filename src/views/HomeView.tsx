import * as React from 'react';
import { Container } from '@chakra-ui/react';

import { LorenzAttractorComponent } from '../components/LorenzAttractorComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { CardComponent } from '../components/CardComponent';

export const HomeView = () => (
	<Container>
		<LorenzAttractorComponent />
		<HeaderComponent />
		<CardComponent title='About' title_align='left' title_color='mdot.magenta' content='Currently the site is on active development. You can find my resume and contact information at the top.' />

	</Container>
);