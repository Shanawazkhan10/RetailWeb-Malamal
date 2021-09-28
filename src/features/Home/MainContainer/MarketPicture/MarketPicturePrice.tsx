import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";

const MarketPicturePrice = (props: { TokenInfo: IMarketWatchTokenInfo }) => {
  return (
    <div className="row opentable">
      <div className="col-md-6">
        <div
          id="watchlistinner2"
          // className="table table-responsive table-borderless"
        >
          <div>
            <div className="d-inline-block">Open</div>
            <div className="float-right">{props.TokenInfo.op}</div>
          </div>
          <div>
            <div className="d-inline-block">Low</div>
            <div className="float-right">{props.TokenInfo.lo}</div>
          </div>
          <div>
            <div className="d-inline-block">Volume</div>
            <div className="float-right">{props.TokenInfo.v}</div>
          </div>
          <div>
            <div className="d-inline-block">LTQ</div>
            <div className="float-right">{props.TokenInfo.ltq}</div>
          </div>
          <div>
            <div className="d-inline-block">Lower Circuit</div>
            <div className="float-right">{props.TokenInfo.lcl}</div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div
          id="watchlistinner2"
          // className="table table-responsive table-borderless"
        >
          <div>
            <div className="d-inline-block">High</div>
            <div className="float-right">{props.TokenInfo.h}</div>
          </div>
          <div>
            <div className="d-inline-block">Prev. close</div>
            <div className="float-right">{props.TokenInfo.c}</div>
          </div>
          <div>
            <div className="d-inline-block">Avg. price</div>
            <div className="float-right">{props.TokenInfo.ap}</div>
          </div>
          <div>
            <div className="d-inline-block">LTT</div>
            <div className="float-right">{props.TokenInfo.ltt}</div>
          </div>
          <div>
            <div className="d-inline-block">Upper Circuit</div>
            <div className="float-right">{props.TokenInfo.ucl}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPicturePrice;
