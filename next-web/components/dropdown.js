/**
 * Fiename: dropdown.js
 * Author: Erik Follette
 * Description: Dropdown button component for the side nav bar that contains sub links
 * Date: May 3rd, 2020
 */
import styles from './dropdown.module.css'
import { Component } from 'react'
import Link from 'next/link';

export default class Dropdown extends Component {
    container = React.createRef();

    /**
     * Creates an instance of Dropdown.
     * @param {
     *  'name': String,
     *  'icon': SVG,
     *  'links': String[]
     * } props
     * @memberof Dropdown
     */
    constructor(props) {
        super();
        this.name = props.name;
        this.icon = props.icon;
        this.path = '/' + props.name.toLowerCase();
        this.links = props.links;
        this.state = {
            open: false,
        };
    }

    /**
     * Sets the state of a Dropdown button to open or close it
     * @memberof Dropdown
     */
    open = () => {
        this.setState(state => {
            return {
              open: !state.open,
            };
          });
    };

    render() {
        return (
            <div className="container" ref={this.container}>
                <button className={`${styles.dropdown_btn } ${this.state.open ? styles.active : ''}`} onClick={this.open}>
                    <div className={`${styles.icon } ${this.state.open ? styles.active : ''}`}>
                        {this.icon} 
                    </div>
                    <div className={styles.name}>
                        {this.name}
                    </div>
                </button>
                {this.state.open && (
                    <div className={styles.dropdown_container}>
                        <ul>
                            {this.links.map((name, key) => 
                                <li key={key}>
                                    <Link href={this.path+'/'+name.toLowerCase()}>
                                        <a>{name}</a>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div> 
                )}
            </div>
        );
    }
}