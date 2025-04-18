import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './Pages/HomePage.tsx';
import Layout from './Layouts/Layout.tsx';
import AboutPage from './Pages/AboutPage.tsx';
import ImprintPage from './Pages/ImprintPage.tsx';
import NotFoundPage from './Pages/NotFoundPage.tsx';

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="imprint" element={<ImprintPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
