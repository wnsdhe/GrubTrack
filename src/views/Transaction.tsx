import React from "react";
import { useTable, usePagination } from 'react-table'
import { TransColumn } from '../models/States'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

type data = { data: any };
type table = { columns: any, data: any };

function Table({ columns, data }: table) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
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
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0 },
  }, usePagination)

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        <TableRow>Transaction</TableRow>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
            <TableCell>Delete</TableCell>
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {page.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
              <TableCell>
              <button className="button is-danger">
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

export default function Transaction({ data }: data) {

  return (
    <div>
      <Table columns={TransColumn} data={data} />
    </div>
  );
};