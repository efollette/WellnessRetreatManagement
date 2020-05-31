/**
 * Filename: add_eventsForm.js
 * Author: Kevin Hau
 * Description: Inventory analytics page
 * Date: May 27st, 2020
 */
import { Component } from 'react'
import styles from './addEventsForm.module.css'

class AddEventsForm extends Component {
    render() {
        return (
                    <form id={styles.eventModal}>
                        <div id={styles.eventTitle}>
                            <input id='title' required={true} name='title' type='text'   placeholder='Event Title'></input>
                            <span id={styles.close} ></span>
                        </div>
                        <div id={styles.eventContent}>
                            <div className={styles.dates}>
                                <label htmlFor='startDate'>Start Date: </label>
                                <input id='startDate'  required={true} name='startDate' type='text' placeholder='MM/DD/YYYY'></input><br />
                                <label htmlFor='endDate'>End Date: </label>
                                <input id='endDate'  required={true} name='endDate' type='text' placeholder='MM/DD/YYYY'></input><br />
                                <label htmlFor='startTime'>Start Time: </label>
                                <input id='startTime'  required={false} name='startTime' type='text' placeholder='HH:MM:SS'></input><br />
                                <label htmlFor='endTime'>End Time: </label>
                                <input id='endTime'  required={false} name='endTime' type='text' placeholder='HH:MM:SS'></input><br />
                                <label htmlFor='description'>Description: </label><br />
                                <input id='description'  required={false} name='description' type='text' placeholder='Add description'></input><br />
                                <label htmlFor='rooms'>Rooms: </label><br />
                                <input id='rooms'  required={false} name='rooms' type='text' placeholder='Add rooms'></input><br />
                                <label htmlFor='guests'>Guests: </label><br />
                                <input id='guests'  required={false} name='guests' type='text' placeholder='Add guests'></input><br />
                                <label htmlFor='inventory'>Inventory: </label><br />
                                <input id='inventory'  required={false} name='inventory' type='text' placeholder='Add items for this event'></input><br />
                                <button type="button" className={styles.submit} >Add To Calendar</button>
                            </div>
                        </div>
                    </form>
        )
    };
}

export default AddEventsForm;