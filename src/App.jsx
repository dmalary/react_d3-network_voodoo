// import { useState } from 'react'
import './App.css'

import NetworkChart from "../components/NetworkChart";

import data from '../data/data.json'

function App() {
  // console.log('data', data)
  const chartData = {
    nodes: [],
    links: []
  };

  chartData.nodes = data.map(el => ({
    id: el.name,
    nation: el.family_nation,
    patronage: el.patronage_power,
  }));

  data.forEach(el => {
    const relatedNames = el.relationships.split(',').map(name => name.trim()).filter(name => name);

    relatedNames.forEach(targetName => {
      const target = data.find(datum => datum.name === targetName);

      if (target) {
        chartData.links.push({
          source: el.name,
          target: target.name,
        })
      }
    })
  });
  console.log('chartData', chartData);

  return (
    <>
      <div>intro section</div>
      <NetworkChart width={850} height={600} data={data} />
      <div>summary section</div>
    </>
  )
}

export default App
