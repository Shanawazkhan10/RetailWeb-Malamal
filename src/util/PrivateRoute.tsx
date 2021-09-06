import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { IUser } from "../types/IUser";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { loggedout } from "../features/Login/userSlice";

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
  const dispatch = useAppDispatch();
  useEffect(() => {    
    if(document.cookie.indexOf('userkey')===-1)
    {
      dispatch(loggedout());          
    }
  }, [])
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
