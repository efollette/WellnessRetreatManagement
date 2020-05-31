/**
 * Filename: EventList.js
 * Author: Kevin Hau
 * Description: Schedule calendar for Events
 * Date: May 30st, 2020
 */

import { Component } from 'react'
import { formatDate, NamedTimeZoneImpl } from '@fullcalendar/core'
import FullCalendar from "@fullcalendar/react"
import listPlugin from '@fullcalendar/list'
import styles from './listView.module.css'
class ListView extends Component {
    constructor(props) {
        // Mandatory super() call
        super(props);
        this.events = props.events
        this.openEventView = this.openEventView.bind(this)
        this.calendarRef =  React.createRef();
        // Internal state of calendar
        this.state = {
            viewEvent: false,
            eventInfo: {
                title: "",
                start: "",
                end: "",
                startDate: "",
                endDate: "",
                allDay: false,
                description: "",
                rooms: "",
                guests: "",
                inventory: ""
            },
            events: this.events
        };
    }

    openEventView(info) {
        this.setState(
            state => {
                console.log(info)
                if (info.view != null) {
                    var startDate = formatDate(info.event.start, {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })
                    var endDate = formatDate(info.event.end, {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })
                    var start = formatDate(info.event.start, {
                        weekday: 'short',
                        hour: 'numeric',
                        minute: 'numeric',
                    })
                    var end = formatDate(info.event.end, {
                        weekday: 'short',
                        hour: 'numeric',
                        minute: 'numeric',
                    })
                    if (startDate == endDate) {
                        endDate = ""
                    }
                    if (endDate != "") {
                        endDate = ' to ' + endDate
                    }
                    if (end != "") end = ' to ' + end
                    return {
                        viewEvent: !state.viewEvent,
                        eventInfo: {
                            title: info.event.title,
                            start: start,
                            end: end,
                            startDate: startDate,
                            endDate: endDate, 
                            allDay: info.event.allDay,
                            description: info.event.extendedProps.description,
                            rooms: info.event.extendedProps.rooms,
                            guests: info.event.extendedProps.guests,
                            inventory: info.event.extendedProps.inventory
                        },
                    };
                }
                else {
                    return {
                        viewEvent: !state.viewEvent,
                        eventInfo: {
                            title: "",
                            start: "",
                            end: "",
                            startDate: "",
                            endDate: "",
                            allDay: false,
                            description: "",
                            rooms: "",
                            guests: "",
                            inventory: ""
                        },
                    };
                }
            }
        )
    }
    getEvents() {
        return this.state.events
    }

    render() {
        return (
            <div id = {styles.Calendar}>
                <FullCalendar 
                    height = {"parent"} 
                    width = {"parent"} 
                    defaultView="listMonth" 
                    plugins={[ listPlugin ]} 
                    eventSources={[
                        {
                            events: this.getEvents(),
                            color: '#FECB6D',
                            textColor: 'black',
                        }
                    ]} 
                    eventClick={
                        (info) => this.openEventView(info)
                    }
                    header= {{
                        right: 'prevYear, prev, today, next, nextYear'
                    }} 
                    
                    /> 
                     {this.state.viewEvent && (
                    <div id={styles.eventModal}>
                        <div id={styles.eventTitle}>
                            <span contentEditable="true">{this.state.eventInfo.title}</span>
                            <span id={styles.close} onClick={this.openEventView}>X</span>
                        </div>
                        <div id={styles.eventContent}>
                            <div className={styles.dates}>
                                <span id={styles.startDate}>{this.state.eventInfo.startDate}</span>
                                <span id={styles.endDate}>{this.state.eventInfo.endDate}</span>
                            </div>
                            {
                                !this.state.eventInfo.allDay && (
                                    <span>
                                        <span id="startTime">{this.state.eventInfo.start}</span>
                                        <span id="endTime">{this.state.eventInfo.end}</span>
                                    </span>
                                )
                            }
                            <div className={styles.description}>
                                <h4>Description</h4>
                                {this.state.eventInfo.description}
                            </div>
                            <div className={styles.guests}>
                                <h4>Guests</h4>
                                {this.state.eventInfo.guests}
                            </div>
                            <div className={styles.rooms}>
                                <h4>Rooms</h4>
                                {this.state.eventInfo.rooms}
                            </div>
                            <div className={styles.inventory}>
                                <h4>Inventory</h4>
                                {this.state.eventInfo.inventory}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default ListView;