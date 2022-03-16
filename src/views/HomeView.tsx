import * as React from 'react';
import { Container, Text } from '@chakra-ui/react';

import { LorenzAttractorComponent } from '../components/LorenzAttractorComponent';
import { HeaderComponent } from '../components/HeaderComponent';

export const HomeView = () => (
	<Container>
		<LorenzAttractorComponent />
		<HeaderComponent />
	</Container>
);

