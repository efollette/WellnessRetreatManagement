/**
 * Filename: timeGrid.js
 * Author: Erik Follette
 * Description: Schedule calendar for Events
 * Date: May 21st, 2020
 */
import { Component } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'
import styles from './timeGrid.module.css'


class TimeGrid extends Component {
    constructor() {
        // Mandatory super() call
        super();
        this.openEventView = this.openEventView.bind(this)
        this.addEvent = this.addEvent.bind(this)
        this.openEvent = this.openEvent.bind(this)
        this.calendarRef =  React.createRef();
        // Internal state of calendar
        this.state = {
            viewEvent: false,
            newEvent: false,
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
            events: [
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
                    end: '2020-05-27T14:45:00',
                    allDay: false, // will make the time show
                    description: "An event that overlaps with another and lasts two days",
                    rooms: "",
                    inventory: "",
                    guests: ""
                }
            ]
        };
    }

    openEventView(info) {
        this.setState(
            state => {
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
                    };
                }
            }
        )
        
    }

    // Get events api call
    getEvents() {
        return this.state.events
    }

    addEvent() {

    }

    // Add an event
    openEvent() {
        this.setState( state => {
            return { 
                newEvent: !state.newEvent,
            }
        })
        var date = new Date('2020-05-21' + 'T00:00:00'); // will be in local time

        if (!isNaN(date.valueOf())) { // valid?
            this.calendarRef.current.calendar.addEvent({
            title: 'New Event',
            start: date,
            allDay: true
          });
          console.log('Great. Now, update your database...');
        } else {
          console.log('Invalid date.');
        }
      }

    // Move to the previous month
    prevMonth() {
        this.calendarRef.current.calendar.incrementDate({'days': -30})
    }

    // Move to the next month
    nextMonth() {
        this.calendarRef.current.calendar.incrementDate({'days': -30})
    }
     
    render() {
     
        return (
            <div className={styles.container}>
                <FullCalendar 
                    ref={this.calendarRef}
                    defaultView="timeGridWeek" 
                    eventSources={[
                        {
                            events: this.getEvents(),
                            color: '#FECB6D',
                            textColor: 'black',
                        }
                    ]}
                    selectable={true}
                    plugins= {[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                    header= {{
                        left: 'dayGridMonth, timeGridWeek, timeGridDay',
                        center: 'title',
                        right:  'prevYear, prev, next, nextYear'
                    }}
                    footer= {{
                        left: 'addEvent',
                        center: '',
                        right: 'prevMonth, today, nextMonth'
                    }} 
                    // Exectute on empty time selection
                    select={function(info) {
                        console.log('Start: ' + info.startStr)
                        console.log('End: ' + info.endStr)
                    }}
                    eventClick={
                        (info) => this.openEventView(info)
                    }
                    customButtons= {{
                        addEvent: {
                            text: 'add event',
                            click: () => this.openEvent()
                        },
                        prevMonth: {
                            text: "-30 Days",
                            click: () => this.prevMonth()
                        },
                        nextMonth: {
                            text: "+30 Days",
                            click: () => this.nextMonth()
                        }
                    }}
                />
                {this.state.viewEvent && (
                    <div id={styles.eventModal}>
                        <div id={styles.eventTitle}>
                            {this.state.eventInfo.title}
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
                {this.state.newEvent && (
                    <form id={styles.eventModal} onSubmit={this.addEvent}>
                        <div id={styles.eventTitle}>
                            <input required={true} name='title' type='text' placeholder='Event Title'></input>
                            <span id={styles.close} onClick={this.openEvent}>X</span>
                        </div>
                        <div id={styles.eventContent}>
                            <div className={styles.dates}>
                                <label for='startDate'>Start Date: </label>
                                <input required={true} name='startDate' type='text' placeholder='MM/DD/YYYY'></input>
                                <label for='endDate'>End Date: </label>
                                <input required={true} name='endDate' type='text' placeholder='MM/DD/YYYY'></input>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        );
    }
}

export default TimeGrid;
