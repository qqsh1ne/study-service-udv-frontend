import cls from './MemberCell.module.scss';
import {FC} from "react";

const MemberCell: FC<{getValue: () => string}> = ({getValue}) => {
    return (
        <div className={cls.cell}>
            <img src="" alt=""/>
            <div className={cls.memberData}>
                <p className={cls.name}>Иванов Иван Иванович</p>
                <p className={cls.email}>{getValue()}</p>
            </div>
        </div>
    );
};

export default MemberCell;
