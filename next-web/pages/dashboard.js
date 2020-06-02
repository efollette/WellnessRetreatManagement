/**
 * Filename: dashboard.js
 * Author: Erik Follette
 * Description: Dashboard upon entry to app.
 * Date: May 3rd, 2020
 */
import DashboardItem from '../components/item';
import Layout from '../components/layout';
import ItemLayout from '../components/itemLayout';
import Icons  from '../components/icons'

export default function Dashboard() {
  
  // Properties for Dashboard icons
  var iconProps = {
    'size': '50',
    'color': 'black'
  };

  // Array of Dashboard item props detailing each item
  var dashboardItems = [
    {
      'path': 'analytics/dashboard',
      'icon': Icons[4](iconProps),
      'title': 'Analytics',
      'subtitle': 'Finances, Participation, Trends'
    },
    {
      'path': 'events/schedule',
      'icon': Icons[3](iconProps),
      'title': 'Event Management',
      'subtitle': 'Event List, Schedule Events'
    },
    {
      'path': 'guests/current_guests',
      'icon': Icons[1](iconProps),
      'title': 'Guest Management',
      'subtitle': 'Current Guests List, Add Guests, Search'
    }, 
    {
      'path': 'inventory/list',
      'icon': Icons[2](iconProps),
      'title': 'Inventory',
      'subtitle': 'Manage Items, Item List'
    }, 
    {
      'path': 'lodging/rooms_list',
      'icon': Icons[0](iconProps),
      'title': 'Rooms and Lodging',
      'subtitle': 'Bookings, Rooms List'
    }, 
  ];
  
  return (
    <Layout home>
      <ItemLayout >
        {dashboardItems.map((item, key) => 
          <DashboardItem {...item} key={key}/>
        )}
      </ItemLayout>
    </Layout>
  );
}