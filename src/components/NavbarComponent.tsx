import { Container, Center, Link, Image, Flex, Spacer } from '@chakra-ui/react';
import * as React from 'react';

const NavbarIcon = ( params: {src: string, href: string} ) => (
	<Center>
		<Link href={params.href}>
			<Image boxSize='20px' ml='4' src={params.src} />
		</Link>
	</Center>	
)

export const NavbarComponent = () => (
	<Container>
		<Flex>
			<Image boxSize='80px' objectFit='scale-down' src='https://mdotmonarch.dev/images/logo-m.png'/ >
			<Spacer />
			<NavbarIcon src='https://mdotmonarch.dev/icons/resume.svg' href='https://mdotmonarch.dev/files/resume.pdf' />
			<NavbarIcon src='https://mdotmonarch.dev/icons/e-mail.svg' href='mailto:max@mdotmonarch.dev' />
			<NavbarIcon src='https://mdotmonarch.dev/icons/instagram.svg' href='https://instagram.com/mdotmonarch' />
			<NavbarIcon src='https://mdotmonarch.dev/icons/github.svg' href='https://github.com/mdotmonarch' />
		</Flex>
	</Container>
);