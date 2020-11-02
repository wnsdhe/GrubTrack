import React from "react";
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { useTable, useSortBy, usePagination } from 'react-table'
import { TransColumn } from '../models/States'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {transactions} from "../services/gets/index"
import { DeleteTrans } from "../services/deletes/index"
import { newTrans } from "../services/posts/index"

type Tdata = { setData: any, data: any, userInfo: any };
type table = { columns: any, data: any, setData: any, diaOpen: any };
type js = { js: any }

function CellDelete(data: any, rowIndex: any, setData: any) {
  DeleteTrans(rowIndex).then()
}

function CellEdit(data: any, rowIndex: any, setData: any) {

}

function pdf() {
  const doc = new jsPDF() as any
  doc.autoTable({ html: '#TransactionTable' })
  doc.save('output.pdf')
}

async function newTransaction(setData: any, userInfo:any) {
  let transData =
  {
    "userid": (document.getElementById("ID") as HTMLInputElement).value,
    "foodWaste": (document.getElementById("FoodWaste") as HTMLInputElement).checked,
    "pickup": (document.getElementById("Pickup") as HTMLInputElement).checked,
    "amountlbs": Number((document.getElementById("Amountlbs") as HTMLInputElement).value),
    "status": (document.getElementById("Status") as HTMLInputElement).value,
    "flag": (document.getElementById("Flag") as HTMLInputElement).checked,
  }
  console.log(transData)
  await newTrans(transData).then(res => {
  })
  transactions(userInfo['id']).then(rest => {
    setData(rest)
  })
}

function Table({ columns, data, setData, diaOpen }: table) {
  console.log(data)
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  )
  console.log(page)
  // Render the UI for your table
  return (
    <div>
      <div className="column is-italic is-family-monospace	has-text-weight-semibold is-size-2	">Transaction</div>
      <div className="columns ml-3">
        <div className=""><button className="button is-primary" onClick={diaOpen}>New Transaction</button></div>
        <div className=""><button className="button is-info ml-5" onClick={pdf}>Download PDF</button></div>
      </div>
      <MaUTable id="TransactionTable" {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </TableCell>
              ))}
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            let id = 0
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  console.log(cell.value)
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  )
                })}
                <TableCell>
                  <button className="button is-info" onClick={() => CellEdit(data, row.index, setData)}>
                    <span className="icon is-large is-outlined">
                      <i className="far fa-lg fa-edit"></i>
                    </span>
                  </button>
                </TableCell>
                <TableCell>
                  <button className="button is-danger" onClick={() => CellDelete(data, row.index, setData)}>
                    <span className="icon is-large is-outlined">
                      <i className="far fa-lg fa-trash-alt"></i>
                    </span>
                  </button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </MaUTable>
    </div>
  )
}

export default function Transaction({ setData, data, userInfo }: Tdata) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Table columns={TransColumn} data={data} setData={setData} diaOpen={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Transaction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new transaction, please fill each field correctly.
          </DialogContentText>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                id="FoodWaste"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
            }
            label="FoodWaste"
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                id="Pickup"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
            }
            label="Pick Up"
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                id="Flag"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
            }
            label="Flag"
          />
          <TextField
            margin="dense"
            id="ID"
            label="ID"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="Amountlbs"
            label="Amount(lbs)"
            type="number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="Status"
            label="Status"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => newTransaction(setData, userInfo)} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};