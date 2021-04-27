import React, {useState} from 'react';
import CollapsibleTable from "./components/colaps-table/collaps-table.components";

import data from './data/data.json'
import {getInheritName, getRecords, getRowId} from "./data/utils";


const App = () => {

    const createRow = (data: any, childTable: any, records: any) => (
        {
            data: data,
            kids: {
                [childTable]: {
                    records: records
                }
            }
        }
    )

    const filterRow = (rows: any, rowId: number) => {
        return rows.filter((row: any) => getRowId(row) !== rowId)
            .map((row: any) => {
                const childTable = getInheritName(row)
                return childTable
                    ? createRow(row.data, childTable, filterRow(getRecords(row, childTable), rowId))
                    : row
            })
    }

    const [mainData, setMainData] = useState(data) //Data Loading from Json and saving into state

    const removeRow = (rowId: number) => {
        setMainData(prevState => filterRow(prevState, rowId))
    }


    return (
        <CollapsibleTable rows={mainData} removeRow={removeRow}/>
    );
}

export default App;
