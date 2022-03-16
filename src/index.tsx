import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extendTheme } from '@chakra-ui/react';

// React-Router
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

// Chakra-UI
import { ChakraProvider } from '@chakra-ui/react';

// Components
import { NavbarComponent } from './components/NavbarComponent';

// Views
import { HomeView } from './views/HomeView';

// Custom theme
import { theme } from './theme';

ReactDOM.render(
	<ChakraProvider theme={ extendTheme(theme) }>
		<NavbarComponent/>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeView />} />	
			</Routes>
		</BrowserRouter>
	</ChakraProvider>
	, document.querySelector('#root')
);