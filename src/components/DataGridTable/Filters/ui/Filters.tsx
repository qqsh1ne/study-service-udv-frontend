import styles from './Filters.module.scss'
import {Input, Select} from "antd";
import {DatePicker} from "antd/lib";
import React from "react";
import IDataValues from "../../interfaces/IDataValues.ts";

const Filters: React.FC<
    {
        dataValues: IDataValues,
        setAreFiltersOpened: React.Dispatch<React.SetStateAction<boolean>>
    }> = ({dataValues, columnFilters, setColumnFilters, setAreFiltersOpened}) => {
    const {
        course,
        department,
        direction,
        legalPerson,
        member,
        studyCentre,
        team,
        type
    } = dataValues;

    const getOptions: (values: string[]) => { value: string, label: string }[] = (values) =>
        values.map(value => ({value: value, label: value}))

    const onFilterChange: (id: string, value: string | string[]) => void = (id, value) => {
        setColumnFilters((prev) => prev.filter((f) => f.id !== id).concat({id, value}));
    }

    return (
        <div className={styles.window}>
            <div className={styles.filters}>
                <div className={styles.filter}>
                    <h4>Учебный центр</h4>
                    <Select showSearch className={styles.filterItem} options={getOptions(studyCentre)} onSelect={(value) => {onFilterChange('studyCentre', value)}}/>
                </div>
                <div className={styles.filter}>
                    <h4>Курс</h4>
                    <Select showSearch className={styles.filterItem} options={getOptions(course)} onSelect={(value) => {
                        onFilterChange('course', value)
                    }}/>
                </div>
                <div className={styles.filter}>
                    <h4>Тип</h4>
                    <Select showSearch className={styles.filterItem} options={getOptions(type)} onSelect={(value) => {
                        onFilterChange('type', value)
                    }}/>
                </div>
                <div className={styles.filter}>
                    <h4>Участники</h4>
                    <Select showSearch className={styles.filterItem} options={getOptions(member)} onSelect={(value) => {
                        onFilterChange('member', value)
                    }}/>
                </div>
                <div className={styles.filter}>
                    <h4>Департамент</h4>
                    <Select showSearch className={styles.filterItem} options={getOptions(department)}
                            onSelect={(value) => {
                                onFilterChange('department', value)
                            }}/>
                </div>
                <div className={styles.filter}>
                    <h4>Отдел/команда</h4>
                    <Select showSearch className={styles.filterItem} options={getOptions(team)} onSelect={(value) => {
                        onFilterChange('team', value)
                    }}/>
                </div>
                <div className={styles.filter}>
                    <h4>ЮЛ</h4>
                    <Select showSearch className={styles.filterItem} options={getOptions(legalPerson)}
                            onSelect={(value) => {
                                onFilterChange('legalPerson', value)
                            }}/>
                </div>
                <div className={styles.filter}>
                    <h4>Направление обучения</h4>
                    <Select showSearch className={styles.filterItem} options={getOptions(direction)}
                            onSelect={(value) => {
                                onFilterChange('direction', value)
                            }}/>
                </div>
                <div className={styles.filter}>
                    <h4>Дата</h4>
                    <DatePicker.RangePicker className={`${styles.filterItem} ${styles.long}`} disabled/>
                </div>
                <div className={styles.filter}>
                    <h4>Стоимость на 1 чел.</h4>
                    <div className={styles.inputGroup}>
                        <Input className={styles.filterItem} placeholder={'От'} disabled/>
                        <Input className={styles.filterItem} placeholder={'До'} disabled/>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                setAreFiltersOpened(false)
            }}>Применить
            </button>
        </div>
    )
}

export default Filters;
