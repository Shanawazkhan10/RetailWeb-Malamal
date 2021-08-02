import Amplify from "aws-amplify";
import awsConfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
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
import Chart from "./features/Home/Chart/Chart";
import ForgotPassword from "./features/Login/ForgotPassword";
import MPIN from "./features/Login/MPIN";
import ChartJS from "./features/Home/Chart/Chartjs";

Amplify.configure(awsConfig);

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/ChartJS">
          <ChartJS />
        </Route>
        <Route path="/Chart">
          <Chart />
        </Route>
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
    </Router>
  );
}

// export default withAuthenticator(App);
export default App;
