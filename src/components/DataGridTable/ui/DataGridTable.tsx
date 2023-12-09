import {DataGrid, GridToolbarContainer, useGridApiContext} from '@mui/x-data-grid';
import {data} from "../DataGridData.ts";
import Button from '@mui/material/Button';

const customToolbar = () => {
    const apiRef = useGridApiContext();
    const showData = () => console.log(apiRef.current.getRowModels());

    return (
        <GridToolbarContainer>
            <Button onClick={showData}>Show Data</Button>
        </GridToolbarContainer>
    )
}

const DataGridTable = () => {
    return (
        <>
            <DataGrid
                {...data}
                slots={{
                    toolbar: customToolbar,
                }}
            />
        </>
    )
}

export default DataGridTable;
