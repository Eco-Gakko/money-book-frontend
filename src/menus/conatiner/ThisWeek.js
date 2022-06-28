import React, { useEffect, useState } from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";

const ThisWeek = () => {
  const options = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [18820, 9032, 75001, 0, 12090, 13030, 13200],
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <>
      <ECharts option={options} opts={{ renderer: "svg", width: "auto" }} />
    </>
  );
};

export default ThisWeek;
