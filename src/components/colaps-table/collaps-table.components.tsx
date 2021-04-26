import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
import {resolveAny} from "dns";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

interface Props {
    rows?: Array<{ data: any }>
}

const getKeys = (rows: any) => {
    return getCols(rows[0])
}

const getCols = (row: any) => {
    return Object.keys(row.data)
}


const getRecords = (row: any, childTable: string) => {
    return row.kids[childTable].records || []
}


const getInheritName = (row: any) => {
    return Object.keys(row.kids)[0]

    // Object.keys(row).map(e => row[e].kids)
}

//TODO napsat funkci ktera mi vytahne z radku hodnotu prvniho sloupce

const Row = (props: any) => {
    // const { row } = props;
    const [open, setOpen] = React.useState(false);
    // const classes = useRowStyles();

    const childTable = getInheritName(props.row)

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    {childTable &&
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>}

                    {/*// TODO dodelat ikonku mazani*/}
                </TableCell>


                {getCols(props.row).map(col => (
                    <TableCell>{props.row.data[col]}</TableCell>
                ))}
            </TableRow>
            {childTable &&
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                {childTable}
                            </Typography>
                            <CollapsibleTable rows={getRecords(props.row, childTable)}/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>}
        </React.Fragment>
    );
}


function CollapsibleTable(props: Props) {

    if (props.rows && props.rows.length === 0) {
        return null
    }
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead> {/* here is generation of table header */}
                    <TableRow>
                        <TableCell/>
                        {getKeys(props.rows).map(col => (
                            <TableCell>{col}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows?.map(row => (
                        // <TableRow>
                        //     {getKeys(props.rows).map(col => (
                        //         <TableCell>{row.data[col]}</TableCell>
                        //     ))}
                        // </TableRow>
                        <Row row={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

//
export default CollapsibleTable;

