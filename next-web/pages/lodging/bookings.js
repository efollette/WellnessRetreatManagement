/**
 * Filename: bookings.js
 * Author: Erik Follette
 * Description: Lodging management page
 * Date: May 14th, 2020
 */
import Layout from '../../components/layout'
import Table from '../../components/table'

export default function Bookings() {

    // Sample Bookings Data
    const sampleData = [
        {
          "booking_id": 6065,
          "room_id": 0,
          "guest_id": 16,
          "last_name": "Murphy",
          "first_name": "Weber",
          "email": "murphyweber@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$446.22",
          "type": "Deluxe"
        },
        {
          "booking_id": 2912,
          "room_id": 8,
          "guest_id": 26,
          "last_name": "Mae",
          "first_name": "Miles",
          "email": "maemiles@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$469.35",
          "type": "Regular"
        },
        {
          "booking_id": 4970,
          "room_id": 7,
          "guest_id": 4,
          "last_name": "Lorraine",
          "first_name": "Keith",
          "email": "lorrainekeith@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$214.41",
          "type": "Emperor"
        },
        {
          "booking_id": 864,
          "room_id": 22,
          "guest_id": 23,
          "last_name": "Chrystal",
          "first_name": "Hurst",
          "email": "chrystalhurst@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$493.82",
          "type": "Deluxe"
        },
        {
          "booking_id": 6869,
          "room_id": 14,
          "guest_id": 36,
          "last_name": "Darlene",
          "first_name": "Riddle",
          "email": "darleneriddle@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$389.38",
          "type": "Emperor"
        },
        {
          "booking_id": 658,
          "room_id": 26,
          "guest_id": 47,
          "last_name": "Donna",
          "first_name": "Nolan",
          "email": "donnanolan@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$488.03",
          "type": "Deluxe"
        },
        {
          "booking_id": 5295,
          "room_id": 1,
          "guest_id": 17,
          "last_name": "Floyd",
          "first_name": "Obrien",
          "email": "floydobrien@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$275.19",
          "type": "Regular"
        },
        {
          "booking_id": 1609,
          "room_id": 20,
          "guest_id": 23,
          "last_name": "Petty",
          "first_name": "Ingram",
          "email": "pettyingram@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$294.36",
          "type": "Regular"
        },
        {
          "booking_id": 7783,
          "room_id": 13,
          "guest_id": 33,
          "last_name": "Maryann",
          "first_name": "Farrell",
          "email": "maryannfarrell@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$310.17",
          "type": "Regular"
        },
        {
          "booking_id": 7673,
          "room_id": 23,
          "guest_id": 3,
          "last_name": "Tammi",
          "first_name": "Hardin",
          "email": "tammihardin@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$375.94",
          "type": "Emperor"
        },
        {
          "booking_id": 204,
          "room_id": 23,
          "guest_id": 28,
          "last_name": "Esperanza",
          "first_name": "Burton",
          "email": "esperanzaburton@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$495.23",
          "type": "Deluxe"
        },
        {
          "booking_id": 6984,
          "room_id": 21,
          "guest_id": 50,
          "last_name": "Kathie",
          "first_name": "Hunter",
          "email": "kathiehunter@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$289.40",
          "type": "Emperor"
        },
        {
          "booking_id": 4090,
          "room_id": 14,
          "guest_id": 34,
          "last_name": "York",
          "first_name": "Chase",
          "email": "yorkchase@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$250.44",
          "type": "Emperor"
        },
        {
          "booking_id": 2433,
          "room_id": 12,
          "guest_id": 38,
          "last_name": "Angel",
          "first_name": "Durham",
          "email": "angeldurham@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$486.49",
          "type": "Regular"
        },
        {
          "booking_id": 8696,
          "room_id": 1,
          "guest_id": 4,
          "last_name": "Trevino",
          "first_name": "Reilly",
          "email": "trevinoreilly@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$490.65",
          "type": "Deluxe"
        },
        {
          "booking_id": 522,
          "room_id": 11,
          "guest_id": 5,
          "last_name": "Byrd",
          "first_name": "Pacheco",
          "email": "byrdpacheco@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$371.47",
          "type": "Regular"
        },
        {
          "booking_id": 7110,
          "room_id": 0,
          "guest_id": 47,
          "last_name": "Carpenter",
          "first_name": "Simon",
          "email": "carpentersimon@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$467.59",
          "type": "Regular"
        },
        {
          "booking_id": 1310,
          "room_id": 21,
          "guest_id": 48,
          "last_name": "Bailey",
          "first_name": "Dejesus",
          "email": "baileydejesus@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$409.81",
          "type": "Emperor"
        },
        {
          "booking_id": 3237,
          "room_id": 13,
          "guest_id": 28,
          "last_name": "Boyle",
          "first_name": "Branch",
          "email": "boylebranch@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$333.76",
          "type": "Deluxe"
        },
        {
          "booking_id": 3735,
          "room_id": 12,
          "guest_id": 35,
          "last_name": "Dodson",
          "first_name": "Schroeder",
          "email": "dodsonschroeder@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$327.52",
          "type": "Deluxe"
        },
        {
          "booking_id": 3421,
          "room_id": 17,
          "guest_id": 0,
          "last_name": "Sophie",
          "first_name": "Herring",
          "email": "sophieherring@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$376.87",
          "type": "Deluxe"
        },
        {
          "booking_id": 2624,
          "room_id": 7,
          "guest_id": 15,
          "last_name": "Gena",
          "first_name": "Daniels",
          "email": "genadaniels@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$369.33",
          "type": "Deluxe"
        },
        {
          "booking_id": 259,
          "room_id": 16,
          "guest_id": 14,
          "last_name": "Eugenia",
          "first_name": "Booth",
          "email": "eugeniabooth@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$452.02",
          "type": "Emperor"
        },
        {
          "booking_id": 4050,
          "room_id": 15,
          "guest_id": 38,
          "last_name": "Helena",
          "first_name": "Long",
          "email": "helenalong@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$317.70",
          "type": "Deluxe"
        },
        {
          "booking_id": 914,
          "room_id": 27,
          "guest_id": 48,
          "last_name": "Milagros",
          "first_name": "Shelton",
          "email": "milagrosshelton@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$288.02",
          "type": "Deluxe"
        },
        {
          "booking_id": 8402,
          "room_id": 24,
          "guest_id": 43,
          "last_name": "Luna",
          "first_name": "Mcdowell",
          "email": "lunamcdowell@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$408.95",
          "type": "Emperor"
        },
        {
          "booking_id": 8938,
          "room_id": 14,
          "guest_id": 37,
          "last_name": "Latisha",
          "first_name": "Strong",
          "email": "latishastrong@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$215.03",
          "type": "Deluxe"
        },
        {
          "booking_id": 775,
          "room_id": 9,
          "guest_id": 36,
          "last_name": "Paul",
          "first_name": "Hubbard",
          "email": "paulhubbard@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$277.03",
          "type": "Regular"
        },
        {
          "booking_id": 7163,
          "room_id": 16,
          "guest_id": 23,
          "last_name": "Hester",
          "first_name": "Patterson",
          "email": "hesterpatterson@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$291.84",
          "type": "Emperor"
        },
        {
          "booking_id": 662,
          "room_id": 28,
          "guest_id": 24,
          "last_name": "Juanita",
          "first_name": "Adams",
          "email": "juanitaadams@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$225.88",
          "type": "Regular"
        },
        {
          "booking_id": 7498,
          "room_id": 4,
          "guest_id": 31,
          "last_name": "Wiggins",
          "first_name": "Odom",
          "email": "wigginsodom@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$406.23",
          "type": "Deluxe"
        },
        {
          "booking_id": 7931,
          "room_id": 13,
          "guest_id": 4,
          "last_name": "Amparo",
          "first_name": "Hewitt",
          "email": "amparohewitt@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$385.37",
          "type": "Regular"
        },
        {
          "booking_id": 9875,
          "room_id": 3,
          "guest_id": 38,
          "last_name": "Zelma",
          "first_name": "Bowen",
          "email": "zelmabowen@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$252.03",
          "type": "Deluxe"
        },
        {
          "booking_id": 7130,
          "room_id": 5,
          "guest_id": 23,
          "last_name": "Sparks",
          "first_name": "Matthews",
          "email": "sparksmatthews@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$278.84",
          "type": "Deluxe"
        },
        {
          "booking_id": 7043,
          "room_id": 21,
          "guest_id": 37,
          "last_name": "Sheree",
          "first_name": "Leon",
          "email": "shereeleon@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$435.53",
          "type": "Emperor"
        },
        {
          "booking_id": 466,
          "room_id": 14,
          "guest_id": 38,
          "last_name": "Liza",
          "first_name": "Blake",
          "email": "lizablake@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$283.71",
          "type": "Regular"
        },
        {
          "booking_id": 462,
          "room_id": 3,
          "guest_id": 38,
          "last_name": "Kirsten",
          "first_name": "Henry",
          "email": "kirstenhenry@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$473.89",
          "type": "Deluxe"
        },
        {
          "booking_id": 2702,
          "room_id": 10,
          "guest_id": 25,
          "last_name": "Olive",
          "first_name": "Abbott",
          "email": "oliveabbott@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$401.66",
          "type": "Regular"
        },
        {
          "booking_id": 2018,
          "room_id": 26,
          "guest_id": 49,
          "last_name": "Gibson",
          "first_name": "Knowles",
          "email": "gibsonknowles@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$333.15",
          "type": "Emperor"
        },
        {
          "booking_id": 9073,
          "room_id": 4,
          "guest_id": 42,
          "last_name": "Le",
          "first_name": "Price",
          "email": "leprice@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$283.52",
          "type": "Emperor"
        },
        {
          "booking_id": 5485,
          "room_id": 14,
          "guest_id": 3,
          "last_name": "Newton",
          "first_name": "Caldwell",
          "email": "newtoncaldwell@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$497.84",
          "type": "Emperor"
        },
        {
          "booking_id": 4168,
          "room_id": 30,
          "guest_id": 4,
          "last_name": "Foreman",
          "first_name": "Peters",
          "email": "foremanpeters@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$413.92",
          "type": "Regular"
        },
        {
          "booking_id": 154,
          "room_id": 15,
          "guest_id": 38,
          "last_name": "Thelma",
          "first_name": "Osborn",
          "email": "thelmaosborn@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$240.16",
          "type": "Regular"
        },
        {
          "booking_id": 9471,
          "room_id": 9,
          "guest_id": 15,
          "last_name": "Vinson",
          "first_name": "Kline",
          "email": "vinsonkline@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$344.58",
          "type": "Emperor"
        },
        {
          "booking_id": 8679,
          "room_id": 9,
          "guest_id": 46,
          "last_name": "Gina",
          "first_name": "Miller",
          "email": "ginamiller@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$309.77",
          "type": "Regular"
        },
        {
          "booking_id": 815,
          "room_id": 17,
          "guest_id": 36,
          "last_name": "Marion",
          "first_name": "Mosley",
          "email": "marionmosley@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$248.13",
          "type": "Regular"
        },
        {
          "booking_id": 3766,
          "room_id": 4,
          "guest_id": 19,
          "last_name": "Sheryl",
          "first_name": "George",
          "email": "sherylgeorge@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$491.42",
          "type": "Deluxe"
        },
        {
          "booking_id": 6999,
          "room_id": 14,
          "guest_id": 40,
          "last_name": "Ida",
          "first_name": "Little",
          "email": "idalittle@plasmos.com",
          "status": "Finished",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$408.47",
          "type": "Deluxe"
        },
        {
          "booking_id": 4436,
          "room_id": 11,
          "guest_id": 43,
          "last_name": "Elvia",
          "first_name": "Calhoun",
          "email": "elviacalhoun@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$260.75",
          "type": "Emperor"
        },
        {
          "booking_id": 8174,
          "room_id": 23,
          "guest_id": 40,
          "last_name": "Dorsey",
          "first_name": "Vaughan",
          "email": "dorseyvaughan@plasmos.com",
          "status": "Ongoing",
          "start": "04/20/2020",
          "end": "04/20/2021",
          "price": "$434.47",
          "type": "Regular"
        }
    ];

    // Booking Data Columns
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
        { // Booking ID
            title: "Booking ID",
            field: "booking_id",
            editor: "input",
            headerFilter: "input"
        },
        { // Room ID
            title: "Room ID",
            field: "room_id",
            editor: "input",
            headerFilter: "input"
        },
        { // Start Date
            title: "Start",
            field: "start",
            editor: "input",
            headerFilter: "input"
        },
        { // Room Number
            title: "End",
            field: "end",
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
            headerFilterParams: { values: true }
        },
        { // Guest ID
            title: "Guest ID",
            field: "guest_id",
            editor: "input",
            headerFilter: "input"
        },
        { // Guest First Name
            title: "Last Name",
            field: "last_name",
            editor: "input",
            headerFilter: "input"
        },
        { // Guest First Name
            title: "First Name",
            field: "first_name",
            editor: "input",
            headerFilter: "input",
        },
        { // Guest Email
            title: "Email",
            field: "email",
            hozAlign: "left",
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

    return <Layout open={"Lodging"}>
        <h1>Bookings List</h1>
        <Table columns={columns} data={sampleData}></Table>
    </Layout>
}