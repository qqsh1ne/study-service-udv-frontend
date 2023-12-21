import React, {useState} from "react";
import {DatePicker, DatePickerProps} from "antd";
import dayjs from "dayjs";



const DateCell: React.FC<{ getValue: () => any }> = ({getValue}) => {
    const [date, setDate] = useState(dayjs(getValue()));

    const onChange: DatePickerProps["onChange"] = (date) => {
        setDate(date);
    }

    return (
        <div>
            <DatePicker value={date} format={'MMM D, YYYY'} onChange={onChange}/>
        </div>
    )
}

export default DateCell;
