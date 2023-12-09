import {Select} from "antd";
import {Column} from "@tanstack/react-table";
import {STUDIES, TYPES} from "../../TableMock.ts";

const SelectCell: React.FC<{ column: Column<any, any>, getValue: () => any }> = ({column, getValue}) => {
    const initialValue = getValue();
    const accessorKey = column.columnDef.accessorKey;
    // const getOptions = () => {
    //     switch (accessorKey) {
    //         case 'type':
    //             TYPES.map(type => {
    //                     {
    //                         value: type.name, label
    //                     :
    //                         type.name
    //                     }
    //                 }
    //             )
    //     }
    //
    // }

    return (
        <Select
            defaultValue={initialValue.name}
            options={[
                {value: 'Конференция', label: 'Конференция'},
                {value: 'Обучение', label: 'Обучение'},
                {value: 'Экзамен', label: 'Экзамен'},
            ]}
        />
    )
}

export default SelectCell;
