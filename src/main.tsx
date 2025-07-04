import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.tsx';
import { HashRouter } from 'react-router';

const rootElement = document.getElementById('root');
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<HashRouter>
				<App />
			</HashRouter>
		</StrictMode>,
	);
}
