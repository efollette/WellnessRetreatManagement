/**
 * Filename: dashboard.js
 * Author: Erik Follette
 * Description: Analytics dashboard component
 * Date: May 31st, 2020
 */
import styles from './dashboard.module.css'
import { ResponsiveContainer, PieChart, Pie, Sector, BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import { Component } from 'react'

export default class Dashboard extends Component {
    /*
        3 rows finances, Events, Booking/Guest
        Finances: Revenue snapshot, pi chart by booking type, total bookings $
        Events: Participation / capacity, bar chart comparing both numbers
        Bookings/Guest: Total Active bookings, guests / last year guests
    */
    constructor(props) {
        super(props)
        this.line = props.line
        this.bar = props.bar
        this.pie = props.pie
        this.stats = props.stats
        this.renderActiveShape = this.renderActiveShape.bind(this)
        this.state = {
            activeIndex: 0,
        };
    }

    onPieEnter = (_, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
          cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
          fill, payload, percent, value,
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
      
        return (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`$ ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
              {`(${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
    };

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.bookings}>
                    <div className={styles.dTitle}>
                        Bookings and Guests
                    </div>
                    <div className={styles.graphSpace}>
                        <span>Event Participation vs. Capacity by Week</span>
                        <div className={styles.chart}>
                            <ResponsiveContainer>
                                <LineChart data={this.line} margin={{top: 15, right: 40, left: 0, bottom: 5,}}>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="date" padding={{left: 30, right: 30}}/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend />
                                    <Line type="monotone" dataKey="total guests" stroke="#8884d8" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="last year" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className={styles.metricBox}>
                        <div className={styles.metricTitle}>Total Active Bookings: </div>
                        <div className={styles.metric}>{this.stats.activeBookings}</div>
                        <div className={styles.metricTitle}>Total Active Guests: </div>
                        <div className={styles.metric}>{this.stats.activeGuests}</div>
                    </div>
                </div>
                <div className={styles.finances}>
                    <div className={styles.dTitle}>Finances</div>
                    <div className={styles.metricBox1}>
                        <div className={styles.metricTitle}>Weekly Bookings Revenue: </div>
                        <div className={styles.metric}>${this.stats.bookings}</div>
                        <div className={styles.metricTitle}>Net Revenue: </div>
                        <div className={styles.metric}>${this.stats.net}</div>
                    </div>
                    <div className={styles.pigraphSpace}>
                        <span>Revenue by Booking Type</span>
                        <div className={styles.pi}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        activeIndex={this.state.activeIndex}
                                        activeShape={this.renderActiveShape}
                                        data={this.pie}
                                        innerRadius={40}
                                        outerRadius={50}
                                        fill="#8884d8"
                                        dataKey="value"
                                        onMouseEnter={this.onPieEnter}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div className={styles.events}>
                    <div className={styles.dTitle}>Events</div>
                    <div className={styles.graphSpace}>
                        <span>Event Participation vs. Capacity by Week</span>
                        <div className={styles.chart}>
                            <ResponsiveContainer>
                                <BarChart data={this.bar} margin={{top: 15, right: 40, left: 0, bottom: 5,}}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="participants" fill="#8884d8" />
                                    <Bar dataKey="capacity" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className={styles.metricBox}>
                        <div className={styles.metricTitle}>Event Participation Rate: </div>
                        <div className={styles.metric}>{this.stats.eventRate}%</div>
                    </div>
                </div>
            </div>
    )}
}