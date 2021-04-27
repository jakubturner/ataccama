import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {getKeys, getRowId} from "../../data/utils";
import Row from './row.component'

interface Props {
    rows?: Array<{ data: any }>,
    removeRow: (rowId: number) => void
}

function CollapsibleTable(props: Props) {

    if (props.rows && props.rows.length === 0) {
        return null
    }
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2}/>
                        {getKeys(props.rows).map(col => (
                            <TableCell key={col}>{col}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows?.map(row => {
                        const rowId = getRowId(row)
                        return <Row key={rowId} row={row} removeRow={props.removeRow}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

//
export default CollapsibleTable;

