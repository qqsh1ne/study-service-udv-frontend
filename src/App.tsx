import './App.css';
import Header from './components/Header/ui/Header.tsx';
import Calendar from './components/Calendar/ui/Calendar.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/ui/Login.tsx';
import './App.css';
import Table from './components/DataGridTable/ui/Table.tsx';

function App() {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				{/*<Header />*/}
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/calendar' element={<Calendar />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
