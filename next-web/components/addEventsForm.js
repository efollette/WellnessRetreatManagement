/**
 * Filename: add_eventsForm.js
 * Author: Kevin Hau
 * Description: Inventory analytics page
 * Date: May 27st, 2020
 */
import { Component } from 'react'
import styles from './addEventsForm.module.css'

class AddEventsForm extends Component {

    constructor() {
        // Mandatory super() call
        super();
        this.addEvent = this.addEvent.bind(this)
        this.handleChange = this.handleChange.bind(this)

        // Internal state
        this.state = {
            eventInfo: {
                title: "",
                start: "",
                end: "",
                startDate: "",
                endDate: "",
                allDay: true,
                description: "",
                rooms: "",
                guests: "",
                inventory: "",
                repeats: false,
                daysOfWeek: []

            },
            error: ""
        };
    }

    handleChange(event) {
        switch(event.target.id) {case 'mon':
        if (event.target.checked) {
            this.state.eventInfo.daysOfWeek.push(1)
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
                    repeats: this.state.eventInfo.repeats,
                    daysOfWeek: this.state.eventInfo.daysOfWeek
                }
            })
        }
        else {
            var tmp = this.state.eventInfo.daysOfWeek
            for( var i = 0; i < tmp.length; ++i ) {
                if (tmp[i] == 1) tmp[i] = -8
            }
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
                    repeats: this.state.eventInfo.repeats,
                    daysOfWeek: tmp
                }
            })
        }
        break;
    case 'tue':
        if (event.target.checked) {
            this.state.eventInfo.daysOfWeek.push(2)
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
                    repeats: this.state.eventInfo.repeats,
                    daysOfWeek: this.state.eventInfo.daysOfWeek
                }
            })
        }
        else {
            var tmp = this.state.eventInfo.daysOfWeek
            for( var i = 0; i < tmp.length; ++i ) {
                if (tmp[i] == 2) tmp[i] = -8
            }
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
                    repeats: this.state.eventInfo.repeats,
                    daysOfWeek: tmp
                }
            })
        }
        break;
    case 'wed':
        if (event.target.checked) {
            this.state.eventInfo.daysOfWeek.push(3)
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
                    repeats: this.state.eventInfo.repeats,
                    daysOfWeek: this.state.eventInfo.daysOfWeek
                }
            })
        }
        else {
            var tmp = this.state.eventInfo.daysOfWeek
            for( var i = 0; i < tmp.length; ++i ) {
                if (tmp[i] == 3) tmp[i] = -8
            }
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
                    repeats: this.state.eventInfo.repeats,
                    daysOfWeek: tmp
                }
            })
        }
        break;
            case 'thu':
                if (event.target.checked) {
                    this.state.eventInfo.daysOfWeek.push(4)
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
                            repeats: this.state.eventInfo.repeats,
                            daysOfWeek: this.state.eventInfo.daysOfWeek 
                        }
                    })
                }
                else {
                    var tmp = this.state.eventInfo.daysOfWeek
                    for( var i = 0; i < tmp.length; ++i ) {
                        if (tmp[i] == 4) tmp[i] = -8
                    }
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
                            repeats: this.state.eventInfo.repeats,
                            daysOfWeek: tmp
                        }
                    })
                }
                break;
            case 'fri':
                if (event.target.checked) {
                    this.state.eventInfo.daysOfWeek.push(5)
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
                            repeats: this.state.eventInfo.repeats,
                            daysOfWeek: this.state.eventInfo.daysOfWeek
                        }
                    })
                }
                else {
                    var tmp = this.state.eventInfo.daysOfWeek
                    for( var i = 0; i < tmp.length; ++i ) {
                        if (tmp[i] == 5) tmp[i] = -8
                    }
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
                            repeats: this.state.eventInfo.repeats,
                            daysOfWeek: tmp
                        }
                    })
                }
                break;
            case 'sat':
                if (event.target.checked) {
                    this.state.eventInfo.daysOfWeek.push(6)
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
                            repeats: this.state.eventInfo.repeats,
                            daysOfWeek: this.state.eventInfo.daysOfWeek
                        }
                    })
                }
                else {
                    var tmp = this.state.eventInfo.daysOfWeek
                    for( var i = 0; i < tmp.length; ++i ) {
                        if (tmp[i] == 6) tmp[i] = -8
                    }
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
                            repeats: this.state.eventInfo.repeats,
                            daysOfWeek: tmp
                        }
                    })
                }
                break;
            case 'sun':
                if (event.target.checked) {
                    this.state.eventInfo.daysOfWeek.push(0)
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
                            repeats: this.state.eventInfo.repeats,
                            daysOfWeek: this.state.eventInfo.daysOfWeek
                        }
                    })
                }
                else {
                    for( var i = 0; i < this.state.eventInfo.daysOfWeek.length; ++i ) {
                        if (this.state.eventInfo.daysOfWeek[i] == 0) this.state.eventInfo.daysOfWeek[i] = -8
                    }
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
                            repeats: this.state.eventInfo.repeats,
                            daysOfWeek: this.state.eventInfo.daysOfWeek
                        }
                    })
                }
                break;
            case 'repeats':
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
                        repeats: !this.state.eventInfo.repeats,
                        daysOfWeek: this.state.eventInfo.daysOfWeek
                    }
                })
                break;
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
                        repeats: this.state.eventInfo.repeats,
                        daysOfWeek: this.state.eventInfo.daysOfWeek
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
                        inventory: this.state.eventInfo.inventory,
                        repeats: this.state.eventInfo.repeats,
                        daysOfWeek: this.state.eventInfo.daysOfWeek
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
                        repeats: this.state.eventInfo.repeats,
                        daysOfWeek: this.state.eventInfo.daysOfWeek
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
                        allDay: event.target.value == "",
                        description: this.state.eventInfo.description,
                        rooms: this.state.eventInfo.rooms,
                        guests: this.state.eventInfo.guests,
                        inventory: this.state.eventInfo.inventory,
                        repeats: this.state.eventInfo.repeats,
                        daysOfWeek: this.state.eventInfo.daysOfWeek
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
                        repeats: this.state.eventInfo.repeats,
                        daysOfWeek: this.state.eventInfo.daysOfWeek

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
                        repeats: this.state.eventInfo.repeats,
                        daysOfWeek: this.state.eventInfo.daysOfWeek
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
                        repeats: this.state.eventInfo.repeats,
                        daysOfWeek: this.state.eventInfo.daysOfWeek
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
                        repeats: this.state.eventInfo.repeats,
                        daysOfWeek: this.state.eventInfo.daysOfWeek 
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
                        inventory: event.target.value,
                        repeats: this.state.eventInfo.repeats,
                        daysOfWeek: this.state.eventInfo.daysOfWeek
                    }
                })
                break
        }
    }

    addEvent() {
        
        var startTime = this.state.eventInfo.start == "" ? "00:00:00" : this.state.eventInfo.start
        var endTime = this.state.eventInfo.end == "" ? startTime : this.state.eventInfo.end
        var startDate = new Date(this.state.eventInfo.startDate + 'T' + startTime); // will be in local time
        var endDateStr = this.state.eventInfo.endDate == "" ? this.state.eventInfo.startDate : this.state.eventInfo.endDate
        var endDate = new Date(endDateStr + 'T' + endTime); // will be in local time

        if (this.state.eventInfo.title != "" && this.state.eventInfo.startDate != "") { 
            var newEvent = {
                title: this.state.eventInfo.title,
                start: startDate,
                end: endDate,
                allDay: this.state.eventInfo.allDay,
                description: this.state.eventInfo.description,
                rooms: this.state.eventInfo.rooms,
                guests: this.state.eventInfo.guests,
                inventory: this.state.eventInfo.inventory,
                startRecur: this.state.eventInfo.repeats ? startDate : null,
                daysOfWeek: this.state.eventInfo.repeats ? this.state.eventInfo.daysOfWeek : null,
                startTime: this.state.eventInfo.repeats ? startTime : null,
                endTime: this.state.eventInfo.repeats ? endTime : null,
            }
            // TODO: Add to database here
            console.log(newEvent)
        } 
        else {
            this.setState(state => {
                state.error = "Events need a title and a start date\n"
                return state
            })
            setTimeout(() => {
                this.setState(state => {
                    state.error = ""
                    return state
                });
              }, 5000)
        }
    }

    render() {
        return (
            <form id={styles.eventModal}>
                <div id={styles.eventTitle}>
                    <input id='title' required={true} name='title' type='text' value={this.state.eventInfo.title} onChange={this.handleChange} placeholder='Event Title'></input>
                </div>
                <div id={styles.eventContent}>
                    <div className={styles.dates}>
                        {this.state.error != "" && (
                            <div className={styles.error}>{`${this.state.error}`}</div>
                        )}
                        <label htmlFor='startDate'>Start Date: </label>
                        <input id='startDate' onChange={this.handleChange} value={this.state.eventInfo.startDate} required={true} name='startDate' type='date' placeholder='YYYY-MM-DD'></input><br />
                        <label htmlFor='endDate'>End Date: </label>
                        <input id='endDate' onChange={this.handleChange} value={this.state.eventInfo.endDate} required={false} name='endDate' type='date' placeholder='YYYY-MM-DD'></input><br />
                        <label htmlFor='repeat'>Repeats?</label>
                        <input id='repeats' name='repeat' type='checkbox' checked={this.state.eventInfo.repeats} onChange={this.handleChange}></input><br />
                        {this.state.eventInfo.repeats && (<div className={styles.weekDays_selector}>
                                <input type="checkbox" id="sun" onChange={this.handleChange} className={styles.weekday} />
                                <label htmlFor="sun">S</label>
                                <input type="checkbox" id="mon" onChange={this.handleChange} className={styles.weekday} />
                                <label htmlFor="mon">M</label>
                                <input type="checkbox" id="tue" onChange={this.handleChange} className={styles.weekday} />
                                <label htmlFor="tue">T</label>
                                <input type="checkbox" id="wed" onChange={this.handleChange} className={styles.weekday} />
                                <label htmlFor="wed">W</label>
                                <input type="checkbox" id="thu" onChange={this.handleChange} className={styles.weekday} />
                                <label htmlFor="thu">T</label>
                                <input type="checkbox" id="fri" onChange={this.handleChange} className={styles.weekday} />
                                <label htmlFor="fri">F</label>
                                <input type="checkbox" id="sat" onChange={this.handleChange} className={styles.weekday} />
                                <label htmlFor="sat">S</label>
                            </div>)}
                        <label htmlFor='startTime'>Start Time: </label>
                        <input id='startTime' onChange={this.handleChange} value={this.state.eventInfo.start} required={false} name='startTime' type='time'></input><br />
                        <label htmlFor='endTime'>End Time: </label>
                        <input id='endTime' onChange={this.handleChange} value={this.state.eventInfo.end} required={false} name='endTime' type='time'></input><br />
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
        )};
}

export default AddEventsForm;