import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Toolbar from './Toolbar/Toolbar.tsx';
import cls from './Calendar.module.scss';
import Layout from '../../../components/Layout/ui/Layout.tsx';
import NewEventForm from '../NewEventForm/NewEventForm.tsx';

interface Event {
	start: Date | undefined;
	end: Date | undefined;
	title: string;
}

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
	const [events, setEvents] = useState<Event[]>([]);
	const [title, setTitle] = useState('');
	const [start, setStart] = useState<Date>();
	const [end, setEnd] = useState<Date>();
	console.log(start, end);
	console.log(events);
	const onDate = (startDate: Date, endDate: Date) => {
		setStart(startDate);
		setEnd(endDate);
	};
	const onName = (e: any) => {
		setTitle(e.target.value);
	};
	const handleSelect = () => {
		const newEvent = { start, end, title };
		setEvents([...events, newEvent]);
	};

	return (
		<Layout>
			<div className={cls.wrapper}>
				<Calendar
					messages={{
						month: 'Месяц',
						week: 'Неделя',
						day: 'День'
					}}
					components={{ toolbar: Toolbar }}
					views={['month']}
					localizer={localizer}
					events={events}
					startAccessor='start'
					endAccessor='end'
					selectable
					className={cls.calendar}
				/>
				<NewEventForm onDate={onDate} onName={onName} onFinish={handleSelect} />
			</div>
		</Layout>
	);
};

export default CalendarPage;
