import cls from './ApplicationView.module.scss'
import {NavLink} from "react-router-dom";
import {Path} from "../../../const/path.ts";
import PencilIcon from '../../../assets/pencil.svg';
import PinIcon from '../../../assets/paper-clip.svg';
import SendIcon from '../../../assets/paper-plane.svg';
import {Input} from "antd";
import Status from "../../../components/ui/Status/Status.tsx";
import {StatusNames} from "../../../components/ui/Status/StatusNames.ts";

const ApplicationView = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.header}>
                <div className={cls.headerWrapper}>
                    <NavLink to={Path.home} className={cls.headerBtn}><div/>Назад</NavLink>
                    <h1>Заявка # 13372281488</h1>
                </div>
            </div>
            <main className={cls.main}>
                <div className={cls.info}>
                    <div>
                        <div className={cls.infoHeader}>
                            <p>Курс по аналитике 8.11 - 30.11.2023</p>
                        </div>
                        <div className={cls.infoData}>
                            <h3>№ заявки</h3>
                            <p>13372281488</p>
                            <h3>Участник</h3>
                            <p>Иванов Иван Иванович</p>
                            <h3>Руководитель студента</h3>
                            <p>Иванов Иван Иванович</p>
                            <h3>Статус заявки</h3>
                            <p><Status name={StatusNames.Approval}/></p>
                            <h3>Курс</h3>
                            <p>Аналитик данных</p>
                            <h3>Стоимость</h3>
                            <p>100000</p>
                            <h3>Желаемые сроки обучения</h3>
                            <p></p>
                            <h3>Комментарии</h3>
                            <p></p>
                        </div>
                        <div className={cls.infoFooter}>
                            <button><img src={PencilIcon} alt="Редактировать"/>Редактировать</button>
                        </div>
                    </div>
                </div>
                <div className={cls.comments}>
                    <div className={cls.commentsField}>
                        <span>Будет реализовано позже</span>
                    </div>
                    <div className={cls.newComment}>
                        <img src={PinIcon} alt="Прикрепить файл" width={24}/>
                        <Input className={cls.newCommentField} placeholder={'Написать коментарий...'}/>
                        <img src={SendIcon} alt="Отправить" width={24}/>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default ApplicationView;
