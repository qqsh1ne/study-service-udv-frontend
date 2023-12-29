import cls from './ApplicationView.module.scss'
import {NavLink, useParams} from "react-router-dom";
import {Path} from "../../../const/path.ts";
import PencilIcon from '../../../assets/pencil.svg';
import PinIcon from '../../../assets/paper-clip.svg';
import SendIcon from '../../../assets/paper-plane.svg';
import {Input} from "antd";
import Status from "../../../components/ui/Status/Status.tsx";
import {StatusNamesToNums} from "../../../components/ui/Status/StatusNames.ts";
import {useApplication} from "../../../hooks/useApplication.ts";
import {IApplicationListResponseItem} from "../../Home/types/ApplicationList.types.ts";
import dayjs from "dayjs";
import {useEffect, useState} from "react";
import {IUserProfile} from "../../../types/userTypes.ts";
import {useGetProfileMutation} from "../../../services/usersApi.ts";
import {useUsersList} from "../../../hooks/useUsersList.ts";


const ApplicationView = () => {
    const params = useParams();
    const [data, setData] = useState<IApplicationListResponseItem | undefined>({});
    const [studentData, setStudentData] = useState<IUserProfile>({});
    const [changerData, setChangerData] = useState<IUserProfile>({});

    const [getProfile] = useGetProfileMutation();

    const usersList = useUsersList();
    const app = useApplication(parseInt(params.id as string));

    useEffect(() => {
        setData(app);
    }, [app]);

    useEffect(() => {
        getProfile({
            access_token: localStorage.getItem('access_token') as string,
            email: data?.student as string,
        });
        getProfile({
            access_token: localStorage.getItem('access_token') as string,
            email: data?.changer as string,
        });
    }, [data]);

    useEffect(() => {
        setStudentData(usersList[data?.student as string]);
        setChangerData(usersList[data?.changer as string]);
        console.log(studentData)
    }, [usersList]);

    return data && studentData && changerData ? (
        <div className={cls.wrapper}>
            <div className={cls.header}>
                <div className={cls.headerWrapper}>
                    <NavLink to={Path.home} className={cls.headerBtn}><div/>Назад</NavLink>
                    <h1>Заявка # {data.id}</h1>
                </div>
            </div>
            <main className={cls.main}>
                <div className={cls.info}>
                    <div>
                        <div className={cls.infoHeader}>
                            <p>{data.course_name} {dayjs(data.start_date).format('DD.MM.YYYY')} - {dayjs(data.end_date).format('DD.MM.YYYY')}</p>
                        </div>
                        <div className={cls.infoData}>
                            <h3>№ заявки</h3>
                            <p>{data.id}</p>
                            <h3>Участник</h3>
                            <p>{studentData.first_name} {studentData.second_name} {studentData.middle_name}</p>
                            <h3>Руководитель студента</h3>
                            <p>{changerData.first_name} {changerData.second_name} {changerData.middle_name}</p>
                            <h3>Статус заявки</h3>
                            <div className={cls.infoStatus}><Status name={StatusNamesToNums[data.status as number]}/></div>
                            <h3>Курс</h3>
                            <p>{data.course_name}</p>
                            <h3>Стоимость</h3>
                            <p>{data.cost}</p>
                            <h3>Желаемые сроки обучения</h3>
                            <p>{dayjs(data.start_date).format('DD MMMM YYYY')} - {dayjs(data.end_date).format('DD MMMM YYYY')}</p>
                            <h3>Комментарии</h3>
                            <p>-</p>
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
    ) : (<></>)
};

export default ApplicationView;
