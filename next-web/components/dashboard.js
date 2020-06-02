/**
 * Filename: dashboard.js
 * Author: Erik Follette
 * Description: Analytics dashboard component
 * Date: May 31st, 2020
 */
import styles from './dashboard.module.css'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

export default function Dashboard(props) {

    return <div className={styles.container}>
        <LineChart width={600} height={300} data={props.data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="date" padding={{left: 30, right: 30}}/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="total guests" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="last year" stroke="#82ca9d" />
        </LineChart>
    </div>
}