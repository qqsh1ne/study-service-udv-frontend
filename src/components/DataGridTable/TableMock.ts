import dayjs from 'dayjs';
const TYPE_CONFERENCE = {
	id: 1,
	name: 'Конференция'
};
const TYPE_STUDY = {
	id: 2,
	name: 'Обучение'
};
const TYPE_EXAM = {
	id: 3,
	name: 'Экзамен'
};
const TYPES = [TYPE_CONFERENCE, TYPE_STUDY, TYPE_EXAM];

const STUDY_SOFT = {
	id: 1,
	name: 'Софты'
};
const STUDY_HARD = {
	id: 2,
	name: 'Харды'
};
const STUDY_MANAGING = {
	id: 3,
	name: 'Управление'
};
const STUDIES = [STUDY_SOFT, STUDY_HARD, STUDY_MANAGING];

export const rows = [
	{
		id: 1,
		studyCentre: 'UrFU',
		course: 'openedu',
		type: 'Конференция',
		member: 'Иванов Иван Иванович',
		department: 'Крутой разработки',
		team: 'Лушчая',
		legalPerson: 'Иванов Иван Иванович',
		startDate: dayjs('2023-09-10'),
		endDate: dayjs('2023-12-12'),
		price: 100000,
		direction: 'Управление'
	},
	{
		id: 2,
		studyCentre: 'UDV',
		course: 'coursera',
		type: 'Обучение',
		member: 'Сидоров Иван Васильевич',
		department: 'Аналитики',
		team: 'Крутая',
		legalPerson: 'Крутой Игорь Николаев',
		startDate: '2023-10-13',
		endDate: '2024-05-25',
		price: 10000000,
		direction: 'Харды'
	},
	{
		id: 3,
		studyCentre: 'UDV',
		course: 'openedu',
		type: 'Обучение',
		member: 'Крутой Иван Васильевич',
		department: 'Аналитики',
		team: 'Первая',
		legalPerson: 'Крутой Иаков Николаев',
		startDate: '2023-11-02',
		endDate: '2025-02-27',
		price: 10000000,
		direction: 'Харды'
	},
	{
		id: 4,
		studyCentre: 'UDV',
		course: 'openedu',
		type: 'Экзамен',
		member: 'Сидоров Иван Иванович',
		department: 'Дизайна',
		team: 'Третья',
		legalPerson: 'Крутой Валерий Николаев',
		startDate: '2023-10-13',
		endDate: '2024-05-25',
		price: 199289,
		direction: 'Софты'
	},
	{
		id: 5,
		studyCentre: 'UDV',
		course: 'openedu',
		type: 'Экзамен',
		member: 'Сидоров Иван Иванович',
		department: 'Дизайна',
		team: 'Третья',
		legalPerson: 'Крутой Валерий Николаев',
		startDate: '2023-10-13',
		endDate: '2024-05-25',
		price: 199289,
		direction: 'Софты'
	},
	{
		id: 6,
		studyCentre: 'UDV',
		course: 'openedu',
		type: 'Экзамен',
		member: 'Сидоров Иван Иванович',
		department: 'Дизайна',
		team: 'Третья',
		legalPerson: 'Крутой Валерий Николаев',
		startDate: '2023-10-13',
		endDate: '2024-05-25',
		price: 199289,
		direction: 'Софты'
	},
	{
		id: 7,
		studyCentre: 'UDV',
		course: 'openedu',
		type: 'Экзамен',
		member: 'Сидоров Иван Иванович',
		department: 'Дизайна',
		team: 'Третья',
		legalPerson: 'Крутой Валерий Николаев',
		startDate: '2023-10-13',
		endDate: '2024-05-25',
		price: 199289,
		direction: 'Софты'
	},
	{
		id: 8,
		studyCentre: 'UDV',
		course: 'openedu',
		type: 'Экзамен',
		member: 'Сидоров Иван Иванович',
		department: 'Дизайна',
		team: 'Третья',
		legalPerson: 'Крутой Валерий Николаев',
		startDate: '2023-10-13',
		endDate: '2024-05-25',
		price: 199289,
		direction: 'Софты'
	},
	{
		id: 9,
		studyCentre: 'UDV',
		course: 'openedu',
		type: 'Экзамен',
		member: 'Сидоров Иван Иванович',
		department: 'Дизайна',
		team: 'Третья',
		legalPerson: 'Крутой Валерий Николаев',
		startDate: '2023-10-13',
		endDate: '2024-05-25',
		price: 199289,
		direction: 'Софты'
	},
	{
		id: 10,
		studyCentre: 'UDV',
		course: 'openedu',
		type: 'Экзамен',
		member: 'Сидоров Иван Иванович',
		department: 'Дизайна',
		team: 'Третья',
		legalPerson: 'Крутой Валерий Николаев',
		startDate: '2023-10-13',
		endDate: '2024-05-25',
		price: 199289,
		direction: 'Софты'
	},
	{
		id: 11,
		studyCentre: 'UDV',
		course: 'openedu',
		type: 'Экзамен',
		member: 'Сидоров Иван Иванович',
		department: 'Дизайна',
		team: 'Третья',
		legalPerson: 'Крутой Валерий Николаев',
		startDate: '2023-10-13',
		endDate: '2024-05-25',
		price: 199289,
		direction: 'Софты'
	},

];

export { STUDIES, TYPES };
