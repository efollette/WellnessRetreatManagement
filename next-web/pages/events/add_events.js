/**
 * Filename: add_events.js
 * Author: Erik Follette
 * Description: Inventory analytics page
 * Date: May 21st, 2020
 */
import Layout from '../../components/layout'
import AddEventsForm from '../../components/addEventsForm'

export default function addEvents() {

    return <Layout open={"Events"}>
        <h1>Add Events</h1>
        <AddEventsForm/>
    </Layout>
}