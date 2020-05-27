/**
 * Filename: guest list.js
 * Author: Erik Follette
 * Description: Guests management page
 * Date: May 14th, 2020
 */
import Layout from '../../components/layout'
import Table from '../../components/table'

export default function Guests() {

    /**
     * TODO: Connect this to the database using our
     * server. Function to get data goes here. 
     * 
     * Data format: guest[] - Array of guest data
     * {
     *      "id": number,
            "last_name": string,
            "first_name": string,
            "email": string (email),
            "status": "Active" or "Inactive",
            "dob": date"
     * }
     */

    // Sample Guest Data
    const sampleData = [ 
        {
            "id": 30,
            "last_name": "Mcfarland",
            "first_name": "Hughes",
            "email": "mcfarlandhughes@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 27,
            "last_name": "Ray",
            "first_name": "Dejesus",
            "email": "raydejesus@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 9,
            "last_name": "Forbes",
            "first_name": "Cain",
            "email": "forbescain@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 44,
            "last_name": "Bauer",
            "first_name": "Haynes",
            "email": "bauerhaynes@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 42,
            "last_name": "Dee",
            "first_name": "Kirkland",
            "email": "deekirkland@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 19,
            "last_name": "Anthony",
            "first_name": "Brooks",
            "email": "anthonybrooks@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 30,
            "last_name": "Tanisha",
            "first_name": "Parks",
            "email": "tanishaparks@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 47,
            "last_name": "Wendi",
            "first_name": "Pace",
            "email": "wendipace@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 9,
            "last_name": "Angelita",
            "first_name": "Castro",
            "email": "angelitacastro@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 16,
            "last_name": "Harriet",
            "first_name": "Evans",
            "email": "harrietevans@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 31,
            "last_name": "Young",
            "first_name": "Reilly",
            "email": "youngreilly@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 22,
            "last_name": "Spencer",
            "first_name": "Knowles",
            "email": "spencerknowles@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 3,
            "last_name": "Sanford",
            "first_name": "Mann",
            "email": "sanfordmann@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 8,
            "last_name": "Susana",
            "first_name": "Ball",
            "email": "susanaball@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 39,
            "last_name": "Deloris",
            "first_name": "Kinney",
            "email": "deloriskinney@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 17,
            "last_name": "Horton",
            "first_name": "Holloway",
            "email": "hortonholloway@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 31,
            "last_name": "Amy",
            "first_name": "Shields",
            "email": "amyshields@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 1,
            "last_name": "Barber",
            "first_name": "Medina",
            "email": "barbermedina@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 7,
            "last_name": "Luann",
            "first_name": "Daniels",
            "email": "luanndaniels@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 12,
            "last_name": "Bowman",
            "first_name": "Davenport",
            "email": "bowmandavenport@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 35,
            "last_name": "Mckay",
            "first_name": "Bullock",
            "email": "mckaybullock@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 22,
            "last_name": "Zamora",
            "first_name": "Mckenzie",
            "email": "zamoramckenzie@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 45,
            "last_name": "Sexton",
            "first_name": "Morgan",
            "email": "sextonmorgan@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 43,
            "last_name": "Hawkins",
            "first_name": "Castillo",
            "email": "hawkinscastillo@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 15,
            "last_name": "Cantu",
            "first_name": "Hutchinson",
            "email": "cantuhutchinson@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 40,
            "last_name": "Guthrie",
            "first_name": "Barber",
            "email": "guthriebarber@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 16,
            "last_name": "Singleton",
            "first_name": "Pena",
            "email": "singletonpena@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 5,
            "last_name": "Hickman",
            "first_name": "Roman",
            "email": "hickmanroman@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 29,
            "last_name": "Bianca",
            "first_name": "Pugh",
            "email": "biancapugh@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 18,
            "last_name": "Pierce",
            "first_name": "Richmond",
            "email": "piercerichmond@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 24,
            "last_name": "Karina",
            "first_name": "Shannon",
            "email": "karinashannon@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 21,
            "last_name": "Lourdes",
            "first_name": "Jefferson",
            "email": "lourdesjefferson@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 21,
            "last_name": "Oliver",
            "first_name": "Manning",
            "email": "olivermanning@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 17,
            "last_name": "Mack",
            "first_name": "Cox",
            "email": "mackcox@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 13,
            "last_name": "Carrillo",
            "first_name": "Silva",
            "email": "carrillosilva@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 35,
            "last_name": "Luna",
            "first_name": "Joseph",
            "email": "lunajoseph@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 38,
            "last_name": "Denise",
            "first_name": "Harmon",
            "email": "deniseharmon@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 20,
            "last_name": "Sanders",
            "first_name": "Huffman",
            "email": "sandershuffman@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 42,
            "last_name": "Kerr",
            "first_name": "Merrill",
            "email": "kerrmerrill@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 11,
            "last_name": "Summers",
            "first_name": "Walsh",
            "email": "summerswalsh@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 30,
            "last_name": "Pace",
            "first_name": "Barry",
            "email": "pacebarry@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 17,
            "last_name": "Bailey",
            "first_name": "Bird",
            "email": "baileybird@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 36,
            "last_name": "Mathews",
            "first_name": "Mayo",
            "email": "mathewsmayo@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 6,
            "last_name": "Williamson",
            "first_name": "Roy",
            "email": "williamsonroy@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 20,
            "last_name": "Shelly",
            "first_name": "Farrell",
            "email": "shellyfarrell@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 33,
            "last_name": "Mclaughlin",
            "first_name": "Massey",
            "email": "mclaughlinmassey@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 0,
            "last_name": "Hogan",
            "first_name": "Henry",
            "email": "hoganhenry@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 14,
            "last_name": "Iva",
            "first_name": "Ballard",
            "email": "ivaballard@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        },
        {
            "id": 14,
            "last_name": "Finch",
            "first_name": "Sharpe",
            "email": "finchsharpe@plasmos.com",
            "status": "Inactive",
            "dob": "04/20/2020"
        },
        {
            "id": 39,
            "last_name": "Marissa",
            "first_name": "Ayala",
            "email": "marissaayala@plasmos.com",
            "status": "Active",
            "dob": "04/20/2020"
        }
    ]

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
            minWidth:30, 
            formatter: 'buttonCross',
            hozAlign: 'center', 
            headerSort:false,
            cellClick: function(e, cell) {
                cell.getRow().delete();
            },
        },
    ];

    return <Layout open={"Guests"}>
        <h1>Manage Guests</h1>
        <Table columns={columns} data={sampleData}></Table>
    </Layout>
}

// Guests.getInitalProps = async (ctx) => {
//     const res = await fetch("http://localhost:5000/guests");
//     const data = await res.json();
//     console.log(data);
//     return data;
// }
