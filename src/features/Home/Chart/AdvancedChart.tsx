// import React from 'react'
// import { useEffect, useRef } from "react";
// import 'chartiq/js/advanced';

// import 'chartiq/js/advanced';

// import 'chartiq/js/addOns';
// // Symbol mapping to market definition
// import 'chartiq/examples/markets/marketDefinitionsSample';
// import 'chartiq/examples/markets/marketSymbologySample';

// import 'chartiq/examples/feeds/symbolLookupChartIQ';

// import 'chartiq/examples/translations/translationSample';

// import 'chartiq/js/componentUI';
// import 'chartiq/js/components';

// // Event Markers
// import marker from 'chartiq/examples/markers/markersSample.js';
// import 'chartiq/examples/markers/tradeAnalyticsSample';
// import 'chartiq/examples/markers/videoSample';

// import defaultConfig from 'chartiq/js/defaultConfiguration';
// import quoteFeed from "chartiq/examples/feeds/quoteFeedSimulator.js";
// // Uncomment the following for the forecasting simulator (required for the forecasting sample).
// // import forecastQuoteFeed from "chartiq/examples/feeds/quoteFeedForecastSimulator.js";
// import PerfectScrollbar from "chartiq/js/thirdparty/perfect-scrollbar.esm.js";

// import { useAppSelector, useAppDispatch } from "../../../app/hooks";
// import { setStxState, setUIContext } from './chartSlice';
// import ChartTemplate from "./Template";
// import "./resources";

// function portalizeContextDialogs(container:any) {
// 	container.querySelectorAll("cq-dialog").forEach((dialog:any) => {
// 		dialog.remove();
// 		if (!dialogPortalized(dialog)) {
// 			document.body.appendChild(dialog);
// 		}
// 	});
// }

// function dialogPortalized(el:any) {
// 	const tag = el.firstChild.nodeName.toLowerCase();
// 	let result = Array.from(document.querySelectorAll(tag)).some(
// 		(el) => !el.closest("cq-context")
// 	);
// 	return result;
// }

// function getCustomConfig( chartId?:any, symbol?:any, onChartReady?:any) {
// 	const config = getConfig();

// 	// Update chart configuration by modifying default configuration
// 	config.chartId = chartId || "_advanced-chart";
// 	config.initialSymbol = symbol || {
// 		symbol: "AAPL",
// 		name: "Apple Inc",
// 		exchDisp: "NASDAQ"
// 	};

// 	// config.quoteFeeds[0].behavior.refreshInterval = 0; // disables quotefeed refresh
// 	config.onChartReady = onChartReady;

// 	const {
// 		marketDepth,
// 		termStructure,
// 		tfc,
// 		timeSpanEventPanel,
// 		visualEarnings
// 	} = config.plugins;
// 	// Select only plugin configurations that needs to be active for this chart
// 	config.plugins = {
// 		// marketDepth,
// 		// termStructure,
// 		// tfc,
// 		// timeSpanEventPanel,
// 		// visualEarnings
// 	};
// 	// Enable / disable addOns
// 	// config.enabledAddOns.tooltip = false;
// 	// config.enabledAddOns.continuousZoom = true;
// 	return config;
// }

// function getConfig() {
// 	return defaultConfig({
// 		quoteFeed,
// 		// forecastQuoteFeed, // uncomment to enable forecast quote feed simulator
// 		markerSample: marker.MarkersSample,
// 		scrollStyle: PerfectScrollbar,
// 	});
// }

// const AdvancedChart = () => {
//     const stateChart = useAppSelector((state) => state.chart);
//     const dispatch= useAppDispatch();   
//     //let container = React.useRef<HTMLDivElement>() as  React.RefObject<HTMLDivElement>;
//     let container = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
//     useEffect(() => {
//         container = container.current as unknown as React.RefObject<HTMLDivElement>
// 		portalizeContextDialogs(container);
//         const config = getCustomConfig();
//         const uiContext = stateChart.chart.createChartAndUI({ container, config });
//         const chartEngine = uiContext.stx;
// 		dispatch(setStxState(chartEngine));			           
//         dispatch(setUIContext(uiContext));			           
//     },[]);
//     return (
//         <cq-context ref={container}>
//               <ChartTemplate/>
//         </cq-context>
//     )
// }

// export default AdvancedChart;

export{}
