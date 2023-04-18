import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Iconify, Image } from '../components';
import { visuallyHidden } from '@mui/utils';

function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

const rows = [
    createData('Fundacion1', 305, 3.7, 67, 4.3),
    createData('Fundacion2', 452, 25.0, 51, 4.9),
    createData('Fundacion3', 262, 16.0, 24, 6.0),
    createData('Fundacion4', 159, 6.0, 24, 4.0),
    createData('Fundacion5', 356, 16.0, 49, 3.9),
    createData('Fundacion1', 408, 3.2, 87, 6.5),
    createData('Fundacion1', 237, 9.0, 37, 4.3),
    createData('parte de totora', 375, 0.0, 94, 0.0),
    createData('parte de totora', 518, 26.0, 65, 7.0),
    createData('parte de totora', 392, 0.2, 98, 0.0),
    createData('parte de totora', 318, 0, 81, 2.0),
    createData('parte de totora', 360, 19.0, 9, 37.0),
    createData('parte de totora', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'parte de totora',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'parte de totora',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'parte este de totora',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'parte de totora',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'parte de totora',
    },
];

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'calories';
const DEFAULT_ROWS_PER_PAGE = 5;

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (newOrderBy) => (event) => {
        onRequestSort(event, newOrderBy);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Nutrition
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function TableDocuments() {
    const [order, setOrder] = React.useState(DEFAULT_ORDER);
    const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [visibleRows, setVisibleRows] = React.useState(null);
    const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
    const [paddingHeight, setPaddingHeight] = React.useState(0);

    React.useEffect(() => {
        let rowsOnMount = stableSort(
            rows,
            getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY),
        );

        rowsOnMount = rowsOnMount.slice(
            0 * DEFAULT_ROWS_PER_PAGE,
            0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE,
        );

        setVisibleRows(rowsOnMount);
    }, []);

    const handleRequestSort = React.useCallback(
        (event, newOrderBy) => {
            const isAsc = orderBy === newOrderBy && order === 'asc';
            const toggledOrder = isAsc ? 'desc' : 'asc';
            setOrder(toggledOrder);
            setOrderBy(newOrderBy);

            const sortedRows = stableSort(rows, getComparator(toggledOrder, newOrderBy));
            const updatedRows = sortedRows.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            );

            setVisibleRows(updatedRows);
        },
        [order, orderBy, page, rowsPerPage],
    );

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = React.useCallback(
        (event, newPage) => {
            setPage(newPage);

            const sortedRows = stableSort(rows, getComparator(order, orderBy));
            const updatedRows = sortedRows.slice(
                newPage * rowsPerPage,
                newPage * rowsPerPage + rowsPerPage,
            );

            setVisibleRows(updatedRows);

            // Avoid a layout jump when reaching the last page with empty rows.
            const numEmptyRows =
                newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;

            const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
            setPaddingHeight(newPaddingHeight);
        },
        [order, orderBy, dense, rowsPerPage],
    );

    const handleChangeRowsPerPage = React.useCallback(
        (event) => {
            const updatedRowsPerPage = parseInt(event.target.value, 10);
            setRowsPerPage(updatedRowsPerPage);

            setPage(0);

            const sortedRows = stableSort(rows, getComparator(order, orderBy));
            const updatedRows = sortedRows.slice(
                0 * updatedRowsPerPage,
                0 * updatedRowsPerPage + updatedRowsPerPage,
            );

            setVisibleRows(updatedRows);

            // There is no layout jump to handle on the first page.
            setPaddingHeight(0);
        },
        [order, orderBy],
    );



    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>

                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>Documento</TableCell>
                                <TableCell align='right'>Descripción</TableCell>
                                <TableCell align='center'>Descargar</TableCell>
                                <TableCell align='right'>Fecha</TableCell>


                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {visibleRows
                                ? visibleRows.map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer' }}
                                        >

                                            <TableCell
                                                component="th"

                                                scope="row"
                                                padding="none"
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="center"> <Image
                                                alt="recruitment"
                                                style={{width: "10%", borderRadius: "5px"}}
                                                src="data:image/png;base64,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"
                                            /></TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>

                                        </TableRow>
                                    );
                                })
                                : null}

                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
           
        </Box>
    );
}