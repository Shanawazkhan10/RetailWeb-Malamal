import React from "react";
import Chart from "react-google-charts";
import { IHolding } from "../../../../types/Holding/IHolding";

const PieChart = (props: { holding: IHolding }) => {
  const { holding } = props;
  let sym1 = holding?.nseTrdSym;

  return (
    <Chart
      width={"100%"}
      height={"100%"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Symbol", "Holdings"],
        ["Reliance", 600000],
        ["ACC", 10000],
        ["AdaniPort", 50000],
        ["Zomato", 100000],
        ["HDFC", 50000],
      ]}
      options={{
        title: "",
        pieHole: 0.6,
        is3D: false,
        backgroundColor: "#ffffff00",
        fill: "#fff",
        showScale: false,
        // slices: {   2: {offset:-0.0125},
        //             4: {offset: -0.025},
        //             5: {offset: 0},
        //   },
        pieSliceBorderColor: "transparent",
        pieSliceText: "none",
        legend: { position: "none" },
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default PieChart;
