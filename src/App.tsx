import './App.css';
import Calendar from './screens/Calendar/ui/Calendar.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login/ui/Login.tsx';
import './App.css';
import Table from './components/DataGridTable/ui/Table.tsx';
import { Path } from './const/path.ts';
import CreateApplication from './screens/CreateApplication/ui/CreateApplication.tsx';
import Home from './screens/Home/ui/Home.tsx';
import { ProtectedRouter } from './features/ProtectedRouter/ProtectedRouter.tsx';
import Header from './components/Header/ui/Header.tsx';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

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
