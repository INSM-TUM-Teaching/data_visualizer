import './App.css';
import '../src/'
import {dataset} from './resources/dataset.js';


import * as React from 'react';
import { BarChart} from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';



const chartSetting = {
  yAxis: [
    { scaleType: 'band', dataKey: 'Activity', label: "Activity", barGapRatio: 0.3, categoryGapRatio: 0.4 }
  ],
  xAxis: [
    {
      label: 'Average Environmental Activity Cost .10^-5' ,
    },
  ],
  width: 400,
  height: 800,
  //Controls alignment of X axis label.
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-200px, 0)',
    },
  },
};

const valueFormatter = (value) => `${value}`;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarChart
          dataset={dataset}
          series={[
            { dataKey: 'scenario_A', label: 'Scenario A', color: '#B3B3FF' },
            { dataKey: 'scenario_B', label: 'Scenario B', color: '#9BFFAB' },
            { dataKey: 'scenario_C', label: 'Scenario C', color: '#FFAFB1' },
          ]}
          layout="horizontal"
          {...chartSetting}
        >
        </BarChart>
      </header>
    </div>
  );
}

export default App;
