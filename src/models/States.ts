

export interface LoginState {
    email: string;
    password: string
}

export const TransColumn = [
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'userID',
        accessor: 'userID'
    },
    {
        Header: 'Date',
        accessor: 'date'
    },
    {
        id: 'foodwaste',
        Header: 'FoodWaste',
        accessor: (d:any) => d.foodWaste.toString()
    },
    {
        id: 'pickup',
        Header: 'Pickup',
        accessor: (d:any) => d.pickup.toString()
    },
    {
        Header: 'Amount(lbs)',
        accessor: 'amountlbs'
    },
    {
        Header: 'status',
        accessor: 'status'
    },
    {
        id: 'flag',
        Header: 'flag',
        accessor: (d:any) => d.flag.toString()
    }
]