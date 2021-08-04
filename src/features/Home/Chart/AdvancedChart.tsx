import React from 'react'
import { useEffect } from "react";
// import 'chartiq/css/normalize.css';
// import 'chartiq/css/page-defaults.css';
// If for some reason you are not including base-styles.css add these here.
import 'chartiq/css/stx-chart.css'; // Chart API
import 'chartiq/css/chartiq.css'; // Chart UI
import defaultConfig from 'chartiq/js/defaultConfiguration';
import quoteFeed from "chartiq/examples/feeds/quoteFeedSimulator.js";
// Uncomment the following for the forecasting simulator (required for the forecasting sample).
// import forecastQuoteFeed from "chartiq/examples/feeds/quoteFeedForecastSimulator.js";
import PerfectScrollbar from "chartiq/js/thirdparty/perfect-scrollbar.esm.js";
import marker from 'chartiq/examples/markers/markersSample.js';

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setStxState, setUIContext } from './chartSlice';
import ChartTemplate from "./Template";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'cq-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

function getConfig() {
	return defaultConfig({
		quoteFeed,
		// forecastQuoteFeed, // uncomment to enable forecast quote feed simulator
		markerSample: marker.MarkersSample,
		scrollStyle: PerfectScrollbar,
	});
}

const AdvancedChart = () => {
    const stateChart = useAppSelector((state) => state.chart);
    const dispatch= useAppDispatch();   
    let container = React.useRef<HTMLDivElement>() as  React.RefObject<HTMLDivElement>;
    useEffect(() => {
        container = container.current as unknown as React.RefObject<HTMLDivElement>
        const config = getConfig();
        const uiContext = stateChart.chart.createChartAndUI({ container, config });
        const chartEngine = uiContext.stx;
		dispatch(setStxState(chartEngine));			           
        dispatch(setUIContext(uiContext));			           
    },[]);
    return (
        <cq-context ref={container}>
             <ChartTemplate/>
        </cq-context>
    )
}

export default AdvancedChart;
