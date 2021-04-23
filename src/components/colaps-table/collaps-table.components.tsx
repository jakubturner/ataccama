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

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

interface Props {
    rows?: Array<{data:any}>
}
const getKeys = (rows: any) => {
    return getCols(rows[0])
}

const getCols = (row: any) => {
    return Object.keys(row.data)
}

// TODO: napsat funkcni ktera mi z radku vytahne jestli ma zanorenou tabulku objext keys row.kids vytahne nazev
// TODO: doplnit jako nazvy tabulek
// TODO: Vyresit if pokud neni zanorena tabulka aby se nezobrazovala ikonka na rozbaleni
// TODO: poslat si has_phones do funkce getRecords aby byla schupa ziskat data


const getRecords = (row: any) => {
    return row.kids.has_relatives?.records || []
}


 const  Row = (props: any) =>{
    // const { row } = props;
    const [open, setOpen] = React.useState(false);
    // const classes = useRowStyles();

     console.log(props)

    return (
        <React.Fragment>
            <TableRow >
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>


                            {getCols(props.row).map(col => (
                                <TableCell>{props.row.data[col]}</TableCell>
                            ))}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                dddd
                            </Typography>
                            <CollapsibleTable rows={getRecords(props.row)}/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}



function CollapsibleTable(props: Props) {

    if (props.rows && props.rows.length === 0){
        return null
    }
    return (
        <TableContainer component={Paper}>
            <Table >
                <TableHead> {/* tady generuju hlavicku tabulky */}
                    <TableRow>
                        {getKeys(props.rows).map(col => (
                            <TableCell>{col}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody> {/* tady generuju hlavicku tabulky */}
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

