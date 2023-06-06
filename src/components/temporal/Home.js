import React, { useState, useEffect } from "react"; //##  ##// with chart


// import Thermometer from '../Components/Thermometer'
// import { Chart } from "react-google-charts";
// import { render } from 'react-dom'
// import GaugeComponent from 'react-gauge-component'



function getRandomNumber() {
    return Math.random() * 100;
}

export function getData() {
    return [
        ["Label", "Value"],
        ["Temperature", getRandomNumber()],
        ["CO2", getRandomNumber()],
        ["Humedity", getRandomNumber()],
        ["NH3", getRandomNumber()],
    ];
}

export const options = {
    width: 800,
    height: 220,
    greenColor: '#39ff14',
    greenFrom:25,
    greenTo: 75,
    redColor: '#ff4500',
    redFrom: 90,
    redTo: 100,
    yellowColor: '#ffbf00',
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5,
    max: 130,
    min: -10,
    animation: 'in',
    forceIFrame: false,
};

export function Home() {
    const [data, setData] = useState(getData);

    useEffect(() => {
        const id = setInterval(() => {
            setData(getData());
        }, 3000);

        return () => {
            clearInterval(id);
        };
    });

    return (
        <>

            <div className="grid">
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Orders</span>
                                <div className="text-900 font-medium text-xl">152</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">24 new </span>
                        <span className="text-500">since last visit</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Revenue</span>
                                <div className="text-900 font-medium text-xl">$2.100</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">%52+ </span>
                        <span className="text-500">since last week</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Customers</span>
                                <div className="text-900 font-medium text-xl">28441</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">520  </span>
                        <span className="text-500">newly registered</span>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Comments</span>
                                <div className="text-900 font-medium text-xl">152 Unread</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-comment text-purple-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">85 </span>
                        <span className="text-500">responded</span>
                    </div>
                </div>
            </div>


        </>
    );
}

// const home =  () => {
//     return (
//         <div>
//         </div>
//     )
// }



/* <Chart
    chartType="Gauge"
    width="100%"
    height="400px"
    data={data}
    options={options}
/>
<GaugeComponent
    type="semicircle"
    arc={{
        width: 0.25,
        padding: 0.005,
        cornerRadius: 10,
        // gradient: true,
        subArcs: [
        {
            limit: 5,
            color: '#EA4228',
            showMark: true,
            tooltip: {
            text: 'Too low temperature!'
            },
            onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
            onMouseMove: () => console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
            onMouseLeave: () => console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
        },
        {
            limit: 15,
            color: '#F5CD19',
            showMark: true,
            tooltip: {
            text: 'Low temperature!'
            }
        },
        {
            limit: 35,
            color: '#5BE12C',
            showMark: true,
            tooltip: {
            text: 'OK temperature!'
            }
        },
        {
            limit: 45, color: '#F5CD19', showMark: true,
            tooltip: {
            text: 'High temperature!'
            }
        },
        {
            color: '#EA4228',
            tooltip: {
            text: 'Too high temperature!'
            }
        }
        ]
    }}
    pointer={{
        color: '#345243',
        length: 0.80,
        width: 15,
        elastic: true,
    }}
    labels={{
        valueLabel: { formatTextValue: value => value + 'ºC' },
        markLabel: {
        type: 'outer',
        valueConfig: { formatTextValue: value => value + 'ºC', fontSize: 10 },
        marks: [
            { value: 10 },
            { value: 45 },
            { value: 32 }
        ],
        }
    }}
    value={getRandomNumber()}
    minValue={0}
    maxValue={50}
/>

<Thermometer
    value={50}
    max={100}
    steps={5}
    format='°C'
    size='normal'
    height={200}
/> */


export default Home