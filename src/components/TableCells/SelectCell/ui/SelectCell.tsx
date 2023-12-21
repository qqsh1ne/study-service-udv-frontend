import {Select} from "antd";
import {Column} from "@tanstack/react-table";
import {STUDIES, TYPES} from '../../../DataGridTable/TableMock.ts';
import React from "react";

const SelectCell: React.FC<{ column: Column<any, any>, getValue: () => any }> = ({column, getValue}) => {
    const initialValue = getValue();
    const accessorKey = column.columnDef.accessorKey;
    const getOptions = () => {
        switch (accessorKey) {
            case 'type':
                return TYPES.map(type => ({value: type.name, label: type.name}));
            case 'direction':
                return STUDIES.map(direction => ({value: direction.name, label: direction.name}));
        }
    }

    return (
        <Select
            defaultValue={initialValue}
            options={getOptions()}
        />
    )
}

export default SelectCell;
