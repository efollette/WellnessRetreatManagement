/**
 * Filename: table.js
 * Author: Erik Follette
 * Description: Modular Table Component for management
 * Date: May 14th, 2020
 */
import { Component } from 'react'
import { ReactTabulator } from "react-tabulator";
import styles from './table.module.css'

class Table extends Component {
    constructor(props) {
        // Mandatory super() call
        super(props);
        // Json string of column descriptors specified by Tabulator.js
        this.columns = props.columns;
        // Reference to access this specific instance of the object
        this.tableRef = React.createRef();
        // Function to addRow
        this.addRow = this.addRow.bind(this);
        // Function to select all entries
        this.selectAll = this.selectAll.bind(this);
        // Function to deselect all selections
        this.deselectAll = this.deselectAll.bind(this);
        // Function to delete all entries
        this.deleteAll = this.deleteAll.bind(this);
        // Function to delete a selection
        this.deleteSelection = this.deleteSelection.bind(this);
        // Function to push edits to database
        this.confirmEdits = this.confirmEdits.bind(this);
        // Function to push edits to database
        this.onEdit = this.onEdit.bind(this);
        

        // Internal state of table
        this.state = {
            data: props.data,
            errorMsg: "",
            editedRows: new Set()
        };
    }

    addRow() {
        this.tableRef.current.table.addRow({}, true); // True adds to top
    }   

    deleteAll() {
        this.tableRef.current.table.clearData(); // Deletes all data from the table
    }  

    deleteSelection() {
        // Get array of currently selected row components.
        var selected = this.tableRef.current.table.getSelectedRows(); 
        // Delete all selected rows
        for ( var row in selected ) {
            selected[row].delete();
        }
    }  

    selectAll() {
        // Get array of all row components.
        var rows = this.tableRef.current.table.getRows(); 
        // Delete all selected rows
        for ( var row in rows ) {
            rows[row].select();
        }
    }

    deselectAll() {
        // Get array of currently selected row components.
        var selected = this.tableRef.current.table.getSelectedRows(); 
        // Delete all selected rows
        for ( var row in selected ) {
            selected[row].deselect();
        }
    }  

    onEdit(cell) {
        var editedRow = cell.getRow().getData()
        console.log(editedRow)
        this.setState(
            () => {
                this.state.editedRows.add(editedRow)
                console.log(this.state.editedRows)
            }
        )
        console.log(this.state)
    }

    confirmEdits() {
        // Take the contents of our edited rows set and push them to the database
    }
     
    render() {
        const { data, errorMsg, editedRows } = this.state;
     
        const options = {

            persistence: true,
            cellEdited: this.onEdit,
            layoutColumnsOnNewData: true,
            layout: "fitDataFill", //fit columns to width of table (optional)
            responsiveLayout: "", //hide columns that dont fit on the table
            tooltips: true, //show tool tips on cells
            addRowPos: "top", //when adding a new row, add it to the top of the table
            history: true, //allow undo and redo actions on the table
            pagination: "local", //paginate the data
            paginationSize: 20, //allow 20 rows per page of data
            paginationSizeSelector: [20, 50, 100, 200],
            movableColumns: true, //allow column order to be changed
            movableRows: true, //allow row order to be changed
            resizableRows: true, 
            height: '80vh',
            rowContextMenu: [
                {
                    label:"Delete Row",
                    action: function(e, row) {
                        row.delete();
                    }
                },
                {
                    label:"Email",
                    action: function(e, row) {
                        row.delete();
                    }
                },
            ]
        };
     
        return (
          <div className={styles.constrain}>
            <div className={styles.bar}> 
              <button id="add-row-top" className={styles.button} onClick={this.addRow}>Add Row</button>
              <button id="select-all" className={styles.button} onClick={this.selectAll}>Select All</button>
              <button id="deselect-all" className={styles.button} onClick={this.deselectAll}>Cancel Selection</button>
              <button id="delete-selection" className={styles.button} onClick={this.deleteSelection}>Delete Selection</button>
              <button id="delete-all" className={styles.button} onClick={this.deleteAll}>Delete All</button>
              <button id="confirm-edits" className={styles.button} onClick={this.confirmEdits}>Confirm Edits</button>
            </div>
            <ReactTabulator
                id={styles.table}
                ref={this.tableRef}
                data={data}
                columns={this.columns}
                options={options}
            >
            </ReactTabulator>
            {errorMsg ? <div>{errorMsg}</div> : null}
          </div>
        );
    }
}

export default Table;