import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main/Main';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>,
	document.getElementById('root')
);

