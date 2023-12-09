import {GridColDef} from "@mui/x-data-grid";
import {rows} from "./DataGridMock.ts";


const COLUMNS_WIDTH = 150

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: '№ заявки',
        width: COLUMNS_WIDTH,
        type: 'number',
        editable: true,
    },
    {
        field: 'studyCentre',
        headerName: 'Учебный центр',
        width: COLUMNS_WIDTH,
        type: 'string',
        editable: true,
    },
    {
        field: 'course',
        headerName: 'Курс',
        width: COLUMNS_WIDTH,
        type: 'string',
        editable: true,
    },
    {
        field: 'type',
        headerName: 'Тип',
        width: COLUMNS_WIDTH,
        editable: true,
        type: 'singleSelect',
        valueOptions: [
            'Конференция',
            'Онлайн-курс',
            'Треннинг',
        ]
    },
    {
        field: 'member',
        headerName: 'Участник',
        width: COLUMNS_WIDTH,
        editable: true,
        type: 'string',
    },
    {
        field: 'department',
        headerName: 'Департамент',
        width: COLUMNS_WIDTH,
        editable: true,
        type: 'string',
    },
    {
        field: 'team',
        headerName: 'Отдел/команда',
        width: COLUMNS_WIDTH,
        editable: true,
        type: 'string',
    },
    {
        field: 'legalPerson',
        headerName: 'ЮЛ',
        width: COLUMNS_WIDTH,
        editable: true,
        type: 'string',
    },
    {
        field: 'startDate',
        headerName: 'Дата начала обучения',
        width: COLUMNS_WIDTH,
        editable: true,
        type: 'date',
    },
    {
        field: 'endDate',
        headerName: 'Дата конца обучения',
        width: COLUMNS_WIDTH,
        editable: true,
        type: 'date',
    },
    {
        field: 'price',
        headerName: 'Стоимость на 1 чел.',
        width: COLUMNS_WIDTH,
        editable: true,
        type: 'number',
    },
    {
        field: 'direction',
        headerName: 'Направление обучения',
        width: COLUMNS_WIDTH,
        editable: true,
        type: 'string',
    },
];

export const data = {
    columns,
    rows,
}
