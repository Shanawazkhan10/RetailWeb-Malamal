import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import "./style.css";

const Home = () => {
  return (
    <div id="MasterSearchDiv">
      <div id="wrapper">
        <Header />
        <MainContainer />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
