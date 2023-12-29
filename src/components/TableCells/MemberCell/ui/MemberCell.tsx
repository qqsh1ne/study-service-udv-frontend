import cls from './MemberCell.module.scss';
import {FC, useEffect, useState} from "react";
import {useGetProfileMutation} from "../../../../services/usersApi.ts";
import {useUsersList} from "../../../../hooks/useUsersList.ts";
import {IUserProfile} from "../../../../types/userTypes.ts";
import ProfilePic from '../../../../assets/people.svg'

const MemberCell: FC<{getValue: () => string}> = ({getValue}) => {
    const [userData, setUserData] = useState<IUserProfile>({});

    const [getProfile] = useGetProfileMutation();
    const usersList = useUsersList();

    const email = getValue();

    useEffect(() => {
        getProfile({
            access_token: localStorage.getItem('access_token') as string,
            email,
        });
    }, []);

    useEffect(() => {
        setUserData(usersList[getValue()]);
    }, [usersList]);

    return userData ? (
        <div className={cls.cell}>
            <img src={ProfilePic} alt=""/>
            <div className={cls.memberData}>
                <p className={cls.name}>{userData.second_name} {userData.first_name} {userData.middle_name}</p>
                <p className={cls.email}>{email}</p>
            </div>
        </div>
    ) : (<></>);
};

export default MemberCell;
