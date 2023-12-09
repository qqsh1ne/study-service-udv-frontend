import styles from './TableHeader.module.scss';
import filterIcon from '../../../../assets/filter-icon.svg';
import downloadIcon from '../../../../assets/download-icon.svg';

const TableHeader: React.FC<{ rowsCount: number }> = ({rowsCount}) => {
    const getEnding = () => {
        const temp = rowsCount.toString();
        const lastDigit = temp[temp.length - 1];
        switch (lastDigit) {
            case '1':
                return 'запись'
            case '2':
            case '3':
            case '4':
                return 'записи'
            case '0':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                return 'записей'
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>Сводная таблица</h2>
                <p>{rowsCount} {getEnding()}</p>
            </div>
            <div className={styles.flexWrapper}>
                <div className={styles.searchField}>
                    <div className={styles.searchIcon}></div>
                    <input type="text" name='table-search' id="table-search" placeholder='Найти...'/>
                </div>
                <button className={styles.filterBtn}><img src={filterIcon} alt="Фильтры"/>Фильтры</button>
                <button className={styles.excelBtn}><img src={downloadIcon} alt="Загрузить Excel"/>Загрузить Excel
                </button>
            </div>
        </div>
    )
}

export default TableHeader;
