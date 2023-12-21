import {FC} from "react";
import Layout from "../../../../components/Layout/ui/Layout.tsx";
import Status from "../../../../components/ui/Status/Status.tsx";
import {StatusNames} from "../../../../components/ui/Status/StatusNames.ts";
import styles from './ApplicationConfirm.module.scss';
import {NavLink} from "react-router-dom";
import {Path} from "../../../../const/path.ts";

const ApplicationConfirmation: FC = () => {
    return (
        <Layout>
            <div className={styles.confirmation}>
                <h1>Заявка №2281337 успешно заполнена!</h1>
                <div className={styles.wrapper}>
                    <p className={styles.statusDesc}>Статус заявки</p>
                    <Status name={StatusNames.New}/>
                </div>
                <div className={styles.btnsWrapper}>
                    <NavLink to={Path.home} className={styles.toHome}>На главную</NavLink>
                    <NavLink to={Path.home} className={styles.toApplication}>К заявке</NavLink>
                </div>
            </div>
        </Layout>
    );
 };

 export default ApplicationConfirmation;
