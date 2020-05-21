/**
 * Filename: timeGrid.js
 * Author: Erik Follette
 * Description: Schedule calendar for Events
 * Date: May 21st, 2020
 */
import { Component } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import styles from './timeGrid.module.css'


class TimeGrid extends Component {
    constructor() {
        // Mandatory super() call
        super();
        // Internal state of calendar
        this.state = {
            
        };
    }
     
    render() {
     
        return (
            <FullCalendar 
                defaultView="timeGridWeek" 
                plugins= {[ dayGridPlugin, timeGridPlugin ]}
                header= {{
                left: 'dayGridMonth,timeGridWeek,timeGridDay',
                center: 'title',
                right:  'prevYear,prev,next,nextYear'
                }}
                footer= {{
                left: '',
                center: '',
                right: 'prev,next'
                }} 
            />
        );
    }
}

export default TimeGrid;