/**
 * Filename: schedule.js
 * Author: Erik Follette
 * Description: Calendar displaying events for the set timeperiod
 * Date: May 21st, 2020
 */
import Layout from '../../components/layout'
import TimeGrid from '../../components/timeGrid'

export default function EventSchedule() {

    return <Layout open={"Events"}>
        <h1>Schedule</h1>
        <TimeGrid />
    </Layout>
}