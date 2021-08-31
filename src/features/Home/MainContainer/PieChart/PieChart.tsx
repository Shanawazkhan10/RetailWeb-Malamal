import React from "react";
import Chart from "react-google-charts";

const PieChart = () => {
  return (
    <Chart
      width={"400px"}
      height={"200px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Symbol", "Holdings"],
        ["Reliance", 60000],
        ["ACC", 10000],
        ["AdaniPort", 50000],
        ["Zomato", 100000],
        ["HDFC", 50000],
      ]}
      options={{
        title: "",
        pieHole: 0.3,
        is3D: false,
        backgroundColor:"#1f1e2c",
        fill:"#fff",
        slices: {  2: {offset: -0.01},
                    4: {offset: 0.01},
                    5: {offset: 0.025},
          },
      }}
      rootProps={{ "data-testid": "1" }}
    />    
  );
};

export default PieChart;
