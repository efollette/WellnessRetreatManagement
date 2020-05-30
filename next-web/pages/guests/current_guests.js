/**
 * Filename: current guests.js
 * Author: Erik Follette
 * Description: Management table for currently active guests
 * Date: May 14th, 2020
 */
import Layout from '../../components/layout'
import Table from '../../components/table'

export default function CurrentGuests() {

    // Sample Active Customers
    const sampleData = [{
            "id": 37,
            "last_name": "Lourdes",
            "first_name": "Floyd",
            "email": "lourdesfloyd@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 36,
            "last_name": "Sharron",
            "first_name": "Cobb",
            "email": "sharroncobb@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 13,
            "last_name": "Patel",
            "first_name": "Carson",
            "email": "patelcarson@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 27,
            "last_name": "Hull",
            "first_name": "Mathews",
            "email": "hullmathews@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 38,
            "last_name": "Minerva",
            "first_name": "Pacheco",
            "email": "minervapacheco@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 38,
            "last_name": "Kayla",
            "first_name": "Richard",
            "email": "kaylarichard@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 12,
            "last_name": "Paul",
            "first_name": "Finley",
            "email": "paulfinley@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 5,
            "last_name": "Lelia",
            "first_name": "Mcfarland",
            "email": "leliamcfarland@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 50,
            "last_name": "Navarro",
            "first_name": "Berger",
            "email": "navarroberger@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 47,
            "last_name": "Colon",
            "first_name": "Cox",
            "email": "coloncox@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 9,
            "last_name": "Marlene",
            "first_name": "Newton",
            "email": "marlenenewton@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 29,
            "last_name": "Hannah",
            "first_name": "Dyer",
            "email": "hannahdyer@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 39,
            "last_name": "Thompson",
            "first_name": "Bauer",
            "email": "thompsonbauer@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 47,
            "last_name": "Fry",
            "first_name": "Nguyen",
            "email": "frynguyen@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 19,
            "last_name": "Griffith",
            "first_name": "Black",
            "email": "griffithblack@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 25,
            "last_name": "Bean",
            "first_name": "Hester",
            "email": "beanhester@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 27,
            "last_name": "Leblanc",
            "first_name": "Rasmussen",
            "email": "leblancrasmussen@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 36,
            "last_name": "Boyer",
            "first_name": "Horn",
            "email": "boyerhorn@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 14,
            "last_name": "Delacruz",
            "first_name": "Pace",
            "email": "delacruzpace@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 25,
            "last_name": "Snyder",
            "first_name": "Mcintyre",
            "email": "snydermcintyre@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 16,
            "last_name": "Booker",
            "first_name": "Barker",
            "email": "bookerbarker@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 28,
            "last_name": "Buck",
            "first_name": "Powell",
            "email": "buckpowell@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 29,
            "last_name": "Rhea",
            "first_name": "Crawford",
            "email": "rheacrawford@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 9,
            "last_name": "Iris",
            "first_name": "Lancaster",
            "email": "irislancaster@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 50,
            "last_name": "Keisha",
            "first_name": "Rivera",
            "email": "keisharivera@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 34,
            "last_name": "Cain",
            "first_name": "Witt",
            "email": "cainwitt@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 50,
            "last_name": "Lea",
            "first_name": "Buck",
            "email": "leabuck@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 16,
            "last_name": "Roseann",
            "first_name": "Mosley",
            "email": "roseannmosley@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 9,
            "last_name": "Sparks",
            "first_name": "Gibson",
            "email": "sparksgibson@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 5,
            "last_name": "Head",
            "first_name": "Parker",
            "email": "headparker@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 48,
            "last_name": "Dunlap",
            "first_name": "Campbell",
            "email": "dunlapcampbell@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 22,
            "last_name": "King",
            "first_name": "Woods",
            "email": "kingwoods@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 33,
            "last_name": "Jenkins",
            "first_name": "Burke",
            "email": "jenkinsburke@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 13,
            "last_name": "Tania",
            "first_name": "Knowles",
            "email": "taniaknowles@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 29,
            "last_name": "Martha",
            "first_name": "Marsh",
            "email": "marthamarsh@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 5,
            "last_name": "Elvira",
            "first_name": "Hawkins",
            "email": "elvirahawkins@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 45,
            "last_name": "Vargas",
            "first_name": "Frye",
            "email": "vargasfrye@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 20,
            "last_name": "Jackson",
            "first_name": "Boyer",
            "email": "jacksonboyer@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 39,
            "last_name": "Maureen",
            "first_name": "Clay",
            "email": "maureenclay@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 48,
            "last_name": "Baldwin",
            "first_name": "Riggs",
            "email": "baldwinriggs@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 18,
            "last_name": "Twila",
            "first_name": "Cain",
            "email": "twilacain@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 4,
            "last_name": "Hobbs",
            "first_name": "Schwartz",
            "email": "hobbsschwartz@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 31,
            "last_name": "Kent",
            "first_name": "Jordan",
            "email": "kentjordan@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 19,
            "last_name": "England",
            "first_name": "Herman",
            "email": "englandherman@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 1,
            "last_name": "Conley",
            "first_name": "Fuentes",
            "email": "conleyfuentes@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 43,
            "last_name": "Susana",
            "first_name": "Cantrell",
            "email": "susanacantrell@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 40,
            "last_name": "Jasmine",
            "first_name": "Brock",
            "email": "jasminebrock@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 1,
            "last_name": "Sweet",
            "first_name": "Valdez",
            "email": "sweetvaldez@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 44,
            "last_name": "Elinor",
            "first_name": "Stanley",
            "email": "elinorstanley@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 47,
            "last_name": "Briana",
            "first_name": "Durham",
            "email": "brianadurham@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        }
    ];

    // Active or Inactive Booking
    const statusOptions = {
        active: "Active",
        inactive: "Inactive",
    };
    const columns = [{ // Selector
            width: 30,
            minWidth: 30,
            hozAlign: "center",
            resizable: false,
            headerSort: false,
            cellClick: function(e, cell) {
                cell.getRow().toggleSelect();
            },
        },
        { // Guest ID
            title: "ID",
            field: "id",
            editor: "input",
            headerFilter: "input"
        },
        { // Guest Last Name
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
        { // Guest Status
            title: "Status",
            field: "status",
            editor: "autocomplete",
            editorParams: {
                allowEmpty: true,
                showListOnEmpty: true,
                values: statusOptions
            },
            headerFilter: "select",
            headerFilterParams: { values: statusOptions },
        },
        { // DOB
            title: "Date Of Birth",
            field: "dob",
            hozAlign: "center",
            editor: "input",
            headerFilter: "input"
        },
        { // Delete Row 
            minWidth: 30,
            formatter: 'buttonCross',
            hozAlign: 'center',
            headerSort: false,
            cellClick: function(e, cell) {
                cell.getRow().delete();
            },
        },
    ];

    return (
        <Layout open={"Guests"}>
            <h1> Current Guests </h1> 
            <Table columns={columns} data ={sampleData} > </Table> 
        </Layout>
    )
}