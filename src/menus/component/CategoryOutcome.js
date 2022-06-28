import React, { useEffect, useState } from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";

const CategoryOutcome = () => {
  const [options, setOptions] = useState({
    title: {
      text: "2022년 06월",
      subtext: "",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "지출내역",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "외식" },
          { value: 735, name: "온라인 쇼핑" },
          { value: 580, name: "교통" },
          { value: 484, name: "공과금" },
          { value: 300, name: "문화" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });

  return <ECharts option={options} opts={{ renderer: "svg", width: "auto" }} />;
};

export default CategoryOutcome;
