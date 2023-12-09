import styles from './TablePagination.module.scss'
import {useState} from "react";

const MAX_ITEMS_PER_LINE = 7;

const TablePagination: React.FC<{ rowsCount: number }> = ({rowsCount}) => {
    const [currentScreen, setCurrentScreen] = useState(1);
    const screensCount = rowsCount % 10 == 0 ? rowsCount / 10 : rowsCount / 10 + 1;

    return (
        <div className={styles.pagination}>
            <div className={styles.screens}></div>
            <div className={styles.paginationNav}>
                <button className={styles.navBtn} disabled={currentScreen === 1}><span></span>Назад</button>
                <button className={styles.navBtn} disabled={currentScreen === screensCount}>Вперед<span></span></button>
            </div>
        </div>
    )
}

export default TablePagination;
