/**
 * Filename: nav.js
 * Author: Erik Follette
 * Description: Side navigation bar component
 * Date: May 3rd, 2020
 */
import { Component } from 'react'
import { ReactTabulator } from "react-tabulator";
import styles from './table.module.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
        this.addRowTop = this.addRowTop.bind(this);
        this.addRowBot = this.addRowBot.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            data: [

            ],
            errorMsg: "",
        };
    }

    addRowTop() {
        this.tableRef.current.table.addRow({}, true); //true adds to top
    }   

    addRowBot() {
        this.tableRef.current.table.addRow({}, false); //true adds to top
    }  

    delete() {
        this.tableRef.current.table.clearData(); //true adds to top
    }  
     
    render() {
        const { data, errorMsg } = this.state;

        const colorOptions = {
            red: "red",
            green: "green",
            yellow: "yellow"
        };
        const columns = [
            { // Hidden Collapse
                formatter:"responsiveCollapse", 
                width:30, 
                minWidth:30, 
                hozAlign:"center", 
                resizable:false, 
                headerSort:false
            },
            { // Name
                title: "Name",
                field: "name",
                width: 150,
                editor: "input",
                headerFilter: "input"
            },
            { // Age
                title: "Age",
                field: "age",
                hozAlign: "left",
                editor: "input"
            },
            { // Favorite Color
                title: "Favourite Color",
                field: "col",
                editor: "autocomplete",
                editorParams: {
                    allowEmpty: true,
                    showListOnEmpty: true,
                    values: colorOptions
                },
                headerFilter: "select",
                headerFilterParams: { values: colorOptions }
            },
            { // DOB
                title: "Date Of Birth", 
                field: "dob", 
                hozAlign: "center", 
                editor: "input" 
            },
            { // Delete Row
                title: 'Delete',
                formatter: 'buttonCross',
                hozAlign: 'center',
                cellClick: function(e, cell) {
                    cell.getRow().delete();
                }
            },
        ];
     
        const options = {
            persistentLayout: true,
            layoutColumnsOnNewData: true,
            layout: "fitData", //fit columns to width of table (optional)
            responsiveLayout: "collapse", //hide columns that dont fit on the table
            tooltips: true, //show tool tips on cells
            addRowPos: "top", //when adding a new row, add it to the top of the table
            history: true, //allow undo and redo actions on the table
            pagination: "local", //paginate the data
            paginationSize: 20, //allow 20 rows per page of data
            paginationSizeSelector: [20, 50, 100, 200],
            movableColumns: true, //allow column order to be changed
            resizableRows: true, //allow row order to be changed
            height: '80vh',
            rowContextMenu: [
                {
                    label:"Delete Row",
                    action: function(e, row) {
                        row.delete();
                    }
                }
            ]
        };
     
        return (
          <div>
            <div className={styles.bar}> 
              <button id="add-row-top" className={styles.button} onClick={this.addRowTop}>Add Row Top</button>
              <button id="add-row-bot" className={styles.button} onClick={this.addRowBot}>Add Row Bottom</button>
              <button id="delete" className={styles.button} onClick={this.delete}>Delete All Records</button>
            </div>
            <ReactTabulator
                id={styles.table}
                ref={this.tableRef}
                data={data}
                columns={columns}
                options={options}
            >
            </ReactTabulator>
            {errorMsg ? <div>{errorMsg}</div> : null}
          </div>
        );
    }
}

export default Table;