import React, { useState } from 'react';
import * as Component from './main-style';
import { percentage1, percentage2, UserData1, UserData2, UserData3, UserData4, TableData, speed, kmToday, remainRange} from '../../data';
import CustomizedSwitches from '../../components/switch/switch';
import ProgressBar from '../../components/bar/Bar';
import CustomBar from '../../components/customBar/CustomBar';
import Chart from '../../components/chart/chart.jsx';
import ChartT from '../../components/chartT/chartT.jsx';

// import {  InfoOutlined } from '@mui/icons-material';

const Main = () => {

    const [ selectedOption, setSelectedOption ] = useState('Active');
    const handleChange = e => {
        console.log(e.target.value);
        const options = e.target.value;
        setSelectedOption(options);
    }

    const total = kmToday + remainRange;
    
    return (
        <Component.Wrapper>

            {/* top card containing username, batteryID, vehicleID... */}
            <Component.CardTop>
                <Component.Info>
                    <Component.UInfo>
                        <h3>Username: </h3>
                        <h2>Abhishek</h2>
                    </Component.UInfo>
                    <Component.BInfo>
                        <h3>Battery-ID: </h3>
                        <h2>B12C65</h2>
                    </Component.BInfo>
                    <Component.VInfo>
                        <h3>Vehicle-ID: </h3>
                        <h2>MH15343</h2>
                    </Component.VInfo>
                </Component.Info>
                <Component.InfoIcon />
            </Component.CardTop>

            {/* cards below the top card */}
            <Component.BelowContainer>

                {/* left side card containing 3 sub-cards... */}
                <Component.Left>
                    <Component.LeftUpper>
                        <Component.ToggleLeft>
                            <div className="leftSide1">
                                <p>Battery Control</p>
                                
                                <CustomizedSwitches/>
                            </div>
                            <div className="leftSide2">
                                <p>Activate Reserve</p>
                                <CustomizedSwitches />
                            </div>
                        </Component.ToggleLeft>

                        <Component.ToggleRight>
                            <div className="rightSide1">
                                <p>Disable Charging</p>
                                <CustomizedSwitches/>
                            </div>
                            <div className="rightSide2">
                                <p>Disable Discharging</p>
                                <CustomizedSwitches/>
                            </div>
                        </Component.ToggleRight>
                    </Component.LeftUpper>
                    {/* --------------------------- */}
                    <Component.LeftMiddle>
                        <Component.LeftMiddleUpper>
                            <Component.ProgressBar1>
                                <p>Battery SOC</p>
                                <ProgressBar progress={percentage1} size={100} strokeWidth={5} circleOneStroke='#eee' circleTwoStroke='#be0000' label="%"/>
                            </Component.ProgressBar1>

                            <Component.ProgressBar2>
                                
                                <p>Battery SOH</p>
                                <ProgressBar progress={percentage2} size={100} strokeWidth={5} circleOneStroke='#eee' circleTwoStroke='#00be55' label="%"/>
                            </Component.ProgressBar2>

                            <Component.Table>
                                <table>
                                    <tr>
                                        <th colSpan="4">Temperature(in C)</th>
                                    </tr>
                                    <tr>
                                        <td>T1</td>
                                        <td>T2</td>
                                        <td>T3</td>
                                        <td>T4</td>
                                    </tr>
                                    <tr>
                                        <td>35</td>
                                        <td>26</td>
                                        <td>28</td>
                                        <td>32</td>
                                    </tr>
                                </table>
                            </Component.Table>
                        </Component.LeftMiddleUpper>
                        <Component.LeftMiddleLower>
                            <Component.BatteryV>
                                <p>Battery Voltage: &nbsp; </p>
                                <p> 48V</p>
                            </Component.BatteryV>
                            <Component.BatteryD>
                                <p>Battery Degradation: &nbsp; </p>
                                <h2>20%</h2>
                            </Component.BatteryD>
                        </Component.LeftMiddleLower>
                    </Component.LeftMiddle>
                    {/* -------------------------- */}
                    <Component.LeftLower>
                        <Component.LeftLower1>
                            <p>Vehicle speed </p>
                            <ProgressBar progress={speed} size={100} strokeWidth={5} circleOneStroke='#eee' circleTwoStroke='#00be55' label="KM"/>
                        </Component.LeftLower1>
                        <Component.LeftLower2>
                            <p>KM today</p>
                            <CustomBar progress={kmToday} size={100} strokeWidth={5} circleOneStroke='#eee' circleTwoStroke='#00be55' total={ total}/>
                        </Component.LeftLower2>
                        <Component.LeftLower3>
                            <p>Remaining range</p>
                            <CustomBar progress={remainRange} size={100} strokeWidth={5} circleOneStroke='#eee' circleTwoStroke='#001cbe' total={ total}/>
                        </Component.LeftLower3>
                    </Component.LeftLower>
                    
                </Component.Left>

                {/* right side card containing 2 sub-cards... */}
                <Component.Right>
                    <Component.RightUpper>
                        {
                            (selectedOption == "Active") ? <Component.ActiveBattery />
                                : (selectedOption == "Discontinued") ? <Component.DiscontinuedBattery /> : <Component.MaintenanceBattery />
                        }
                        <div className="selectMenu">
                            <p>Battery Status</p>
                            <select onChange={handleChange}>
                                <option value="Active">Active</option>
                                <option value="Discontinued">Discontinued</option>
                                <option value="Maintenance">Under Maintenance</option>
                            </select>
                        </div>
                        
                    </Component.RightUpper>
                    <Component.RightLower>
                        <h2>Notifications/Tickets</h2>
                    </Component.RightLower>
                </Component.Right>

            </Component.BelowContainer>

            {/* Part 2 -> contents... */}

            <Component.ThirdPart>
                <Component.ThirdUpper>
                    <table>
                        <tr>
                            <th colSpan="6">Operation Events</th>
                        </tr>
                        <tr>
                            <th>Start time</th>
                            <th>End time</th>
                            <th>Starting SOC</th>
                            <th>End SOC</th>
                            <th>Energy In/Out</th>
                            <th>KMs Run</th>
                        </tr>
                        
                            {
                                TableData.map(( data, index) => (
                                    <tr style={{ color: (data.ssoc > data.esoc) ? '#be0000' : '#00be55' }}>
                                        <td key={index}>{ data.stime}</td>
                                        <td key={index}>{ data.etime}</td>
                                        <td key={index}>{ data.ssoc}</td>
                                        <td key={index}>{ data.esoc}</td>
                                        <td key={index}>{ data.energy}</td>
                                        <td key={index}>{ data.km}</td>
                                    </tr>
                                ))
                            }
                        
                    </table>
                </Component.ThirdUpper>
                <Component.ThirdLower>
                    <Component.ThirdLowerLeft>
                        <Component.Map>
                            <p>Here goes the google map...As map integration requires API Key so its better to use your own key, if you'll face any difficulty in integrating it then feel free to contact me...</p>
                        </Component.Map>
                    </Component.ThirdLowerLeft>

                    <Component.ThirdLowerRight>
                        <Component.ThirdLowerRight1>
                            <p>Total KM upto now - &nbsp;</p>
                            <h4>564</h4>
                        </Component.ThirdLowerRight1>
                        <Component.ThirdLowerRight2>
                            <p>Total KMs in last 7 days - &nbsp;</p>
                            <h4>122</h4>
                        </Component.ThirdLowerRight2>
                    </Component.ThirdLowerRight>
                </Component.ThirdLower>
            </Component.ThirdPart>

            <Component.Graph>
                <Chart data={UserData1} title="Voltage vs time " dataKey="Voltage" domain={[0, 55] }/>
                <Chart data={UserData2} title="Vehicle Speed vs time" dataKey="speed" domain={[0, 50] }/>
                <Chart data={UserData3} title="Current vs time" dataKey="current" domain={[0, 100] }/>
                <ChartT data={UserData4} title="Temperature  vs time" dataKey={["T1", "T2", "T3", "T4"]} />
                
            </Component.Graph>
            
        </Component.Wrapper>
    )
}

export default Main;
