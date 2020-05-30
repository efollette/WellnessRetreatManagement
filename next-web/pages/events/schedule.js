/**
 * Filename: schedule.js
 * Author: Erik Follette
 * Description: Calendar displaying events for the set timeperiod
 * Date: May 21st, 2020
 */
import Layout from '../../components/layout'
import TimeGrid from '../../components/timeGrid'

export default function EventSchedule() {

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
            start: '2020-05-26',
            end: '2020-05-26',
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
            start: '2020-05-05',
            end: '2020-05-29',
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
            start: '2020-05-26T12:30:00',
            end: '2020-05-26T13:30:00',
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
            start: '2020-05-26T12:45:00',
            end: '2020-05-26T14:45:00',
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
        <h1>Schedule</h1>
        <TimeGrid events={eventos}/>
    </Layout>
}