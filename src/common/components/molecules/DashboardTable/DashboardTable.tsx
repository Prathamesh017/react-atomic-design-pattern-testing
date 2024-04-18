import React from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import Table from 'common/components/atoms/Table'


interface DashBoardProps{
  data:Person[] 
}


const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('passengerName', {
    header: () => 'Name',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('airlineName', {
    header: () => 'Airline',
    cell: (info) => info.renderValue(),
  }),

  columnHelper.accessor('trips', {
    header: () => 'Trips',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('airlineHeadQuaters', {
    header: () => <span>Head Quaters</span>,
    cell: (info) => info.renderValue(),
  }),

]
const DashboardTable = (props:DashBoardProps) => {
  const personData=props.data
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return <>{personData && <Table data={personData} columns={columns} />}</>
}

export default DashboardTable
