import React, {useEffect, useState} from "react";
import styles from './EdiatableCell.module.scss'
import {Input} from "antd";

const EditableCell: React.FC<{ getValue: () => any }> = ({getValue}) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return (
        <Input.TextArea className={styles.cell} value={value} autoSize={{maxRows: 3}} onChange={e => setValue(e.target.value)}/>
    );
};

export default EditableCell;
