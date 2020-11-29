import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';

export interface User {
    Id: number,
    FirstName: number,
    LastName: number,
    Age: number,
    Avatar: string,
    Gender: string,
    DOB: Date
}

export const GenderOptions = {
    'M': 'Male',
    'F': 'Female',
};

export const Usercolumns = [
    {
        dataField: 'FirstName',
        text: 'First Name',
        headerAlign: 'left',
        headerTitle: true,
        headerClasses: 'bootstrap-table-header',
        filter: textFilter(),
    },
    {
        dataField: 'LastName',
        text: 'Last Name',
        headerAlign: 'left',
        headerTitle: true,
        headerClasses: 'bootstrap-table-header',
        filter: textFilter(),
    },
    {
        dataField: 'Age',
        text: 'Age',
        headerAlign: 'left',
        headerTitle: true,
        headerClasses: 'bootstrap-table-header',
        filter: textFilter(),
    },
    {
        dataField: 'Gender',
        text: 'Gender',
        headerAlign: 'left',
        headerTitle: true,
        headerClasses: 'bootstrap-table-header',
        formatter: cell => GenderOptions[cell],
        filter: selectFilter({
            options: GenderOptions
        }),
        editor: {
            type: Type.SELECT,
            options: [{
                value: 'M',
                label: 'Male'
            }, {
                value: 'F',
                label: 'Female'
            }]
        }
    },
    {
        dataField: 'DOB',
        text: 'Date of Birth',
        headerClasses: 'bootstrap-table-header',
        formatter: (cell) => {
            let dateObj = cell;
            if (typeof cell !== 'object') {
                dateObj = new Date(cell);
            }
            return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
        },
        editor: {
            type: Type.DATE
        },
    }
];