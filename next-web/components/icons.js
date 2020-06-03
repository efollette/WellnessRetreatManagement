/**
 * Fiename: icons.js
 * Author: Erik Follette
 * Description: File containing customizable icons (size, color) 
 * Input to create an icon is: 
 * {
 *  'size': ex. '50' or 50.toString(), 
 *  'color': ex. '#FFFFFF' or 'white'
 * }
 * Date: May 3rd, 2020
 */
export function LodgingIcon(props) {
    var str = props['size'];
    var clr = props['color'];
    return ( 
        <svg width={str} height={str} viewBox="0 0 208 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M54 102.136C44.817 103.532 38.9919 105.44 38.9898 107.86C38.9798 119.292 38.9898 205 38.9898 205H48.9898V159.287H158.99V205H168.99C168.99 205 168.99 119.293 168.99 107.86C168.99 105.441 163.173 103.536 154 102.141M54 102.136V50.7132H154V102.141M54 102.136C57.7693 101.564 62.1043 101.077 66.8345 100.677M154 102.141C150.223 101.566 145.877 101.078 141.133 100.677M66.8345 100.677V67.8556H99V99.3768M66.8345 100.677C77.8057 99.7489 85.9031 99.3764 99 99.3768M99 99.3768C102.345 99.3769 105.69 99.3161 109 99.3768M141.133 100.677V67.8556H109V99.3768M141.133 100.677C132.973 99.9869 118.637 99.5535 109 99.3768M4 96.4264V39.2849L104 5L204 39.2849V96.4264" fill={clr} strokeWidth="8"/>
        </svg>
    );
}

export function LogoutIcon(props) {
    var str = props['size'];
    var clr = props['color'];
    return ( 
        <svg width={str} height={str} viewBox="0 0 208 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M119 56.6667H126C133.7 56.6667 140 62.6667 140 70V136.667C140 144 133.7 150 126 150H42C34.3 150 28 144 28 136.667V70C28 62.6667 34.3 56.6667 42 56.6667H49V43.3333C49 24.9333 64.68 10 84 10C103.32 10 119 24.9333 119 43.3333V56.6667ZM84 23.3333C72.38 23.3333 63 32.2667 63 43.3333V56.6667H105V43.3333C105 32.2667 95.62 23.3333 84 23.3333ZM42 136.667V70H126V136.667H42ZM98 103.333C98 110.667 91.7 116.667 84 116.667C76.3 116.667 70 110.667 70 103.333C70 96 76.3 90 84 90C91.7 90 98 96 98 103.333Z" fill={clr}/>
        </svg>
    );
}

export function GuestIcon(props) {
    var str = props['size'];
    var clr = props['color'];
    return ( 
        <svg width={str} height={str} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M74.9999 100C91.0833 100 104.167 86.9167 104.167 70.8334C104.167 54.75 91.0833 41.6667 74.9999 41.6667C58.9166 41.6667 45.8333 54.75 45.8333 70.8334C45.8333 86.9167 58.9166 100 74.9999 100ZM16.6666 143.75C16.6666 124.333 55.5 114.583 75 114.583C94.5 114.583 133.333 124.333 133.333 143.75V158.333H16.6666V143.75ZM74.9988 131.25C60.0821 131.25 43.1655 136.833 36.1655 141.667H113.832C106.832 136.833 89.9155 131.25 74.9988 131.25ZM87.5 70.8334C87.5 63.9167 81.9166 58.3334 75 58.3334C68.0833 58.3334 62.5 63.9167 62.5 70.8334C62.5 77.75 68.0833 83.3334 75 83.3334C81.9166 83.3334 87.5 77.75 87.5 70.8334ZM133.667 115.084C143.334 122.084 150 131.417 150 143.75V158.334H183.334V143.75C183.334 126.917 154.167 117.334 133.667 115.084ZM154.167 70.8334C154.167 86.9167 141.083 100 125 100C120.5 100 116.333 98.9167 112.5 97.0834C117.75 89.6667 120.833 80.5834 120.833 70.8334C120.833 61.0834 117.75 52 112.5 44.5834C116.333 42.75 120.5 41.6667 125 41.6667C141.083 41.6667 154.167 54.75 154.167 70.8334Z" fill={clr}/>
        </svg>
    );
}

export function InventoryIcon(props) {
    var str = props['size'];
    var clr = props['color'];
    return ( 
        <svg width={str} height={str} viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M138.542 21.875H108.062C105 13.4167 96.9792 7.29169 87.5 7.29169C78.0208 7.29169 70 13.4167 66.9375 21.875H36.4583C28.4375 21.875 21.875 28.4375 21.875 36.4583V153.125C21.875 161.146 28.4375 167.708 36.4583 167.708H138.542C146.562 167.708 153.125 161.146 153.125 153.125V36.4583C153.125 28.4375 146.562 21.875 138.542 21.875ZM87.5 21.875C91.5104 21.875 94.7917 25.1563 94.7917 29.1667C94.7917 33.1771 91.5104 36.4584 87.5 36.4584C83.4896 36.4584 80.2083 33.1771 80.2083 29.1667C80.2083 25.1563 83.4896 21.875 87.5 21.875ZM36.4583 153.125H138.542V36.4583H123.958V58.3333H51.0417V36.4583H36.4583V153.125Z" fill={clr}/>
        </svg>
    );
}

export function EventsIcon(props) {
    var str = props['size'];
    var clr = props['color'];
    return ( 
        <svg width={str} height={str} viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M106.25 23.0208C106.25 30.8125 99.8749 37.1875 92.0832 37.1875C84.2916 37.1875 77.9166 30.8125 77.9166 23.0208C77.9166 15.2292 84.2916 8.85416 92.0832 8.85416C99.8749 8.85416 106.25 15.2292 106.25 23.0208ZM46.0416 161.146L65.8749 61.271L53.1249 66.2293V90.3127H38.9583V57.021L74.7291 41.8627C81.5999 38.9585 89.5332 41.5085 93.4999 47.8127L100.583 59.146C106.25 69.0627 117.583 76.146 131.042 76.146V90.3127C115.458 90.3127 101.292 83.2293 92.0832 72.6043L87.8333 93.8543L102.708 108.021V161.146H88.5416V118.646L73.6666 104.479L60.9166 161.146H46.0416Z" fill={clr}/>
        </svg>
    );
}

export function FinancesIcon(props) {
    var str = props['size'];
    var clr = props['color'];
    return ( 
        <svg width={str} height={str} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M158.333 25H41.6667C32.5 25 25 32.5 25 41.6667V158.333C25 167.5 32.5 175 41.6667 175H158.333C167.5 175 175 167.5 175 158.333V41.6667C175 32.5 167.5 25 158.333 25ZM158.333 158.333H41.6667V41.6667H158.333V158.333ZM75 83.3333H58.3333V141.667H75V83.3333ZM91.6667 58.3333H108.333V141.667H91.6667V58.3333ZM141.667 108.333H125V141.667H141.667V108.333Z" fill={clr}/>
        </svg>
    );
}

const Icons = [
    LodgingIcon,
    GuestIcon,
    InventoryIcon,
    EventsIcon,
    FinancesIcon,
    LogoutIcon
]

export default Icons;