import {Box} from "@mui/material";
import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {rows} from "../TableMock.ts";
import {useState} from "react";
import styles from './Table.module.scss'
import TableHeader from "../TableHeader/ui/TableHeader.tsx";
import TablePagination from "../TablePagination/ui/TablePagination.tsx";
import EditableCell from "../EditableCell/ui/EditableCell.tsx";
import SelectCell from "../SelectCell/ui/SelectCell.tsx";

const columns = [
    {
        accessorKey: 'checkbox',
        cell: (props) => <input type="checkbox"/>
    },
    {
        accessorKey: 'id',
        header: '№ заявки',
        cell: EditableCell
    },
    {
        accessorKey: 'studyCentre',
        header: 'Учебный центр',
        cell: EditableCell
    },
    {
        accessorKey: 'course',
        header: 'Курс',
        cell: EditableCell
    },
    {
        accessorKey: 'type',
        header: 'Тип',
        cell: SelectCell,
    },
    {
        accessorKey: 'member',
        header: 'Участники',
        cell: EditableCell
    },
    {
        accessorKey: 'department',
        header: 'Департамент',
        cell: EditableCell
    },
    {
        accessorKey: 'team',
        header: 'Отдел/команда',
        cell: EditableCell
    },
    {
        accessorKey: 'legalPerson',
        header: 'ЮЛ',
        cell: EditableCell
    },
    {
        accessorKey: 'startDate',
        header: 'Дата начала',
        cell: (props) => <p className={styles.cellValue}>{props.getValue()?.toLocaleDateString()}</p>
    },
    {
        accessorKey: 'endDate',
        header: 'Дата конца',
        cell: (props) => <p className={styles.cellValue}>{props.getValue()?.toLocaleDateString()}</p>
    },
    {
        accessorKey: 'price',
        header: 'Стоимость на 1 чел.',
        cell: EditableCell
    },
    {
        accessorKey: 'direction',
        header: 'Направление обучения',
        cell: SelectCell,
    },
    {
        accessorKey: 'icons',
    }
]

const Table: React.FC = () => {
    const [data, setData] = useState(rows)
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    const getCheckBox = () =>(<input type="checkbox"/>)
    console.log(table.getHeaderGroups())
    return (
        <div className={styles.wrapper}>
            <TableHeader rowsCount={data.length}/>
            <Box className={styles.table}>
                <fieldset>
                    {table.getHeaderGroups().map(headerGroup =>
                        <Box className={styles.tr} key={headerGroup.id}>
                            {headerGroup.headers.map(
                                header =>
                                    <Box className={styles.th} key={header.id}>
                                        {header.column.columnDef.accessorKey === 'checkbox' ? getCheckBox() : header.column.columnDef.header}
                                    </Box>
                            )}
                        </Box>
                    )}
                    {table.getRowModel().rows.map(row => <Box className={styles.tr} key={row.id}>
                        {row.getVisibleCells().map(cell => <Box className={styles.td} key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </Box>)}
                    </Box>)}
                </fieldset>
            </Box>
            <TablePagination rowsCount={data.length}/>
        </div>
    )
}

export default Table;
