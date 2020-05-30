/**
 * Filename: rooms list.js
 * Author: Erik Follette
 * Description: Room management page
 * Date: May 14th, 2020
 */
import Layout from '../../components/layout'
import Table from '../../components/table'

export default function RoomsList() {

    // Sample Data
    const sampleData = [
        {
          "booking_id": 661,
          "id": 12,
          "occupancy": 2,
          "capacity": 1,
          "number": 463,
          "status": "Unavailable",
          "price": "$254.74",
          "type": "Regular"
        },
        {
          "booking_id": 5331,
          "id": 30,
          "occupancy": 2,
          "capacity": 3,
          "number": 304,
          "status": "Available",
          "price": "$371.01",
          "type": "Emperor"
        },
        {
          "booking_id": 4268,
          "id": 14,
          "occupancy": 1,
          "capacity": 1,
          "number": 287,
          "status": "Available",
          "price": "$347.38",
          "type": "Emperor"
        },
        {
          "booking_id": 1788,
          "id": 6,
          "occupancy": 2,
          "capacity": 3,
          "number": 389,
          "status": "Unavailable",
          "price": "$445.73",
          "type": "Regular"
        },
        {
          "booking_id": 2797,
          "id": 27,
          "occupancy": 3,
          "capacity": 2,
          "number": 356,
          "status": "Unavailable",
          "price": "$436.10",
          "type": "Deluxe"
        },
        {
          "booking_id": 8149,
          "id": 2,
          "occupancy": "4+",
          "capacity": 3,
          "number": 52,
          "status": "Unavailable",
          "price": "$478.00",
          "type": "Deluxe"
        },
        {
          "booking_id": 1582,
          "id": 14,
          "occupancy": 2,
          "capacity": "4+",
          "number": 466,
          "status": "Available",
          "price": "$446.36",
          "type": "Deluxe"
        },
        {
          "booking_id": 92,
          "id": 12,
          "occupancy": "4+",
          "capacity": 2,
          "number": 25,
          "status": "Unavailable",
          "price": "$338.16",
          "type": "Emperor"
        },
        {
          "booking_id": 847,
          "id": 29,
          "occupancy": 3,
          "capacity": 3,
          "number": 294,
          "status": "Unavailable",
          "price": "$385.22",
          "type": "Emperor"
        },
        {
          "booking_id": 6334,
          "id": 4,
          "occupancy": 1,
          "capacity": 2,
          "number": 469,
          "status": "Unavailable",
          "price": "$282.34",
          "type": "Deluxe"
        },
        {
          "booking_id": 7731,
          "id": 4,
          "occupancy": 1,
          "capacity": 3,
          "number": 63,
          "status": "Available",
          "price": "$301.47",
          "type": "Emperor"
        },
        {
          "booking_id": 3645,
          "id": 13,
          "occupancy": 2,
          "capacity": 2,
          "number": 373,
          "status": "Unavailable",
          "price": "$424.69",
          "type": "Emperor"
        },
        {
          "booking_id": 7931,
          "id": 13,
          "occupancy": 1,
          "capacity": 2,
          "number": 402,
          "status": "Unavailable",
          "price": "$292.47",
          "type": "Regular"
        },
        {
          "booking_id": 5772,
          "id": 16,
          "occupancy": 2,
          "capacity": 2,
          "number": 439,
          "status": "Available",
          "price": "$342.08",
          "type": "Deluxe"
        },
        {
          "booking_id": 5578,
          "id": 7,
          "occupancy": 2,
          "capacity": "4+",
          "number": 359,
          "status": "Available",
          "price": "$430.48",
          "type": "Regular"
        },
        {
          "booking_id": 1734,
          "id": 18,
          "occupancy": 2,
          "capacity": 3,
          "number": 174,
          "status": "Available",
          "price": "$298.53",
          "type": "Regular"
        },
        {
          "booking_id": 9313,
          "id": 21,
          "occupancy": 1,
          "capacity": 1,
          "number": 483,
          "status": "Unavailable",
          "price": "$469.11",
          "type": "Deluxe"
        },
        {
          "booking_id": 5143,
          "id": 25,
          "occupancy": "4+",
          "capacity": 1,
          "number": 144,
          "status": "Unavailable",
          "price": "$200.52",
          "type": "Deluxe"
        },
        {
          "booking_id": 4867,
          "id": 5,
          "occupancy": "4+",
          "capacity": 2,
          "number": 419,
          "status": "Unavailable",
          "price": "$311.20",
          "type": "Deluxe"
        },
        {
          "booking_id": 5051,
          "id": 10,
          "occupancy": 2,
          "capacity": "4+",
          "number": 215,
          "status": "Available",
          "price": "$200.43",
          "type": "Regular"
        },
        {
          "booking_id": 7536,
          "id": 3,
          "occupancy": 2,
          "capacity": 3,
          "number": 190,
          "status": "Available",
          "price": "$401.22",
          "type": "Regular"
        },
        {
          "booking_id": 6620,
          "id": 7,
          "occupancy": 2,
          "capacity": 1,
          "number": 317,
          "status": "Available",
          "price": "$496.10",
          "type": "Emperor"
        },
        {
          "booking_id": 9899,
          "id": 4,
          "occupancy": 2,
          "capacity": 2,
          "number": 331,
          "status": "Unavailable",
          "price": "$362.79",
          "type": "Regular"
        },
        {
          "booking_id": 3944,
          "id": 3,
          "occupancy": "4+",
          "capacity": 1,
          "number": 85,
          "status": "Available",
          "price": "$421.42",
          "type": "Emperor"
        },
        {
          "booking_id": 2538,
          "id": 9,
          "occupancy": 2,
          "capacity": "4+",
          "number": 104,
          "status": "Unavailable",
          "price": "$451.63",
          "type": "Deluxe"
        },
        {
          "booking_id": 8338,
          "id": 4,
          "occupancy": 3,
          "capacity": "4+",
          "number": 128,
          "status": "Available",
          "price": "$423.74",
          "type": "Emperor"
        },
        {
          "booking_id": 5215,
          "id": 30,
          "occupancy": 2,
          "capacity": 2,
          "number": 401,
          "status": "Available",
          "price": "$360.30",
          "type": "Regular"
        },
        {
          "booking_id": 8531,
          "id": 29,
          "occupancy": 2,
          "capacity": 3,
          "number": 349,
          "status": "Available",
          "price": "$213.50",
          "type": "Emperor"
        },
        {
          "booking_id": 8730,
          "id": 21,
          "occupancy": 2,
          "capacity": "4+",
          "number": 83,
          "status": "Available",
          "price": "$308.74",
          "type": "Emperor"
        },
        {
          "booking_id": 1914,
          "id": 29,
          "occupancy": 1,
          "capacity": 3,
          "number": 113,
          "status": "Available",
          "price": "$486.15",
          "type": "Deluxe"
        },
        {
          "booking_id": 6003,
          "id": 6,
          "occupancy": 2,
          "capacity": 2,
          "number": 90,
          "status": "Available",
          "price": "$323.05",
          "type": "Deluxe"
        },
        {
          "booking_id": 8339,
          "id": 29,
          "occupancy": 1,
          "capacity": 2,
          "number": 452,
          "status": "Unavailable",
          "price": "$238.82",
          "type": "Emperor"
        },
        {
          "booking_id": 5574,
          "id": 13,
          "occupancy": "4+",
          "capacity": 3,
          "number": 94,
          "status": "Unavailable",
          "price": "$248.49",
          "type": "Deluxe"
        },
        {
          "booking_id": 6848,
          "id": 15,
          "occupancy": 1,
          "capacity": "4+",
          "number": 58,
          "status": "Unavailable",
          "price": "$428.12",
          "type": "Emperor"
        },
        {
          "booking_id": 1247,
          "id": 27,
          "occupancy": 2,
          "capacity": 3,
          "number": 492,
          "status": "Unavailable",
          "price": "$377.65",
          "type": "Emperor"
        },
        {
          "booking_id": 3970,
          "id": 21,
          "occupancy": 3,
          "capacity": 1,
          "number": 72,
          "status": "Available",
          "price": "$485.43",
          "type": "Emperor"
        },
        {
          "booking_id": 689,
          "id": 19,
          "occupancy": 1,
          "capacity": 3,
          "number": 159,
          "status": "Unavailable",
          "price": "$380.62",
          "type": "Emperor"
        },
        {
          "booking_id": 4003,
          "id": 27,
          "occupancy": "4+",
          "capacity": 2,
          "number": 51,
          "status": "Available",
          "price": "$233.85",
          "type": "Emperor"
        },
        {
          "booking_id": 3530,
          "id": 25,
          "occupancy": 3,
          "capacity": 3,
          "number": 288,
          "status": "Unavailable",
          "price": "$273.46",
          "type": "Emperor"
        },
        {
          "booking_id": 4272,
          "id": 15,
          "occupancy": "4+",
          "capacity": 3,
          "number": 282,
          "status": "Unavailable",
          "price": "$411.61",
          "type": "Regular"
        },
        {
          "booking_id": 7855,
          "id": 25,
          "occupancy": 1,
          "capacity": 2,
          "number": 263,
          "status": "Available",
          "price": "$364.24",
          "type": "Deluxe"
        },
        {
          "booking_id": 9255,
          "id": 17,
          "occupancy": 1,
          "capacity": 2,
          "number": 494,
          "status": "Unavailable",
          "price": "$297.05",
          "type": "Emperor"
        },
        {
          "booking_id": 7324,
          "id": 9,
          "occupancy": 2,
          "capacity": 3,
          "number": 266,
          "status": "Unavailable",
          "price": "$281.99",
          "type": "Deluxe"
        },
        {
          "booking_id": 6478,
          "id": 19,
          "occupancy": 2,
          "capacity": 2,
          "number": 209,
          "status": "Unavailable",
          "price": "$267.70",
          "type": "Deluxe"
        },
        {
          "booking_id": 5439,
          "id": 3,
          "occupancy": "4+",
          "capacity": 1,
          "number": 69,
          "status": "Available",
          "price": "$392.01",
          "type": "Emperor"
        },
        {
          "booking_id": 145,
          "id": 26,
          "occupancy": 2,
          "capacity": 2,
          "number": 101,
          "status": "Unavailable",
          "price": "$305.29",
          "type": "Deluxe"
        },
        {
          "booking_id": 4909,
          "id": 8,
          "occupancy": 3,
          "capacity": "4+",
          "number": 213,
          "status": "Available",
          "price": "$219.85",
          "type": "Emperor"
        },
        {
          "booking_id": 6801,
          "id": 5,
          "occupancy": 1,
          "capacity": 2,
          "number": 161,
          "status": "Unavailable",
          "price": "$364.17",
          "type": "Emperor"
        },
        {
          "booking_id": 2566,
          "id": 5,
          "occupancy": "4+",
          "capacity": "4+",
          "number": 389,
          "status": "Available",
          "price": "$356.96",
          "type": "Regular"
        },
        {
          "booking_id": 2509,
          "id": 13,
          "occupancy": 2,
          "capacity": 3,
          "number": 120,
          "status": "Available",
          "price": "$421.33",
          "type": "Deluxe"
        }
    ];

    // Active or Inactive Booking
    const statusOptions = {
        Available: "Available",
        Unavailable: "Unavailable",
    };

    const columns = [
        { // Selector
            width:30, 
            minWidth:30, 
            hozAlign:"center", 
            resizable:false, 
            headerSort:false,
            cellClick: function(e, cell) {
              cell.getRow().toggleSelect();
            },
        },
        { // Room ID
            title: "ID",
            field: "id",
            editor: "input",
            headerFilter: "input"
        },
        { // Room Occupancy
            title: "Occupancy",
            field: "occupancy",
            editor: "input",
            headerFilter: "input"
        },
        { // Room Capacity
            title: "Capacity",
            field: "capacity",
            editor: "input",
            headerFilter: "input"
        },
        { // Room Number
            title: "Number",
            field: "number",
            editor: "input",
            headerFilter: "input",
        },
        { // Price
            title: "Price",
            field: "price",
            editor: "input",
            headerFilter: "input",
        },
        { // Room Status
            title: "Status",
            field: "status",
            editor: "autocomplete",
            editorParams: {
                allowEmpty: true,
                showListOnEmpty: true,
                values: true
            },
            headerFilter: "select",
            headerFilterParams: { values: true },
        },
        { // Room Type
            title: "Type",
            field: "type",
            editor: "input",
            headerFilter: "select",
            headerFilterParams: { values: true },
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

    return <Layout open={"Lodging"}>
        <h1>Rooms List</h1>
        <Table columns={columns} data={sampleData}></Table>
    </Layout>
}