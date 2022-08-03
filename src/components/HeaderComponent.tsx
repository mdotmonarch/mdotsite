import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const HeaderComponent = () => (
	<Box>
		<Text fontSize='29px' textAlign='right' fontWeight='bold' mb={-8} color='mdot.cyan'>informatics engineer.</Text>
		<Text fontSize='29px' textAlign='left' fontWeight='bold' mb={-8} color='mdot.magenta'>software developer.</Text>
		<Text fontSize='29px' textAlign='center' fontWeight='bold' mb={2} color='mdot.yellow'>neuroscience enthusiast.</Text>
	</Box>
)