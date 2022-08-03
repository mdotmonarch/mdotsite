import { Container, Center, Link, Image, Flex, Spacer } from '@chakra-ui/react';
import * as React from 'react';

const NavbarIcon = ( params: {src: string, href: string} ) => (
	<Center pl='4'>
		<Link href={params.href}>
			<Image boxSize='20px' src={params.src} />
		</Link>
	</Center>	
)

export const NavbarComponent = () => (
	<Container>
		<Flex>
			<Image boxSize='80px' objectFit='scale-down' src='https://mdotmonar.ch/images/logo-m.png'/ >
			<Spacer />
			<NavbarIcon src='https://mdotmonar.ch/icons/resume.svg' href='https://mdotmonar.ch/files/resume.pdf' />
			<NavbarIcon src='https://mdotmonar.ch/icons/e-mail.svg' href='mailto:max@mdotmonar.ch' />
			<NavbarIcon src='https://mdotmonar.ch/icons/instagram.svg' href='https://instagram.com/mdotmonarch' />
			<NavbarIcon src='https://mdotmonar.ch/icons/github.svg' href='https://github.com/mdotmonarch' />
		</Flex>
	</Container>
);