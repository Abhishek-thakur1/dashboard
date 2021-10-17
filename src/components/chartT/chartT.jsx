import * as Component from './chartT-style';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartT = ({ title, data, dataKey }) => {
    const tempData = [...dataKey];
    return (
        <div>
            <Component.Chart >
                <h3>{title}</h3>
            
                <ResponsiveContainer width="100%" aspect={4/1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke='#c9c9c9' strokeWidth='1' />
                        <YAxis  dataKey="name" stroke='#c9c9c9' strokeWidth='1' type="number" domain={[0, 60]} />
                        {/* <Legend /> */}
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Line type="monotone" dataKey={tempData[0]} stroke="#a2b89e"/>
                        <Line type="monotone" dataKey={tempData[1]} stroke="#004ad3"/>
                        <Line type="monotone" dataKey={tempData[2]} stroke="#00d358"/>
                        <Line type="monotone" dataKey={tempData[3]} stroke="#d37f00"/>
                        <Tooltip
                            wrapperStyle={{ backgroundColor: "red"}}
                            labelStyle={{ color: "#131313"}}
                            itemStyle={{ color: "#181717"}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Component.Chart>
        </div>
    )
}

export default ChartT;
