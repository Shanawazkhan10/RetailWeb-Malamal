import MarketPictureDepth from "./MarketPictureDepth";
import MarketPicturePrice from "./MarketPicturePrice";

const MarketPicture = () => {
  return (
    <div className="block mr14" id="MarketPicture">
      <div className="block_head">
        <h1>Market Picture : SBIN-EQ</h1>
      </div>
      <div>
        <div className="content_in_market">
          <MarketPictureDepth></MarketPictureDepth>
          <MarketPicturePrice></MarketPicturePrice>
        </div>
      </div>
    </div>
  );
};

export default MarketPicture;
