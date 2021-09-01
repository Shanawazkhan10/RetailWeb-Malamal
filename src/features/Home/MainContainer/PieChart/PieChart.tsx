import React from "react";
import Chart from "react-google-charts";

const PieChart = () => {
  return (
    <Chart
      width={"600px"}
      height={"350px"}
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
        pieHole: 0.60,
        is3D: false,
        backgroundColor:"#1f1e2c",
        fill:"#fff",  
        showScale:false,      
        // slices: {   2: {offset:-0.0125},
        //             4: {offset: -0.025},
        //             5: {offset: 0},
        //   },
        pieSliceBorderColor : "transparent", 
        pieSliceText: "none",
        legend: {position: 'none'} 
      }}
      rootProps={{ "data-testid": "1" }}
      
    />    
  );
};

export default PieChart;
