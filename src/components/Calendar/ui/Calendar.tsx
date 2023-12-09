import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Toolbar from './Toolbar/Toolbar.tsx';
import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';

interface Event {
	start: Date;
	end: Date;
	title: string;
}

i18next.use(languageDetector).init({
	debug: true,
	fallbackLng: 'en', // Язык по умолчанию (например, английский)
	resources: {
		en: {
			// Ваши переводы на английский
		},
		ru: {
			today: 'Сегодня',
			month: 'Месяц',
			week: 'Неделя',
			day: 'День',
			agenda: 'Повестка дня'
		}
		// Добавьте другие языки по необходимости
	}
});

const localizer = momentLocalizer(moment);

const App = () => {
	const [events, setEvents] = useState<Event[]>([]);

	const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
		const title = prompt('Введите название события:');
		if (title) {
			const newEvent = { start, end, title };
			setEvents([...events, newEvent]);
		}
	};

	return (
		<div>
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
				style={{ height: 750, marginTop: 60, width: 1000, marginLeft: 370 }}
			/>
		</div>
	);
};

export default App;
