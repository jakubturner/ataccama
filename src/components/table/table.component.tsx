import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



interface Props {
    rows: Array<{data:any}>
}

/// napsat fc ktera vytahne keys z dat


const getKeys = (data: any) => {
   return Object.keys(data[0].data)
}


const  MyTable = (props: Props) =>{

    /// napsat fc ktera vytahne keys z dat

    return (
        <Paper >
            <Table >
                <TableHead>
                    <TableRow>
                        {getKeys(props).map(col => (
                            <TableCell>{col}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => (
                        <TableRow>
                            {getKeys(props).map(col => (
                                <TableCell>{row.data[col]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default MyTable