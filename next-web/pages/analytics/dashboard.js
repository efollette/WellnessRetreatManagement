/**
 * Filename: dashboard.js
 * Author: Erik Follette
 * Description: Analytics dashboard page
 * Date: May 31st, 2020
 */
import Layout from '../../components/layout'
import Dashboard from '../../components/dashboard'

const lineData = [
  {
    date: '05/31/2020', 
    'total guests': 35,
    'last year': 44,
  },
  {
    date: '06/01/2020', 
    'total guests': 20,
    'last year': 14,
  },
  {
    date: '06/02/2020', 
    'total guests': 40,
    'last year': 14,
  },
  {
    date: '06/03/2020', 
    'total guests': 35,
    'last year': 34,
  },
  {
    date: '06/04/2020', 
    'total guests': 35,
    'last year': 44,
  },
  {
    date: '06/05/2020', 
    'total guests': 20,
    'last year': 54,
  },
  {
    date: '06/06/2020', 
    'total guests': 40,
    'last year': 14,
  },
  {
    date: '06/07/2020', 
    'total guests': 48,
    'last year': 34,
  },
  
];

const barData = [
  {
    date: '05/31/2020', 
    participants: 35,
    capacity: 44,
  },
  {
    date: '06/01/2020', 
    participants: 35,
    capacity: 44,
  },
  {
    date: '06/02/2020', 
    participants: 35,
    capacity: 44,
  },
  {
    date: '06/03/2020', 
    participants: 35,
    capacity: 44,
  },
  {
    date: '06/04/2020', 
    participants: 35,
    capacity: 44,
  },
  {
    date: '06/05/2020', 
    participants: 35,
    capacity: 44,
  },
  {
    date: '06/06/2020', 
    participants: 35,
    capacity: 44,
  },
  {
    date: '06/07/2020', 
    participants: 35,
    capacity: 44,
  },
  
];

const pieData = [
  { name: 'Standard', value: 2450 },
  { name: 'Deluxe', value: 1980 },
  { name: 'Excelsior', value: 1000 },
]

const stats = {
  activeBookings: 15,
  activeGuests: 48,
  bookings: 480,
  net: 4800,
  eventRate: 75
}

export default function FAnalytics() {

    return <Layout open={"Analytics"}>
        <h1>Analytics Dashboard</h1>
        <Dashboard line={lineData} pie={pieData} bar={barData} stats={stats}/>
    </Layout>
}