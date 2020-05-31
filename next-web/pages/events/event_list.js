/**
 * Filename: event_list.js
 * Author: Erik Follette
 * Description: Inventory analytics page
 * Date: May 21st, 2020
 */
import Layout from '../../components/layout'
import ListView from '../../components/listView'


export default function EventList() {

    var eventos = [
            {
                title: 'One Day',
                start: '2020-05-26',
                end: '2020-05-26',
                allDay: true,
                description: "An event that is all day for just one day",
                rooms: "",
                inventory: "",
                guests: ""
            },
            {
                title: 'Multi Day All Day',
                start: '2020-05-05',
                end: '2020-05-29',
                description: "A multi day, all day event",
                rooms: "",
                inventory: "",
                guests: ""
            },
            {
                title: 'Event With Time',
                start: '2020-05-26T12:30:00',
                end: '2020-05-26T13:30:00',
                allDay: false, // will make the time show
                description: "Event showing the time",
                rooms: "",
                inventory: "",
                guests: ""
            },
            {
                title: 'Overlap Time',
                start: '2020-05-26T12:45:00',
                end: '2020-05-26T14:45:00',
                allDay: false, // will make the time show
                description: "An event that overlaps with another and lasts two days",
                rooms: "",
                inventory: "",
                guests: ""
            }
        ]
    return <Layout open={"Events"}>
        <h1>Event List</h1> 
        <ListView events={eventos}/>
    </Layout>
}