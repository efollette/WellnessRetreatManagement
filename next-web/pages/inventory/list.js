/**
 * Filename: list.js
 * Author: Erik Follette
 * Description: Inventory list page
 * Date: May 14th, 2020
 */
import Layout from '../../components/layout'
import Table from '../../components/table'

export default function List() {

    // Active or Inactive Booking
    const statusOptions = {
        active: "Active",
        inactive: "Inactive",
    };
    const columns = [
        { // Selector
            width:30, 
            minWidth:30, 
            hozAlign:"center", 
            resizable:false, 
            headerSort:false
        },
        { // Item ID
            title: "ID",
            minWidth: 150,
            field: "id",
            editor: "input",
            headerFilter: "input"
        },
        { // Name
            title: "Item Name",
            minWidth: 250,
            field: "name",
            editor: "input",
            headerFilter: "input"
        },
        { // Qty
            title: "Quantity",
            field: "qty",
            editor: "input",
            headerFilter: "input",
        },
        { // Delete Row 
            minWidth:30, 
            formatter: 'buttonCross',
            hozAlign: 'center', 
            headerSort:false,
            cellClick: function(e, cell) {
                cell.getRow().delete();
            },
        },
    ];

    return <Layout open={"Inventory"}>
        <h1>Inventory List</h1>
        <Table columns={columns} data={[]}></Table>
    </Layout>
}