import { Box, Text, Link } from '@chakra-ui/react';

export const OverlayComponent = (): JSX.Element => {
	return (
		<>
		<Box style={{position: 'absolute', top: 20, left: 25, zIndex: 1}}>
			<Text fontWeight="bold">
			{`Maximiliano Orellana`}
			</Text>
			<Text>
			{`Engineer`}
			</Text>
			<Text fontWeight="bold">
			{`___`}
			</Text>
			<Text>
				<Link href='https://mdotmonar.ch/files/resume.pdf' isExternal>
					{`résumé`}
				</Link>
			</Text>
			<Text>
				<Link href='mailto:max@mdotmonar.ch' isExternal>
					{`email`}
				</Link>
			</Text>
		</Box>
		<Box style={{position: 'absolute', bottom: 20, right: 25, zIndex: 1}}>
			<Text>
				{`© 2023`}
			</Text>
		</Box>
		</>
	)
}