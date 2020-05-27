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
        this.handleChange = this.handleChange.bind(this)
        this.openEventAdd = this.openEventAdd.bind(this)
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
                    end: '2020-05-26T14:45:00',
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

    // Get events api call
    getEvents() {
        return this.state.events
    }

    handleChange(event) {
        switch(event.target.id) {
            case 'title':
                this.setState({
                    eventInfo: {
                        title: event.target.value,
                        start: this.state.eventInfo.start,
                        end: this.state.eventInfo.end,
                        startDate: this.state.eventInfo.startDate,
                        endDate: this.state.eventInfo.endDate,
                        allDay: this.state.eventInfo.allDay,
                        description: this.state.eventInfo.description,
                        rooms: this.state.eventInfo.rooms,
                        guests: this.state.eventInfo.guests,
                        inventory: this.state.eventInfo.inventory,
                    }
                })
                break
            case 'startDate':
                this.setState({
                    eventInfo: {
                        title: this.state.eventInfo.title,
                        start: this.state.eventInfo.start,
                        end: this.state.eventInfo.end,
                        startDate: event.target.value,
                        endDate: this.state.eventInfo.endDate,
                        allDay: this.state.eventInfo.allDay,
                        description: this.state.eventInfo.description,
                        rooms: this.state.eventInfo.rooms,
                        guests: this.state.eventInfo.guests,
                        inventory: this.state.eventInfo.inventory
                    }})
                break
            case 'endDate':
                this.setState({
                    eventInfo: {
                        title: this.state.eventInfo.title,
                        start: this.state.eventInfo.start,
                        end: this.state.eventInfo.end,
                        startDate: this.state.eventInfo.startDate,
                        endDate: event.target.value,
                        allDay: this.state.eventInfo.allDay,
                        description: this.state.eventInfo.description,
                        rooms: this.state.eventInfo.rooms,
                        guests: this.state.eventInfo.guests,
                        inventory: this.state.eventInfo.inventory,
                    }
                })
                break
            case 'allDay':
                this.setState({
                    eventInfo: {
                        title: this.state.eventInfo.title,
                        start: this.state.eventInfo.start,
                        end: this.state.eventInfo.end,
                        startDate: this.state.eventInfo.startDate,
                        endDate: this.state.eventInfo.endDate,
                        allDay: this.state.eventInfo.allDay,
                        description: this.state.eventInfo.description,
                        rooms: this.state.eventInfo.rooms,
                        guests: this.state.eventInfo.guests,
                        inventory: this.state.eventInfo.inventory,
                        allDay: !this.state.eventInfo.allDay
                    }
                })
                break
            case 'startTime':
                this.setState({
                    eventInfo: {
                        title: this.state.eventInfo.title,
                        start: event.target.value,
                        end: this.state.eventInfo.end,
                        startDate: this.state.eventInfo.startDate,
                        endDate: this.state.eventInfo.endDate,
                        allDay: this.state.eventInfo.allDay,
                        description: this.state.eventInfo.description,
                        rooms: this.state.eventInfo.rooms,
                        guests: this.state.eventInfo.guests,
                        inventory: this.state.eventInfo.inventory,
                    }
                })
                break
            case 'endTime':
                this.setState({
                    eventInfo: {
                        title: this.state.eventInfo.title,
                        start: this.state.eventInfo.start,
                        end: event.target.value,
                        startDate: this.state.eventInfo.startDate,
                        endDate: this.state.eventInfo.endDate,
                        allDay: this.state.eventInfo.allDay,
                        description: this.state.eventInfo.description,
                        rooms: this.state.eventInfo.rooms,
                        guests: this.state.eventInfo.guests,
                        inventory: this.state.eventInfo.inventory,

                    }
                })
                break
            case 'description':
                this.setState({
                    eventInfo: {
                        title: this.state.eventInfo.title,
                        start: this.state.eventInfo.start,
                        end: this.state.eventInfo.end,
                        startDate: this.state.eventInfo.startDate,
                        endDate: this.state.eventInfo.endDate,
                        allDay: this.state.eventInfo.allDay,
                        description: event.target.value,
                        rooms: this.state.eventInfo.rooms,
                        guests: this.state.eventInfo.guests,
                        inventory: this.state.eventInfo.inventory,
                    }
                })
                break
            case 'rooms':
                this.setState({
                    eventInfo: {
                        title: this.state.eventInfo.title,
                        start: this.state.eventInfo.start,
                        end: this.state.eventInfo.end,
                        startDate: this.state.eventInfo.startDate,
                        endDate: this.state.eventInfo.endDate,
                        allDay: this.state.eventInfo.allDay,
                        description: this.state.eventInfo.description,
                        rooms: event.target.value,
                        guests: this.state.eventInfo.guests,
                        inventory: this.state.eventInfo.inventory,
                    }
                })
                break
            case 'guests':
                this.setState({
                    eventInfo: {
                        title: this.state.eventInfo.title,
                        start: this.state.eventInfo.start,
                        end: this.state.eventInfo.end,
                        startDate: this.state.eventInfo.startDate,
                        endDate: this.state.eventInfo.endDate,
                        allDay: this.state.eventInfo.allDay,
                        description: this.state.eventInfo.description,
                        rooms: this.state.eventInfo.rooms,
                        guests: event.target.value,
                        inventory: this.state.eventInfo.inventory,       
                    }
                })
                break
            case 'inventory':
                this.setState({
                    eventInfo: {
                        title: this.state.eventInfo.title,
                        start: this.state.eventInfo.start,
                        end: this.state.eventInfo.end,
                        startDate: this.state.eventInfo.startDate,
                        endDate: this.state.eventInfo.endDate,
                        allDay: this.state.eventInfo.allDay,
                        description: this.state.eventInfo.description,
                        rooms: this.state.eventInfo.rooms,
                        guests: this.state.eventInfo.guests,
                        inventory: event.target.value
                    }
                })
                break
        }
    }

    addEvent() {
        
        var startTime = this.state.eventInfo.start == "" ? "00:00:00" : this.state.eventInfo.start
        var endTime = this.state.eventInfo.end == "" ? startTime : this.state.eventInfo.end
        var startDate = new Date(this.state.eventInfo.startDate + 'T' + startTime); // will be in local time
        var endDate = new Date(this.state.eventInfo.endDate + 'T' + endTime); // will be in local time
        
        if (!isNaN(startDate.valueOf())) { // valid?
            let eventos = [...this.state.events]
            console.log(startDate)
            console.log(endDate)
            eventos = eventos.concat([{
                title: this.state.eventInfo.title,
                start: startDate,
                end: endDate,
                allDay: this.state.eventInfo.allDay,
                description: this.state.eventInfo.description,
                rooms: this.state.eventInfo.rooms,
                guests: this.state.eventInfo.guests,
                inventory: this.state.eventInfo.inventory
            }])
            this.setState(state => {
                state.events = eventos
                state.newEvent = !state.newEvent
                return state
            })
            // TODO: Add to database here
        } 
        else {
            console.log('Invalid date.');
        }
    }

    // Add an event
    openEventAdd() {
        this.setState( state => {
            return { 
                newEvent: !state.newEvent,
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
            }
        })
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
                        right:  'addEvent'
                    }}
                    footer= {{
                        left: 'prevYear, prev, next, nextYear',
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
                            click: () => this.openEventAdd()
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
                    <form id={styles.eventModal}>
                        <div id={styles.eventTitle}>
                            <input id='title' required={true} name='title' type='text' value={this.state.eventInfo.title} onChange={this.handleChange} placeholder='Event Title'></input>
                            <span id={styles.close} onClick={this.openEventAdd}>X</span>
                        </div>
                        <div id={styles.eventContent}>
                            <div className={styles.dates}>
                                <label htmlFor='startDate'>Start Date: </label>
                                <input id='startDate' onChange={this.handleChange} value={this.state.eventInfo.startDate} required={true} name='startDate' type='text' placeholder='MM/DD/YYYY'></input><br />
                                <label htmlFor='endDate'>End Date: </label>
                                <input id='endDate' onChange={this.handleChange} value={this.state.eventInfo.endDate} required={true} name='endDate' type='text' placeholder='MM/DD/YYYY'></input><br />
                                <label htmlFor='allDay'>All Day?</label>
                                <input type='checkbox' id='allDay' name='allDay' value={this.state.eventInfo.allDay} onChange={this.handleChange}></input><br />
                                <label htmlFor='startTime'>Start Time: </label>
                                <input id='startTime' onChange={this.handleChange} value={this.state.eventInfo.start} required={false} name='startTime' type='text' placeholder='HH:MM:SS'></input><br />
                                <label htmlFor='endTime'>End Time: </label>
                                <input id='endTime' onChange={this.handleChange} value={this.state.eventInfo.end} required={false} name='endTime' type='text' placeholder='HH:MM:SS'></input><br />
                                <label htmlFor='description'>Description: </label><br />
                                <input id='description' onChange={this.handleChange} value={this.state.eventInfo.description} required={false} name='description' type='text' placeholder='Add description'></input><br />
                                <label htmlFor='rooms'>Rooms: </label><br />
                                <input id='rooms' onChange={this.handleChange} value={this.state.eventInfo.rooms} required={false} name='rooms' type='text' placeholder='Add rooms'></input><br />
                                <label htmlFor='guests'>Guests: </label><br />
                                <input id='guests' onChange={this.handleChange} value={this.state.eventInfo.guests} required={false} name='guests' type='text' placeholder='Add guests'></input><br />
                                <label htmlFor='inventory'>Inventory: </label><br />
                                <input id='inventory' onChange={this.handleChange} value={this.state.eventInfo.inventory} required={false} name='inventory' type='text' placeholder='Add items for this event'></input><br />
                                <button type="button" className={styles.submit} onClick={this.addEvent}>Add To Calendar</button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        );
    }
}

export default TimeGrid;