import './App.css'
import Login from './components/Login/ui/Login.tsx'
import Header from './components/Header/ui/Header.tsx'
import { Calendar } from 'antd'

function App() {
	return (
		<div>
			<Header />
			{/*<Login />*/}
			<Calendar />
		</div>
	)
}

export default App
