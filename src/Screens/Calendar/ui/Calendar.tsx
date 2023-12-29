import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Toolbar from '../Toolbar/Toolbar.tsx';
import style from './Calendar.module.scss';
import Layout from '../../../components/Layout/ui/Layout.tsx';
import NewEventForm from '../NewEventForm/NewEventForm.tsx';

interface Event {
	start: Date | undefined;
	end: Date | undefined;
	title: string;
}

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
	const mockEvent = [
		{
			start: new Date(
				'Sun Dec 1 2023 05:00:00 GMT+0500 (Екатеринбург, стандартное время)'
			),
			end: new Date(
				'Wed Dec 7 2023 05:00:00 GMT+0500 (Екатеринбург, стандартное время)'
			),
			title: 'Курс по аналитике'
		},
		{
			start: new Date(
				'Sun Dec 14 2023 05:00:00 GMT+0500 (Екатеринбург, стандартное время)'
			),
			end: new Date(
				'Wed Dec 20 2023 05:00:00 GMT+0500 (Екатеринбург, стандартное время)'
			),
			title: 'Python разработчик'
		},
		{
			start: new Date(
				'Sun Dec 25 2023 05:00:00 GMT+0500 (Екатеринбург, стандартное время)'
			),
			end: new Date(
				'Wed Dec 29 2023 05:00:00 GMT+0500 (Екатеринбург, стандартное время)'
			),
			title: 'Тестирование'
		}
	];
	const [events, setEvents] = useState<Event[]>(mockEvent);
	const [title, setTitle] = useState('');
	const [start, setStart] = useState<Date>();
	const [end, setEnd] = useState<Date>();

	console.log(start, end);

	const onDate = (startDate: Date, endDate: Date) => {
		setStart(startDate);
		setEnd(endDate);
	};
	const onName = (value: string) => {
		setTitle(value);
	};
	const handleSelect = () => {
		const newEvent = { start, end, title };
		setEvents([...events, newEvent]);
	};

	return (
		<Layout>
			<div className={style.wrapper}>
				<Calendar
					components={{ toolbar: Toolbar }}
					views={['month']}
					localizer={localizer}
					events={events}
					style={{ border: 'none' }}
					startAccessor='start'
					endAccessor='end'
					selectable
					className={style.calendar}
					eventPropGetter={() => ({
						style: {
							color: '#B07007',
							fontFamily: 'Montserrat, sans-serif',
							backgroundColor: '#FCDFB1'
						}
					})}
				/>
				<NewEventForm onDate={onDate} onName={onName} onFinish={handleSelect} />
			</div>
		</Layout>
	);
};

export default CalendarPage;
