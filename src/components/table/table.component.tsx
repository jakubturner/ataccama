import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



interface Props {
    rows?: Array<{data:any}>
}

/// napsat fc ktera vytahne keys z dat


const getKeys = (data: any) => {
   return Object.keys(data[0].data)
}

// const getKids = (data: any) => {
//     return
// }


const  MyTable = (props: Props) =>{

    /// napsat fc ktera vytahne keys z dat

    return (
        <Paper >
            <Table >
                <TableHead>
                    <TableRow>
                        {getKeys(props.rows).map(col => (
                            <TableCell>{col}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows?.map(row => (
                        <TableRow>
                            {getKeys(props.rows).map(col => (
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