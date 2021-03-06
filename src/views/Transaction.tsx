import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import { TransColumn } from "../models/States";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import MuiTableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { transactions } from "../services/gets/index";
import { DeleteTrans } from "../services/deletes/index";
import { newTrans } from "../services/posts/index";
import EditForm from "../components/EditForm";
import { matchSorter } from "match-sorter";

type Tdata = { setData: any; data: any; userInfo: any };
type table = {
  columns: any;
  data: any;
  setData: any;
  diaOpen: any;
  userInfo: any;
  setEdit: any;
  editOpen: any;
};

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="ml-5">
      Search:{" "}
      <input
        className="input is-primary is-rounded is-medium"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

async function CellDelete(data: any, row: any, setData: any, userInfo: any) {
  /*DeleteTrans(rowIndex).then()*/
  let selected = row.cells[0].value;
  await DeleteTrans(userInfo["id"], selected);
  transactions(userInfo["id"]).then((rest) => {
    setData(rest);
  });
}

function CellEdit(
  data: any,
  row: any,
  setData: any,
  userInfo: any,
  setEdit: any,
  editOpen: any
) {
  setEdit({
    id: row.cells[0].value,
    userid: row.cells[1].value,
    foodWaste: row.cells[3].checked,
    pickup: row.cells[4].checked,
    amountlbs: row.cells[5].value,
    status: row.cells[6].value,
    flag: row.cells[7].checked,
  });
  editOpen();
}

function pdf() {
  const doc = new jsPDF() as any;
  doc.autoTable({
    html: "#TransactionTable",
    theme: "grid",
    tableWidth: "auto",
    columnWidth: "wrap",
    showHeader: "everyPage",
    tableLineColor: 200,
    tableLineWidth: 0,
    columns: [
      { header: "flag", dataKey: "flag" },
      { header: "flag", dataKey: "flag" },
      { header: "flag", dataKey: "flag" },
      { header: "userid", dataKey: "userid" },
      { header: "FoodWaste", dataKey: "foodwaste" },
      { header: "Pickup", dataKey: "pickup" },
      { header: "Amount(lbs)", dataKey: "amountlbs" },
      { header: "Status", dataKey: "status" },    
    ],
    columnStyles: {
      0: { columnWidth: "auto" },
      1: { columnWidth: "auto" },
      2: { columnWidth: "auto" },
      3: { columnWidth: "auto" },
      4: { columnWidth: "auto" },
      5: { columnWidth: "auto" },
      6: { columnWidth: "auto" },
      7: { columnWidth: "auto" },
    },
    styles: {
      overflow: "linebreak",
      columnWidth: "wrap",
      font: "arial",
      fontSize: 10,
      overflowColumns: "linebreak",
    },
  });
  doc.save("output.pdf");
}

function convertToCSV(columns, objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";
  var line = "";
  for (var x = 0; x < columns.length; x++) {
    if (line != "") line += ",";
    line += columns[x];
  }
  str += line + "\r\n";
  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line != "") line += ",";

      line += array[i][index];
    }

    str += line + "\r\n";
  }

  return str;
}

async function newTransaction(setData: any, userInfo: any, close: any) {
  let transData = {
    userid: (document.getElementById("ID") as HTMLInputElement).value,
    foodWaste: (document.getElementById("FoodWaste") as HTMLInputElement)
      .checked,
    pickup: (document.getElementById("Pickup") as HTMLInputElement).checked,
    amountlbs: Number(
      (document.getElementById("Amountlbs") as HTMLInputElement).value
    ),
    status: (document.getElementById("Status") as HTMLInputElement).value,
    flag: (document.getElementById("Flag") as HTMLInputElement).checked,
  };
  console.log(transData);
  await newTrans(transData).then((res) => {});
  transactions(userInfo["id"]).then((rest) => {
    setData(rest);
  });
  close();
}

function fuzzyTextFilterFn(rows: any, id: any, filterValue: any) {
  return matchSorter(rows, filterValue, {
    keys: [(row: any) => row.values[id]],
  });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

function Table({
  columns,
  data,
  setData,
  diaOpen,
  userInfo,
  setEdit,
  editOpen,
}: table) {
  // Use the state and functions returned from useTable to build your UI
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

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
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    useSortBy,
    usePagination
  );
  // Render the UI for your table
  return (
    <div>
      <div className="column is-italic is-family-monospace	has-text-weight-semibold is-size-2	">
        Transaction
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <div className="columns ml-3">
        <div className="">
          <button className="button is-primary is-rounded" onClick={diaOpen}>
            New Transaction
          </button>
        </div>
        <div className="">
          <button className="button is-info ml-5 is-rounded" onClick={pdf}>
            Download PDF
          </button>
        </div>
        <div className="">
          <button
            className="button is-info ml-5 is-rounded"
            onClick={() => {
              let cs = [
                "ID",
                "userID",
                "Date",
                "FoodWaste",
                "Pickup",
                "Amount(lbs)",
                "status",
                "flag",
              ];
              let csvstr = convertToCSV(cs, data);
              var hiddenElement = document.createElement("a");
              hiddenElement.href =
                "data:text/csv;charset=utf-8," + encodeURI(csvstr);
              hiddenElement.target = "_blank";
              hiddenElement.download = "transaction.csv";
              hiddenElement.click();
            }}
          >
            Download CSV
          </button>
        </div>
      </div>
      <MaUTable id="TransactionTable" {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
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
            prepareRow(row);
            let id = 0;
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
                <TableCell>
                  <button
                    className="button is-info is-rounded"
                    onClick={() =>
                      CellEdit(data, row, setData, userInfo, setEdit, editOpen)
                    }
                  >
                    <span className="icon is-large is-outlined ">
                      <i className="far fa-lg fa-edit"></i>
                    </span>
                  </button>
                </TableCell>
                <TableCell>
                  <button
                    className="button is-danger is-rounded"
                    onClick={() => CellDelete(data, row, setData, userInfo)}
                  >
                    <span className="icon is-large is-outlined">
                      <i className="far fa-lg fa-trash-alt"></i>
                    </span>
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <button
          className="pagination-previous"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className="pagination-next"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next page
        </button>
        <ul className="pagination-list">
          <li>
            <button
              className="pagination-link"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <button
              className="pagination-link"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"<"}
            </button>
          </li>
          <li>
            <button
              className="pagination-link"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {">"}
            </button>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <button
              className="pagination-link"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default function Transaction({ setData, data, userInfo }: Tdata) {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  let [editData, setEditData] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleEditOpen = () => {
    setEdit(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClose = () => {
    setEdit(false);
  };

  return (
    <div>
      <Table
        columns={TransColumn}
        data={data}
        setData={setData}
        diaOpen={handleClickOpen}
        userInfo={userInfo}
        setEdit={setEditData}
        editOpen={handleEditOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
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
                inputProps={{ "aria-label": "checkbox with default color" }}
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
                inputProps={{ "aria-label": "checkbox with default color" }}
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
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
            }
            label="Flag"
          />
          <TextField
            margin="dense"
            id="ID"
            label="UserID"
            value={userInfo["id"]}
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
          <Button
            onClick={() => newTransaction(setData, userInfo, handleClose)}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <EditForm
        edit={edit}
        handleEditClose={handleEditClose}
        data={editData}
        userInfo={userInfo}
        setData={setData}
      ></EditForm>
    </div>
  );
}
