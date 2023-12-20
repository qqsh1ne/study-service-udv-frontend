import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Toolbar from './Toolbar/Toolbar.tsx';
import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import cls from './Calendar.module.scss';
import Layout from '../../../components/Layout/ui/Layout.tsx';

interface Event {
	start: Date;
	end: Date;
	title: string;
}

i18next.use(languageDetector).init({
	debug: true,
	fallbackLng: 'en',
	resources: {
		en: {},
		ru: {
			today: 'Сегодня',
			month: 'Месяц',
			week: 'Неделя',
			day: 'День',
			agenda: 'Повестка дня'
		}
	}
});

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
	const [events, setEvents] = useState<Event[]>([]);

	const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
		const title = prompt('Введите название события:');
		if (title) {
			const newEvent = { start, end, title };
			setEvents([...events, newEvent]);
		}
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
					onSelectSlot={handleSelect}
					className={cls.calendar}
				/>
				<button className={cls.button}>Добавить событие</button>
			</div>
		</Layout>
	);
};

export default CalendarPage;
