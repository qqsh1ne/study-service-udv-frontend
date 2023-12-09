import dayjs from 'dayjs';

const TYPE_CONFERENCE = {
    id: 1,
    name: 'Конференция',
};
const TYPE_STUDY = {
    id: 2,
    name: 'Обучение',
};
const TYPE_EXAM = {
    id: 3,
    name: 'Экзамен',
};
const TYPES = [TYPE_CONFERENCE, TYPE_STUDY, TYPE_EXAM];

const STUDY_SOFT = {
    id: 1,
    name: 'Софты',
};
const STUDY_HARD = {
    id: 2,
    name: 'Харды',
};
const STUDY_MANAGING = {
    id: 3,
    name: 'Управление',
};
const STUDIES = [STUDY_SOFT, STUDY_HARD, STUDY_MANAGING];


export const rows = [
    {
        id: 1,
        studyCentre: 'UrFU',
        course: 'openedu',
        type: TYPE_CONFERENCE,
        member: 'Иванов Иван Иванович',
        department: 'Крутой разработки',
        team: 'Лушчая',
        legalPerson: 'Иванов Иван Иванович',
        startDate: dayjs('2023-09-10').toDate(),
        endDate: dayjs('2023-12-12').toDate(),
        price: 100000,
        direction: STUDY_MANAGING,
    },
    {
        id: 2,
        studyCentre: 'UDV',
        course: 'coursera',
        type: TYPE_STUDY,
        member: 'Сидоров Иван Васильевич',
        department: 'Аналитики',
        team: 'Крутая',
        legalPerson: 'Крутой Игорь Николаев',
        startDate: dayjs('2023-10-13').toDate(),
        endDate: dayjs('2024-05-25').toDate(),
        price: 10000000,
        direction: STUDY_HARD,
    },
];

export {STUDIES, TYPES};
