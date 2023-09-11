import * as ReactDOMClient from 'react-dom/client';
import { extendTheme } from '@chakra-ui/react';

// React-Router
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

// Chakra-UI
import { ChakraProvider } from '@chakra-ui/react';

// Views
import { HomeView } from './views/HomeView';

// Custom theme
import { theme } from './theme';

// create root 
const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
	<ChakraProvider theme={ extendTheme(theme) }>
		<Router>
			<Routes>
				<Route path='/' element={<HomeView />} />
			</Routes>
		</Router>
	</ChakraProvider>
);