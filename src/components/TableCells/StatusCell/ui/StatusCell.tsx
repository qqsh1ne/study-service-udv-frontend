import {FC} from "react";
import Status from "../../../ui/Status/Status.tsx";
import {StatusNames} from "../../../ui/Status/StatusNames.ts";

const StatusCell: FC<{ getValue: () => StatusNames }> = ({getValue}) => {
    return (
        <>
            <Status name={getValue()}/>
        </>
    )
};

export default StatusCell;
