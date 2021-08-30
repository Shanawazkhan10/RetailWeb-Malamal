const Margin = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="plate fadeIn-element">
        <div className="slideInDown-element">
          <img src="images/equity.svg" /> <span>Equity</span>
          <div>
            <h1>159.25</h1>
          </div>
          <div className="equitytxt">
            <p>Margin Available</p>
            <p>
              Margin Used <span>8.85</span>
            </p>
            <p>
              Opening Balance <span>168.1</span>
            </p>
          </div>
          <div className="equitybtn">
            <a href="#">
              <img src="" />
              View Statement
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Margin;
