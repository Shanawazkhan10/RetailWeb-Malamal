import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";

const MarketPicturePrice = (props: { TokenInfo: IMarketWatchTokenInfo }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <table
          id="watchlistinner2"
          className="table table-responsive table-borderless"
        >
          <tbody>
            <tr>
              <td>Open</td>
              <td>{props.TokenInfo.op}</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>{props.TokenInfo.lo}</td>
            </tr>
            <tr>
              <td>Volume</td>
              <td>{props.TokenInfo.v}</td>
            </tr>
            <tr>
              <td>LTQ</td>
              <td>{props.TokenInfo.ltq}</td>
            </tr>
            <tr>
              <td>Lower Circuit</td>
              <td>{props.TokenInfo.lcl}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-6">
        <table
          id="watchlistinner2"
          className="table table-responsive table-borderless"
        >
          <tbody>
            <tr>
              <td>High</td>
              <td>{props.TokenInfo.h}</td>
            </tr>
            <tr>
              <td>Prev. close</td>
              <td>{props.TokenInfo.c}</td>
            </tr>
            <tr>
              <td>Avg. price</td>
              <td>{props.TokenInfo.ap}</td>
            </tr>
            <tr>
              <td>LTT</td>
              <td>{props.TokenInfo.ltt}</td>
            </tr>
            <tr>
              <td>Upper Circuit</td>
              <td>{props.TokenInfo.ucl}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketPicturePrice;
