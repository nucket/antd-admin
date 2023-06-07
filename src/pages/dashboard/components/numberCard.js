import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { Card } from 'antd'
// import CountUp from 'react-countup'
// import iconMap from 'utils/iconMap'
import styles from './numberCard.less'
import { Chart } from "react-google-charts";

// import Thermometer from '../../../../Thermometer'



function getRandomNumber() {
  return Math.random() * 100;
}

export function getData() {
  return [
      ["Label", "Value"],
      ["Temperature", getRandomNumber()],
      // ["CO2", getRandomNumber()],
      // ["Humedity", getRandomNumber()],
      // ["NH3", getRandomNumber()],
  ];
}

export const options = {
  width: 200,
  height: 200,
  greenColor: '#39ff14',
  greenFrom:5,
  greenTo: 35,
  yellowColor: '#ffbf00',
  yellowFrom: 35,
  yellowTo: 45,
  redColor: '#ff4500',
  redFrom: 45,
  redTo: 50,
  minorTicks: 4,
  max: 50,
  min: 0,
  animation: 'in',
  forceIFrame: false,
};



function NumberCard() {

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
    <Card
      className={styles.numberCard}
      bordered={true}
      bodyStyle={{ padding: 0 }}
    >
      {/* <Chart
        chartType="ScatterChart"
        data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
        width="100%"
        height="400px"
        legendToggle
      /> */}
      <Chart
        chartType="Gauge"
        width="100%"
        height="220px"
        data={data}
        options={options}
      />
      {/* <Thermometer
        value={50}
        max={100}
        steps={5}
        format='°C'
        size='normal'
        height={200}
      /> */}
    </Card>
  )
}

NumberCard.propTypes = {}

export default NumberCard
