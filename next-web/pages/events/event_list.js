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
            title: 'Repeat Event',
            start: '2020-05-26',
            end: '2020-06-26',
            allDay: true,
            description: "An event that is all day for just one day",
            rooms: "",
            inventory: "",
            guests: "",
            daysOfWeek: [1, 3, 5],
            startRecur: '2020-05-26',
            startTime: null,
            endTime: null
        },
        {
            title: 'One Day',
            start: '2020-06-02',
            end: '2020-06-02',
            allDay: true,
            description: "An event that is all day for just one day",
            rooms: "",
            inventory: "",
            guests: "",
            daysOfWeek: null,
            startRecur: null,
            startTime: null,
            endTime: null
        },
        {
            title: 'Multi Day All Day',
            start: '2020-06-05',
            end: '2020-06-29',
            description: "A multi day, all day event",
            rooms: "",
            inventory: "",
            guests: "",
            daysOfWeek: null,
            startRecur: null,
            startTime: null,
            endTime: null
        },
        {
            title: 'Event With Time',
            start: '2020-06-02T12:30:00',
            end: '2020-06-02T13:30:00',
            allDay: false, // will make the time show
            description: "Event showing the time",
            rooms: "",
            inventory: "",
            guests: "",
            daysOfWeek: null,
            startRecur: null,
            startTime: null,
            endTime: null
        },
        {
            title: 'Overlap Time',
            start: '2020-06-02T12:45:00',
            end: '2020-06-02T14:45:00',
            allDay: false, // will make the time show
            description: "An event that overlaps with another and lasts two days",
            rooms: "",
            inventory: "",
            guests: "",
            daysOfWeek: null,
            startRecur: null
        }
    ]
    
    return <Layout open={"Events"}>
        <h1>Event List</h1> 
        <ListView events={eventos}/>
    </Layout>
}