import * as Component from './chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ title, data, dataKey, domain }) => {


    const Domain = [...domain];

    return (
        <div>
            <Component.Chart >
                <h3>{title}</h3>
            
                <ResponsiveContainer width="100%" aspect={4/1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke='#c9c9c9' strokeWidth='1' />
                        <YAxis dataKey="name" stroke='#c9c9c9' strokeWidth='1' type="number" domain={[Domain[0], Domain[1]]} />
                        {/* <Legend /> */}
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Line type="monotone" dataKey={dataKey} stroke="#a2b89e"/>
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

export default Chart;
