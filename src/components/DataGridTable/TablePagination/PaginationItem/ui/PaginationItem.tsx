import React from "react";
import styles from './PaginationItem.module.scss'
import {Updater} from "@tanstack/react-table";

const PaginationItem: React.FC<{
    number: number,
    isActive: boolean,
    onClick: (updater: Updater<number>) => void
}> = ({number, isActive, onClick}) => {
    return (
        <div
            className={`${styles.item} ${isActive ? styles.active : ''}`}
            onClick={() => onClick(number - 1)}
        >
            {number}
        </div>
    )
}

export default PaginationItem;
