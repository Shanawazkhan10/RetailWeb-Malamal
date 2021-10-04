import React from "react";
const Quote = (props: any) => {
  const symbolInfo = props.tokenInfo;
  return symbolInfo != undefined ? (
    <>
      <td>
        <table
          id="watchlistinner2"
          className="c-blue table table-responsive table-borderless"
        >
          <tbody>
            <tr>
              <td>Open</td>
              <td>{symbolInfo.op}</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>{symbolInfo.lo}</td>
            </tr>
            <tr>
              <td>Volume</td>
              <td>{symbolInfo.v}</td>
            </tr>
            <tr>
              <td>LTQ</td>
              <td>{symbolInfo.ltq}</td>
            </tr>
            <tr>
              <td>Lower Circuit</td>
              <td>{symbolInfo.lcl}</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table
          id="watchlistinner2"
          className="c-red table table-responsive table-borderless"
        >
          <tbody>
            <tr>
              <td>High</td>
              <td>{symbolInfo.h}</td>
            </tr>
            <tr>
              <td>Prev. close</td>
              <td>{symbolInfo.c}</td>
            </tr>
            <tr>
              <td>Avg. price</td>
              <td>{symbolInfo.ap}</td>
            </tr>
            <tr>
              <td>LTT</td>
              <td>{symbolInfo.ltt}</td>
            </tr>
            <tr>
              <td>Upper Circuit</td>
              <td>{symbolInfo.ucl}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </>
  ) : (
    <div> ...... </div>
  );
};
export default Quote;
