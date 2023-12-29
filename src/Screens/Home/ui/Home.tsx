import Layout from '../../../components/Layout/ui/Layout.tsx';
import cls from './Home.module.scss';
import {useReactTable, getSortedRowModel, getCoreRowModel, flexRender} from "@tanstack/react-table";
import {FC, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Path} from "../../../const/path.ts";
import ReadonlyCell from "../../../components/TableCells/ReadonlyCell/ui/ReadonlyCell.tsx";
import MemberCell from "../../../components/TableCells/MemberCell/ui/MemberCell.tsx";
import {useApplicationsList} from "../../../hooks/useApplicationsList.ts";
import StatusCell from "../../../components/TableCells/StatusCell/ui/StatusCell.tsx";
import {StatusNamesToNums} from "../../../components/ui/Status/StatusNames.ts";
import {ReactNode} from "react";

const columns = [
	{
		accessorKey: 'id',
		header: '№ заявки',
		cell: ReadonlyCell
	},
	{
		accessorKey: 'courseName',
		header: 'Курс',
		cell: ReadonlyCell
	},
	{
		accessorKey: 'student',
		header: 'Участники',
		cell: MemberCell
	},
	{
		accessorKey: 'changer',
		header: 'Автор',
		cell: ReadonlyCell
	},
	{
		accessorKey: 'status',
		header: 'Статус',
		cell: StatusCell
	}
];

const Home: FC = () => {
	const navigation = useNavigate();
	const list = useApplicationsList();

	const [data, setData] = useState([{}]);

	useEffect(() => {
		setData(list.map((
				{id, course_name: courseName,student, changer, status}
			) => (
				{id, courseName, student, changer, status: StatusNamesToNums[status as number]}))
		);
	}, [list]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel()
	});


	return (
		<Layout>
			<div className={cls.header}>
				<h1>Заявки в компании</h1>
				<NavLink to={Path.application} className={cls.toApp}>
					Создать заявку
				</NavLink>
			</div>
			<div className={cls.table}>
				{table.getHeaderGroups().map((headerGroup) => (
					<div className={cls.tr} key={headerGroup.id}>
						{headerGroup.headers.map((header) => (
							<div className={cls.th} key={header.id}>
								{header.column.columnDef.header as ReactNode}
								{header.column.getCanSort() && !header.column.getIsSorted() && (
									<span
										className={cls.sortIcon}
										onClick={header.column.getToggleSortingHandler()}
									/>
								)}
								{header.column.getIsSorted() === 'desc' && (
									<span
										className={`${cls.sortIcon} ${cls.desc}`}
										onClick={header.column.getToggleSortingHandler()}
									/>
								)}
								{header.column.getIsSorted() === 'asc' && (
									<span
										className={`${cls.sortIcon} ${cls.asc}`}
										onClick={header.column.getToggleSortingHandler()}
									/>
								)}
							</div>
						))}
					</div>
				))}
				{table.getRowModel().rows.map((row) => (
						<div className={cls.tr} key={row.id}
							 // @ts-ignore
							 onClick={() => navigation(`${Path.applications}/${row.original.id}`)}>
							{row.getVisibleCells().map((cell) => {
								return (
									<div className={cls.td} key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</div>
								);
							})}
						</div>
					))}
			</div>
		</Layout>
	);
};

export default Home;
