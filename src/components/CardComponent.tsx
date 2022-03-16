import * as React from 'react';
import { Text, Box, ResponsiveValue } from '@chakra-ui/react';

type CardComponentParams = {
	title: string,
	title_color: string,
	title_align: ResponsiveValue<any>,
	content: string
}

export const CardComponent = (params: CardComponentParams) => (
	<Box
		p='6'
		pt='4'
		mb='4'
		bg='mdot.bluelight'
		borderRadius={5}
	>
		<Text color={params.title_color} textAlign={params.title_align}>
			{params.title}
		</Text>
		<Text pt='2' fontSize='xs'>
			{params.content}
		</Text>
	</Box>
);