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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import {transactions} from "../services/deletes/index"
import {newTrans} from "../services/puts/index"

type Tdata = {setData:any, data: any};
type table = { columns: any, data: any, setData:any,diaOpen:any };
type js = {js: any}

function CellDelete(data: any, rowIndex: any, setData: any) {
  transactions(rowIndex).then()
}

function pdf() {
  const doc = new jsPDF() as any
  doc.autoTable({ html: '#TransactionTable' })
  doc.save('output.pdf')
}

async function newTransaction() {
  let transData =
        {
          "FoodWaste": (document.getElementById("FoodWaste") as HTMLInputElement).value,
          "Pickup": (document.getElementById("Pickup") as HTMLInputElement).value,
          "Amountlbs": (document.getElementById("Amountlbs") as HTMLInputElement).value,
          "Status": (document.getElementById("Status") as HTMLInputElement).value,
          "Flag": (document.getElementById("Flag") as HTMLInputElement).value,
          "userID": (document.getElementById("userID") as HTMLInputElement).value,
        }
  console.log(transData)
  let id = (document.getElementById("ID") as HTMLInputElement).value
  await newTrans(transData, id).then(res => {
    console.log(res)
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
    <MaUTable id="TransactionTable" {...getTableProps()}>
      <TableHead>    
        <div className="column is-italic is-family-monospace	has-text-weight-semibold is-size-2	">Transaction</div>
        <div className="column">
          <button className="button is-primary" onClick={diaOpen}>New Transaction</button>
          <button className="button is-info" onClick={pdf}>Download PDF</button>
        </div>              
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
  )
}

export default function Transaction({ setData, data }: Tdata) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Table columns={TransColumn} data={data} setData={setData} diaOpen={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Transaction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new transaction, please fill each field correctly.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="ID"
            label="ID"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="FoodWaste"
            label="Food Waste"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="Pickup"
            label="Pick Up"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="Amountlbs"
            label="Amount(lbs)"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="Status"
            label="Status"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="Flag"
            label="Flag"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="userID"
            label="userID"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={newTransaction} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};