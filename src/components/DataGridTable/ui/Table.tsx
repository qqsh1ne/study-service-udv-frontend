import {Box} from "@mui/material";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import {rows} from "../TableMock.ts";
import React, {ReactNode, useState} from "react";
import styles from './Table.module.scss'
import TableHeader from "../TableHeader/ui/TableHeader.tsx";
import TablePagination from "../TablePagination/ui/TablePagination.tsx";
import IDataValues from "../interfaces/IDataValues.ts";
import EditableCell from '../../TableCells/EditableCell/ui/EditableCell.tsx'
import SelectCell from "../../TableCells/SelectCell/ui/SelectCell.tsx";
import DateCell from "../../TableCells/DateCell/ui/DateCell.tsx";
import DeleteCell from "../../TableCells/DeleteCell/ui/DeleteCell.tsx";

const columns = [
    {
        accessorKey: 'checkbox',
        cell: () => <input type="checkbox"/>,
        enableSorting: false,
    },
    {
        accessorKey: 'id',
        header: '№ заявки',
        cell: EditableCell,
    },
    {
        accessorKey: 'studyCentre',
        header: 'Учебный центр',
        cell: EditableCell,
        enableColumnFilter: true,
        filterFn: "equalsString",
    },
    {
        accessorKey: 'course',
        header: 'Курс',
        cell: EditableCell,
        enableColumnFilter: true,
        filterFn: "equalsString",
    },
    {
        accessorKey: 'type',
        header: 'Тип',
        cell: SelectCell,
        enableColumnFilter: true,
        filterFn: "equalsString",
        enableSorting: false,
    },
    {
        accessorKey: 'member',
        header: 'Участники',
        cell: EditableCell,
        enableColumnFilter: true,
        filterFn: "equalsString",
    },
    {
        accessorKey: 'department',
        header: 'Департамент',
        cell: EditableCell,
        enableColumnFilter: true,
        filterFn: "equalsString",
    },
    {
        accessorKey: 'team',
        header: 'Отдел/команда',
        cell: EditableCell,
        enableColumnFilter: true,
        filterFn: "equalsString",
    },
    {
        accessorKey: 'legalPerson',
        header: 'ЮЛ',
        cell: EditableCell,
        enableColumnFilter: true,
        filterFn: "equalsString",
    },
    {
        accessorKey: 'startDate',
        header: 'Дата начала',
        cell: DateCell,
    },
    {
        accessorKey: 'endDate',
        header: 'Дата конца',
        cell: DateCell,
    },
    {
        accessorKey: 'price',
        header: 'Стоимость на 1 чел.',
        cell: EditableCell,
        enableColumnFilter: true,
    },
    {
        accessorKey: 'direction',
        header: 'Направление обучения',
        cell: SelectCell,
        enableSorting: false,
    },
    {
        accessorKey: 'icons',
        cell: DeleteCell,
        enableSorting: false,
    }
];

const getDataValues: (data: any) => IDataValues = (data) => {
    const values: IDataValues = {
        'studyCentre': [],
        'course': [],
        'type': [],
        'member': [],
        'department': [],
        'team': [],
        'legalPerson': [],
        'direction': [],
    }
    data.forEach(row => Object.entries(row).forEach(([key, value]) => {
        if (key !== 'checkbox' && key !== 'id' && key !== 'startDate' && key !== 'endDate' && key !== 'icons' && key !== 'price' && !values[key].includes(value)) {
            values[key].push(value);
        }
    }));
    return values;
}

const Table: React.FC = () => {
    const [data, setData] = useState(rows);
    const [columnFilters, setColumnFilters] = useState([]);

    const dataValues = getDataValues(data)

    const table = useReactTable({
        data,
        columns,
        state: {
            columnFilters,
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const getCheckBox = () =>(<input type="checkbox"/>)
    return (
        <div className={styles.wrapper}>
            <TableHeader rowsCount={data.length} dataValues={dataValues} columnFilters={columnFilters} setColumnFilters={setColumnFilters}/>
            <Box className={styles.table}>
                <fieldset>
                    {table.getHeaderGroups().map(headerGroup =>
                        <Box className={styles.tr} key={headerGroup.id}>
                            {headerGroup.headers.map(
                                header =>
                                    <Box className={styles.th} key={header.id}>
                                        {header.column.columnDef.accessorKey === 'checkbox' ? getCheckBox() : header.column.columnDef.header as ReactNode}
                                        {header.column.getCanSort() && !header.column.getIsSorted() && (
                                            <span
                                                className={styles.sortIcon}
                                                onClick={header.column.getToggleSortingHandler()}
                                            />
                                        )}
                                        {header.column.getIsSorted() === 'desc' && (
                                            <span
                                                className={`${styles.sortIcon} ${styles.desc}`}
                                                onClick={header.column.getToggleSortingHandler()}
                                            />
                                        )}
                                        {header.column.getIsSorted() === 'asc' && (
                                            <span
                                                className={`${styles.sortIcon} ${styles.asc}`}
                                                onClick={header.column.getToggleSortingHandler()}
                                            />
                                        )}
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
            <TablePagination table={table}/>
        </div>
    )
}

export default Table;
