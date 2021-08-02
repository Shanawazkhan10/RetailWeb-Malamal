import {
    BrowserRouter as Router,
    Route,    
} from "react-router-dom";
import { connect } from "react-redux";
import { IUser } from "../types/IUser";
import history from "./History";

interface IPrivateRoute {
    exact?: boolean;
    isAuthenticated: boolean | null;
    path: string;
    component: React.ComponentType<any>;
}
const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    ...otherProps
}: IPrivateRoute) => {
    if (isAuthenticated === false) {
        history.push("/login");
        alert("this is a logged in route, you are logged out, redirected to log in");
      }
    return(
        <>
        <Route render={otherProps => (
          <>
            <Component {...otherProps} />
          </>
        )}/>
      </>
    );
};

const mapStateToProps = (state: IUser) => ({
    isAuthenticated: state.isAuthenticated
  });


export default connect(
    mapStateToProps
  )(PrivateRoute);
