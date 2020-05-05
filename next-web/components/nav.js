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

export default function Nav() {

  // Properties for icons in sidebar
  var iconProps = {
    'size': '33', 
    'color': 'white'
  }

  // Array of Dropdown button props for each nav item
  var navItems = [
    {
      'name': 'Events',
      'icon': Icons[3](iconProps),
      'links': [
        'List',
        'Schedule',
        'Assignments',
      ]
    },
    {
      'name': 'Finances',
      'icon': Icons[4](iconProps),
      'links': [
        'Payments',
        'Monitor',
        'Funds',
      ]
    },
    {
      'name': 'Inventory',
      'icon': Icons[2](iconProps),
      'links': [
        'List',
        'Analystics',
        'Management',
      ]
    },
    {
      'name': 'Guests',
      'icon': Icons[1](iconProps),
      'links': [
        'Support',
        'Email'
      ]
    },
    {
      'name': 'Lodging',
      'icon': Icons[0](iconProps),
      'links': [
        'Reservations',
        'List',
        'Available',
        'All',
      ]
  }];

  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <Link href='/dashboard'>
          <a className={styles.dash}>ALAFIA</a>
        </Link>
      </div>
      <div className={styles.items}>
        {navItems.map((props, key) => <Dropdown {...props} key={key}/>)} 
      </div>
    </div>
  );
}