import styles from './TablePagination.module.scss';
import PaginationItem from "../PaginationItem/ui/PaginationItem.tsx";
import React from "react";

const MAX_ITEMS_PER_LINE = 7;

const TablePagination: React.FC = ({table}) => {
    return (
        <div className={styles.pagination}>
            <div className={styles.screens}>
                {Array.from(Array(table.getPageCount()))
                    .map((_, index) =>
                        <PaginationItem
                            number={index + 1}
                            isActive={index === table.getState().pagination.pageIndex}
                            onClick={table.setPageIndex}
                        />)}
            </div>
            <div className={styles.paginationNav}>
                <button className={styles.navBtn} onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}><span></span>Назад</button>
                <button className={styles.navBtn} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Вперед<span></span></button>
            </div>
        </div>
    )
}

export default TablePagination;
