/**
 * Filename: [activity].js
 * Author: Erik Follette
 * Description: Generic page for any activity
 * Date: May 3rd, 2020
 */
import Layout from '../components/layout'
import Table from '../components/table'

export default function Activity() {
  const colorOptions = {
    red: "red",
    green: "green",
    yellow: "yellow"
  };
  const columns = [
      { // Hidden Collapse
          formatter:"responsiveCollapse", 
          width:30, 
          minWidth:30, 
          hozAlign:"center", 
          resizable:false, 
          headerSort:false
      },
      { // Name
          title: "Name",
          field: "name",
          width: 150,
          editor: "input",
          headerFilter: "input"
      },
      { // Age
          title: "Age",
          field: "age",
          hozAlign: "left",
          editor: "input"
      },
      { // Favorite Color
          title: "Favourite Color",
          field: "col",
          editor: "autocomplete",
          editorParams: {
              allowEmpty: true,
              showListOnEmpty: true,
              values: colorOptions
          },
          headerFilter: "select",
          headerFilterParams: { values: colorOptions }
      },
      { // DOB
          title: "Date Of Birth", 
          field: "dob", 
          hozAlign: "center", 
          editor: "input" 
      },
      { // Delete Row
          title: 'Delete',
          formatter: 'buttonCross',
          hozAlign: 'center',
          cellClick: function(e, cell) {
              cell.getRow().delete();
          }
      },
  ];

  return <Layout>
      <h1>404: The Page You Are Looking For Is Not Here</h1>
  </Layout>
}