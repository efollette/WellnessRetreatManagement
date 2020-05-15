/**
 * Fiename: _app.js
 * Author: Erik Follette
 * Description: This file serves to apply global styles to the rest of the app.
 * This is described in: https://nextjs.org/learn/basics/assets-metadata-css/global-styles
 * Date: May 3rd, 2020
 */
import '../styles/global.css'
import "tabulator-tables/dist/css/tabulator_midnight.min.css";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}