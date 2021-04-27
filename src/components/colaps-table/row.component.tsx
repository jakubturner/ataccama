import React from "react";
import {getCols, getInheritName, getRecords, getRowId} from "../../data/utils";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DeleteIcon from "@material-ui/icons/Delete";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CollapsibleTable from "./collaps-table.components";

const Row = (props: any) => {
    // const { row } = props;
    const [open, setOpen] = React.useState(false);
    // const classes = useRowStyles();

    const childTable = getInheritName(props.row)
    const rowId = getRowId(props.row)

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
                <TableCell>
                    <DeleteIcon onClick={() => props.removeRow(rowId)}/>
                </TableCell>
                {getCols(props.row).map(col => (
                    <TableCell key={col}>{props.row.data[col]}</TableCell>
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
                            <CollapsibleTable rows={getRecords(props.row, childTable)} removeRow={props.removeRow}/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>}
        </React.Fragment>
    );
}

export default Row