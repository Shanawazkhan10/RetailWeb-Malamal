import React from "react";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'cq-toggle': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-tooltip': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-lookup': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-side-nav': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-info-toggle-dropdown': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-menu-dropdown': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-clickable': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-menu-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-views': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-menu-dropdown-section': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-heading': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-study-legend': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-section-dynamic': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-study-legend-content': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-label': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-placeholder': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-scriptiq-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-separator': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-studies': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-themes': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-flag': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-language-name': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-scriptiq': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-analystviews': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-technicalinsights': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-message-toaster': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-palette-dock': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-drawing-palette': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-drawing-settings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'stx-hu-tooltip': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'stx-hu-tooltip-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'stx-hu-tooltip-field-name': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'stx-hu-tooltip-field-value': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-chart-title': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-chartcontrol-group': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-comparison-lookup': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-chart-legend': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-loader': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-abstract-marker': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-attribution': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-share-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-show-range': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-dialog': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-drawing-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-study-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
			'cq-side-panel': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export default function () {
	return (
		<>
			<div className="ciq-nav full-screen-hide">
				<div className="sidenav-toggle ciq-toggles">
					<cq-toggle
						className="ciq-sidenav"
						cq-member="sidenav"
						cq-toggles="sidenavOn,sidenavOff"
						cq-toggle-classes="active,"
						keyboard-navigation="false"
					>
						<span></span>
						<cq-tooltip>More</cq-tooltip>
					</cq-toggle>
				</div>

				<cq-menu className="ciq-search">
					<cq-lookup
						cq-keystroke-claim
						cq-uppercase
					></cq-lookup>
				</cq-menu>

				<cq-side-nav cq-on="sidenavOn">
					<div className="icon-toggles ciq-toggles">
						<cq-toggle className="ciq-draw" cq-member="drawing">
							<span></span>
							<cq-tooltip>Draw</cq-tooltip>
						</cq-toggle>
						<cq-info-toggle-dropdown>
							<cq-toggle className="ciq-CH" cq-member="crosshair">
								<span></span>
								<cq-tooltip>Crosshair (Alt + \)</cq-tooltip>
							</cq-toggle>

							<cq-menu className="ciq-menu toggle-options collapse">
								<span></span>
								<cq-menu-dropdown>
									<cq-item cq-member="crosshair">
										Hide Heads-Up Display
										<span className="ciq-radio">
											<span></span>
										</span>
									</cq-item>
									<cq-item cq-member="headsUp-static">
										Show Heads-Up Display
										<span className="ciq-radio">
											<span></span>
										</span>
									</cq-item>
								</cq-menu-dropdown>
							</cq-menu>
						</cq-info-toggle-dropdown>

						<cq-info-toggle-dropdown>
							<cq-toggle className="ciq-HU" cq-member="headsUp">
								<span></span>
								<cq-tooltip>Info</cq-tooltip>
							</cq-toggle>

							<cq-menu className="ciq-menu toggle-options collapse tooltip-ui">
								<span></span>
								<cq-menu-dropdown>
									<cq-item cq-member="headsUp-dynamic">
										Show Dynamic Callout
										<span className="ciq-radio">
											<span></span>
										</span>
									</cq-item>
									<cq-item cq-member="headsUp-floating">
										Show Tooltip
										<span className="ciq-radio">
											<span></span>
										</span>
									</cq-item>
								</cq-menu-dropdown>
							</cq-menu>
						</cq-info-toggle-dropdown>

						<cq-toggle className="ciq-DT tableview-ui" cq-member="tableView">
							<span></span>
							<cq-tooltip>Table View</cq-tooltip>
						</cq-toggle>
					</div>
				</cq-side-nav>

				<div className="ciq-menu-section">
					<div className="ciq-dropdowns">
						<cq-menu className="ciq-menu ciq-period">
							<span>
								<cq-clickable data-stxbind="Layout.periodicity">1D</cq-clickable>
							</span>
							<cq-menu-dropdown>
								<cq-menu-container cq-name="menuPeriodicity"></cq-menu-container>
							</cq-menu-dropdown>
						</cq-menu>

						<cq-menu className="ciq-menu ciq-views collapse">
							<span>Views</span>
							<cq-menu-dropdown>
								<cq-views></cq-views>
							</cq-menu-dropdown>
						</cq-menu>

						<cq-menu className="ciq-menu ciq-display collapse">
							<span>Display</span>
							<cq-menu-dropdown>
								<cq-menu-dropdown-section className="chart-types">
									<cq-heading>Chart Style</cq-heading>
									<cq-menu-container cq-name="menuChartStyle"></cq-menu-container>
								</cq-menu-dropdown-section>
								<cq-menu-dropdown-section className="chart-aggregations">
									<cq-menu-container cq-name="menuChartAggregates"></cq-menu-container>
								</cq-menu-dropdown-section>
							</cq-menu-dropdown>
						</cq-menu>

						<cq-menu className="ciq-menu ciq-studies collapse" cq-focus="input">
							<span>Studies</span>
							<cq-menu-dropdown>
								<cq-study-legend cq-no-close>
									<cq-section-dynamic>
										<cq-heading>Current Studies</cq-heading>
										<cq-study-legend-content>
											<template cq-study-legend="true">
												<cq-item>
													<cq-label className="click-to-edit"></cq-label>
													<div className="ciq-icon ciq-close"></div>
												</cq-item>
											</template>
										</cq-study-legend-content>
										<cq-placeholder>
											<div
												data-stxtap="Layout.clearStudies()"
												className="ciq-btn sm"
												keyboard-selectable="true"
											>
												Clear All
											</div>
										</cq-placeholder>
									</cq-section-dynamic>
								</cq-study-legend>
								<div className="scriptiq-ui">
									<cq-heading>ScriptIQ</cq-heading>
									<cq-item>
										<cq-clickable
											cq-selector="cq-scriptiq-editor"
											cq-method="open"
										>
											New Script
										</cq-clickable>
									</cq-item>
									<cq-scriptiq-menu></cq-scriptiq-menu>
									<cq-separator></cq-separator>
								</div>
								<cq-heading cq-filter="" cq-filter-min="-1">
									Studies
								</cq-heading>
								<cq-studies></cq-studies>
							</cq-menu-dropdown>
						</cq-menu>

						<cq-menu className="ciq-menu stx-markers collapse">
							<span>Events</span>
							<cq-menu-dropdown>
								<cq-heading>Chart Events</cq-heading>
								<cq-item data-stxtap="Markers.showMarkers('square')">
									Simple Square
									<span className="ciq-radio">
										<span></span>
									</span>
								</cq-item>
								<cq-item data-stxtap="Markers.showMarkers('circle')">
									Simple Circle
									<span className="ciq-radio">
										<span></span>
									</span>
								</cq-item>
								<cq-item data-stxtap="Markers.showMarkers('callout')">
									Callouts
									<span className="ciq-radio">
										<span></span>
									</span>
								</cq-item>
								<cq-item
									className="ta_markers-ui"
									data-stxtap="Markers.showMarkers('trade')"
								>
									Trade
									<span className="ciq-radio">
										<span></span>
									</span>
								</cq-item>
								<cq-item
									className="video_markers-ui"
									data-stxtap="Markers.showMarkers('video')"
								>
									Video
									<span className="ciq-radio">
										<span></span>
									</span>
								</cq-item>
								<cq-item data-stxtap="Markers.showMarkers('abstract')">
									Abstract
									<span className="ciq-radio">
										<span></span>
									</span>
								</cq-item>
								<cq-separator></cq-separator>
								<cq-item data-stxtap="Markers.showMarkers()" className="ciq-active">
									None
									<span className="ciq-radio">
										<span></span>
									</span>
								</cq-item>
								<div className="timespanevent-ui">
									<cq-separator></cq-separator>
									<cq-heading>Panel Events</cq-heading>
									<cq-item
										className="span-event"
										data-stxtap="TimeSpanEvent.showMarkers('Order')"
										cq-no-close
									>
										Order
										<span className="ciq-checkbox ciq-active">
											<span></span>
										</span>
									</cq-item>
									<cq-item
										className="span-event"
										data-stxtap="TimeSpanEvent.showMarkers('CEO')"
										cq-no-close
									>
										CEO
										<span className="ciq-checkbox ciq-active">
											<span></span>
										</span>
									</cq-item>
									<cq-item
										className="span-event"
										data-stxtap="TimeSpanEvent.showMarkers('News')"
										cq-no-close
									>
										News
										<span className="ciq-checkbox ciq-active">
											<span></span>
										</span>
									</cq-item>
								</div>
							</cq-menu-dropdown>
						</cq-menu>

						<cq-menu className="ciq-menu ciq-preferences collapse">
							<span></span>
							<cq-menu-dropdown>
								<cq-menu-dropdown-section className="chart-preferences">
									<cq-heading>Chart Preferences</cq-heading>
									<cq-menu-container cq-name="menuChartPreferences"></cq-menu-container>
									<cq-separator></cq-separator>
								</cq-menu-dropdown-section>
								<cq-menu-dropdown-section className="y-axis-preferences">
									<cq-heading>Y-Axis Preferences</cq-heading>
									<cq-menu-container cq-name="menuYAxisPreferences"></cq-menu-container>
									<cq-separator></cq-separator>
								</cq-menu-dropdown-section>
								<cq-menu-dropdown-section className="chart-theme">
									<cq-heading>Themes</cq-heading>
									<cq-themes></cq-themes>
									<cq-separator></cq-separator>
								</cq-menu-dropdown-section>
								<cq-menu-dropdown-section className="chart-locale">
									<cq-heading>Locale</cq-heading>
									<cq-item>
										<cq-clickable
											cq-selector="cq-timezone-dialog"
											cq-method="open"
										>
											Change Timezone
										</cq-clickable>
									</cq-item>
									<cq-item data-stxsetget="Layout.Language()">
										<cq-flag></cq-flag>
										<cq-language-name>Change Language</cq-language-name>
									</cq-item>
								</cq-menu-dropdown-section>
								<cq-menu-dropdown-section className="shortcuts-ui">
									<cq-separator></cq-separator>
									<cq-heading>Shortcuts</cq-heading>
									<cq-item data-stxtap="Layout.showShortcuts(true)">
										Shortcuts / Hotkeys
									</cq-item>
								</cq-menu-dropdown-section>
							</cq-menu-dropdown>
						</cq-menu>
					</div>

					<div className="trade-toggles ciq-toggles">
						<cq-toggle className="tfc-ui sidebar stx-trade" cq-member="tfc">
							<span></span>
							<cq-tooltip>Trade</cq-tooltip>
						</cq-toggle>
						<cq-toggle
							className="analystviews-ui stx-analystviews"
							cq-member="analystviews"
						>
							<span></span>
							<cq-tooltip>Analyst Views</cq-tooltip>
						</cq-toggle>
						<cq-toggle
							className="technicalinsights-ui stx-technicalinsights"
							cq-member="technicalinsights"
						>
							<span></span>
							<cq-tooltip>Technical Insights</cq-tooltip>
						</cq-toggle>
					</div>
				</div>
			</div>

			<cq-scriptiq className="scriptiq-ui"></cq-scriptiq>

			<cq-analystviews
				className="analystviews-ui"
				data-token="eZOrIVNU3KR1f0cf6PTUYg=="
				data-partner="1000"
				data-disabled
			></cq-analystviews>

			<cq-technicalinsights data-uid="" lang="en" data-disabled></cq-technicalinsights>

			<div className="ciq-chart-area">
				<div className="ciq-chart">
					<cq-message-toaster
						data-defaultDisplayTime="10"
						data-defaultTransition="slide"
						data-defaultPosition="top"
					></cq-message-toaster>

					<cq-palette-dock>
						<div className="palette-dock-container">
							<cq-drawing-palette
								className="palette-drawing grid palette-hide"
								data-docked="true"
								data-orientation="vertical"
								min-height="300"
								cq-drawing-edit="none"
							></cq-drawing-palette>
							<cq-drawing-settings
								className="palette-settings"
								data-docked="true"
								data-hide="true"
								data-orientation="horizontal"
								min-height="40"
								cq-drawing-edit="none"
							></cq-drawing-settings>
						</div>
					</cq-palette-dock>

					<div className="chartContainer">
						<stx-hu-tooltip>
							<stx-hu-tooltip-field data-field="DT">
								<stx-hu-tooltip-field-name>Date/Time</stx-hu-tooltip-field-name>
								<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value>
							</stx-hu-tooltip-field>
							<stx-hu-tooltip-field data-field="Close">
								<stx-hu-tooltip-field-name></stx-hu-tooltip-field-name>
								<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value>
							</stx-hu-tooltip-field>
						</stx-hu-tooltip>

						<cq-chart-title cq-marker cq-browser-tab></cq-chart-title>

						<cq-chartcontrol-group
							className="full-screen-show"
							cq-marker
						></cq-chartcontrol-group>

						<cq-comparison-lookup></cq-comparison-lookup>

						<cq-chart-legend></cq-chart-legend>

						<cq-loader></cq-loader>
					</div>
				</div>
			</div>

			<cq-abstract-marker cq-type="helicopter"></cq-abstract-marker>

			<cq-attribution></cq-attribution>

			<div className="ciq-footer full-screen-hide">
				<cq-share-button></cq-share-button>
				<div
					className="shortcuts-ui ciq-shortcut-button"
					data-stxtap="Layout.showShortcuts()"
					title="Toggle shortcut legend"
				></div>
				<cq-show-range></cq-show-range>
			</div>

			<div className="cq-context-dialog">
				<cq-dialog>
					<cq-drawing-context></cq-drawing-context>
				</cq-dialog>

				<cq-dialog>
					<cq-study-context></cq-study-context>
				</cq-dialog>
			</div>

			<cq-side-panel></cq-side-panel>
		</>
	);
}
