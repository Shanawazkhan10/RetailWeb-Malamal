import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { IUser } from "../types/IUser";

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
  return (
      <Route
        {...otherProps}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
      />    
  );
};

const mapStateToProps = (state: IUser) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
