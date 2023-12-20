import './App.css';
import Calendar from './screens/Calendar/ui/Calendar.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login/ui/Login.tsx';
import './App.css';
import Table from './components/DataGridTable/ui/Table.tsx';
import { Path } from './const/path.ts';
import CreateApplication from './screens/CreateApplication/ui/CreateApplication.tsx';
import Home from './screens/Home/ui/Home.tsx';
import { ProtectedRouter } from './features/Auth/ProtectedRouter.tsx';
import Header from './components/Header/ui/Header.tsx';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route element={<ProtectedRouter />}>
					<Route path={Path.calendar} element={<Calendar />} />
					<Route path={Path.table} element={<Table />} />
					<Route path={Path.home} element={<Home />} />
					<Route path={Path.application} element={<CreateApplication />} />
				</Route>
				<Route path={Path.login} element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
