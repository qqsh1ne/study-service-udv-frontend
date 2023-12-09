import dayjs from 'dayjs'

export const rows = [
    {
        id: 1,
        studyCentre: 'UrFU',
        course: 'openedu',
        type: 'Онлайн-курс',
        member: 'Иванов Иван Иванович',
        department: 'Крутой разработки',
        team: 'Лушчая',
        legalPerson: 'Иванов Иван Иванович',
        startDate: dayjs('2023-09-10').toDate(),
        endDate: dayjs('2023-12-12').toDate(),
        price: 100000,
        direction: 'Программная инженерия'
    },
    {
        id: 2,
        studyCentre: 'UDV',
        course: 'coursera',
        type: 'Треннинг',
        member: 'Сидоров Иван Васильевич',
        department: 'Аналитики',
        team: 'Крутая',
        legalPerson: 'Крутой Игорь Николаев',
        startDate: dayjs('2023-10-13').toDate(),
        endDate: dayjs('2024-05-25').toDate(),
        price: 10000000,
        direction: 'ИВТ'
    },
];
