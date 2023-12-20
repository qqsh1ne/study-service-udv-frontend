import './App.css';
import Header from './components/Header/ui/Header.tsx';
import Calendar from './components/Calendar/ui/Calendar.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login/ui/Login.tsx';
import './App.css';
import Table from './components/DataGridTable/ui/Table.tsx';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import localeData from 'dayjs/plugin/localeData'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'

dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/calendar' element={<Calendar/>}/>
                        <Route path='/table' element={<Table/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
