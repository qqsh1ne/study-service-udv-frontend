import {FC} from "react";

const ReadonlyCell: FC<{ getValue: () => string | number}> = ({getValue}) => {
    return (
        <p>{getValue()}</p>
    )
}

export default ReadonlyCell;
