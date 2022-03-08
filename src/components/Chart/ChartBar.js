import React from "react";

import './ChartBar.css'

const ChartBar = props => {
  let barFillHeight = props.maxValue > 0
    ? Math.round((props.value / props.maxValue) * 100) + '%'
    : '0%';

  console.log(barFillHeight)

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">
        {props.label}
      </div>
    </div>
  )
}

export default ChartBar