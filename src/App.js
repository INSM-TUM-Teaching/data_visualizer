import './App.css';
import '../src/'

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

const dataset = [
  {
    scenario_A: 59,
    scenario_B: 59,
    scenario_C: 59,
    Activity: 'Conduct interview',
  },
  {
    scenario_A: 50,
    scenario_B: 52,
    scenario_C: 78,
    Activity: 'Request hiring of candidate (Dep)',
  },
  {
    scenario_A: 47,
    scenario_B: 53,
    scenario_C: 106,
    Activity: 'Check contents of hiring req. (WR)',
  },
  {
    scenario_A: 54,
    scenario_B: 56,
    scenario_C: 92,
    Activity: 'Form. assess adv. req. (HR)',
  },
  {
    scenario_A: 57,
    scenario_B: 69,
    scenario_C: 92,
    Activity: 'Form. assess adv. req. (Faculty)',
  },
  {
    scenario_A: 60,
    scenario_B: 63,
    scenario_C: 103,
    Activity: 'Check contents of hiring req. (DO)',
  },
  {
    scenario_A: 59,
    scenario_B: 60,
    scenario_C: 105,
    Activity: 'Submit job adv (HR)',
  },
  {
    scenario_A: 65,
    scenario_B: 60,
    scenario_C: 106,
    Activity: 'Check cont. o. adv. req. (WR)',
  },
  {
    scenario_A: 51,
    scenario_B: 51,
    scenario_C: 95,
    Activity: 'Sift and select candidates (Dep)',
  },
  {
    scenario_A: 60,
    scenario_B: 65,
    scenario_C: 97,
    
    Activity: 'Check cont. o. adv. req (DO)',
  },
  {
    scenario_A: 67,
    scenario_B: 64,
    scenario_C: 76,
    
    Activity: 'Submit req. for job adv. (DEP)',
  },
  {
    scenario_A: 61,
    scenario_B: 70,
    scenario_C: 103,
    
    Activity: 'Finalize contract (HR)',
  },

  {
    scenario_A: 61,
    scenario_B: 70,
    scenario_C: 103,
    
    Activity: 'Form. assess hiring req. (Faculty)',
  },

  {
    scenario_A: 61,
    scenario_B: 70,
    scenario_C: 103,
    
    Activity: 'Form. assess hiring req. (HR)',
  },
  {
    scenario_A: 60,
    scenario_B: 65,
    scenario_C: 97,
    
    Activity: 'Check contents of hiring req. (SC)',
  },
  {
    scenario_A: 60,
    scenario_B: 65,
    scenario_C: 97,
    
    Activity: 'Check cont. o. adv. req (SC)',
  },
];

const valueFormatter = (value) => `${value}`;

// function BarsDataset() {
//   return (
//     <BarChart
//       dataset={dataset}
//       series={[
//         { dataKey: 'scenario_A', label: 'Scenario A', valueFormatter },
//         { dataKey: 'scenario_B', label: 'Scenario B', valueFormatter },
//         { dataKey: 'scenario_C', label: 'Scenario C', valueFormatter },
//       ]}
//       layout="horizontal"
//       {...chartSetting}
//     />
//   );
// }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarChart
          dataset={dataset}
          series={[
            { dataKey: 'scenario_A', label: 'Scenario A', valueFormatter, color: '#B3B3FF' },
            { dataKey: 'scenario_B', label: 'Scenario B', valueFormatter, color: '#9BFFAB' },
            { dataKey: 'scenario_C', label: 'Scenario C', valueFormatter, color: '#FFAFB1' },
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
