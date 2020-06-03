/**
 * Filename: nav.js
 * Author: Erik Follette
 * Description: Side navigation bar component
 * Date: May 3rd, 2020
 */
import Link from 'next/link';
import styles from './nav.module.css'
import Dropdown from './dropdown'
import Icons  from '../components/icons'

export default function Nav({open}) {

  // Properties for icons in sidebar
  var iconProps = {
    'size': '33', 
    'color': 'white'
  }

  // Array of Dropdown button props for each nav item
  var navItems = [
    {
      'name': 'Analytics',
      'open': (open == 'Analytics'),
      'icon': Icons[4](iconProps),
      'links': [
        'Dashboard',
      ]
    },
    {
      'name': 'Events',
      'open': (open == 'Events'),
      'icon': Icons[3](iconProps),
      'links': [
        'Add Events',
        'Event List',
        'Schedule',
      ]
    },
    {
      'name': 'Guests',
      'open': (open == 'Guests'),
      'icon': Icons[1](iconProps),
      'links': [
        'Current Guests',
        'Guest List',
      ]
    },
    {
      'name': 'Inventory',
      'open': (open == 'Inventory'),
      'icon': Icons[2](iconProps),
      'links': [
        'List',
      ]
    },
    {
      'name': 'Lodging',
      'open': (open == 'Lodging'),
      'icon': Icons[0](iconProps),
      'links': [
        'Bookings',
        'Rooms List',
      ]
  }];

  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <Link href='/dashboard'>
          <a className={styles.dash}>Alafia</a>
        </Link>
      </div>
      <div className={styles.items}>
        {navItems.map((props, key) => <Dropdown {...props} key={key}/>)} 
      </div>
      <div >
        <button className={styles.logout}>
          <div className={styles.icon}>
            {Icons[5](iconProps)}
          </div>
          <div>
            <Link href='/login'>
              <a>Logout</a>
            </Link>
          </div>
        </button>
      </div>
    </div>
  );
}