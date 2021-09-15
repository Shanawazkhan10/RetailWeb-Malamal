import React from "react";

const Quote = (props: any) => {
  const symbolInfo = props.tokenInfo;
  return symbolInfo != undefined ? (
    <div className="ohlc">
      <div className="row">
        <div className="six columns">
          <label>Open</label> <span className="value">{symbolInfo.op}</span>
        </div>{" "}
        <div className="six columns">
          <label>High</label> <span className="value">{symbolInfo.h}</span>
        </div>
      </div>{" "}
      <div className="row">
        <div className="six columns">
          <label>Low</label> <span className="value">{symbolInfo.lo}</span>
        </div>{" "}
        <div className="six columns">
          <label>Prev. Close</label>{" "}
          <span className="value">{symbolInfo.c}</span>
        </div>
      </div>{" "}
      <div className="row">
        <div className="six columns">
          <label>Volume</label> <span className="value">{symbolInfo.v}</span>
        </div>{" "}
        <div className="six columns">
          <label>Avg. price</label>{" "}
          <span className="value">{symbolInfo.ap}</span>
        </div>
      </div>{" "}
      <div className="row">
        <div className="six columns">
          <label>LTQ</label> <span className="value">{symbolInfo.ltq}</span>
        </div>{" "}
        <div className="six columns">
          <label>LTT</label> <span className="value">{symbolInfo.ltt}</span>
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Lower circuit</label>{" "}
          <span className="value">{symbolInfo.lcl}</span>
        </div>{" "}
        <div className="six columns">
          <label>Upper circuit</label>{" "}
          <span className="value">{symbolInfo.ucl}</span>
        </div>
      </div>
    </div>
  ) : (
    <div> asa </div>
  );
};

export default Quote;
