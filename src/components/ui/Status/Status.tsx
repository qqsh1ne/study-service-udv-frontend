import {StatusNames} from "./StatusNames.ts";
import {FC} from "react";
import styles from './Status.module.scss';
import {StatusesData} from "./StatusesData.ts";

const Status: FC<{ name: StatusNames }> = ({name}) => {
    if (!name) {
        return <></>
    }
    const currentStatusData = StatusesData[name];
    return (
        <div className={`${styles.status} ${styles[currentStatusData.className]}`}>
            <img src={currentStatusData.icon}/>
            <p>{currentStatusData.name}</p>
        </div>
    )
};

export default Status;
