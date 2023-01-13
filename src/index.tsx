import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById('app-root') as HTMLElement;

const root = ReactDOM.createRoot(el);



root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
); 