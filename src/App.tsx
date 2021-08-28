// import Amplify from "aws-amplify";
// import awsConfig from "./aws-exports";
import "./App.css";
import Login from "./features/Login/Login";
import Home from "./features/Home/Home";

import {
  Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import PrivateRoute from "./util/PrivateRoute";
import history from "./util/History";
// import Chart from "./features/Home/Chart/Chart";
import ForgotPassword from "./features/Login/ForgotPassword";
import MPIN from "./features/Login/MPIN";
// import ChartJS from "./features/Home/Chart/Chartjs";
// import AdvancedChart from "./features/Home/Chart/AdvancedChart";

// Amplify.configure(awsConfig);
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact={true} path="/" component={Home}/>          
        {/* <Route path="/ChartJS">
          <ChartJS />
        </Route>
        <Route path="/Chart">
          <Chart />
        </Route>
        <Route path="/AdvancedChart">
          <AdvancedChart />
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <PrivateRoute path="/home" exact={true} component={Home} />
        {/* <AmplifySignOut /> */}
        <Route component={Login} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

// export default withAuthenticator(App);
export default App;
