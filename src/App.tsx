import './App.css'
import Login from './components/Login/ui/Login.tsx'
import Table from "./components/DataGridTable/ui/Table.tsx";
import Header from './components/Header/ui/Header.tsx'
import { Calendar } from 'antd'

function App() {
	return (
		<div>
			<Header />
			{/*<Login />*/}
			<Table />
			{/*<Calendar />*/}
		</div>
	)
}

export default App
