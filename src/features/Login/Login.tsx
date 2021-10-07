import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  logging,
  loggedInSuccess,
  loggedInError,
  twofasuccess,
  twofaError,
  UserLogin,
} from "./userSlice";
import MPIN from "./MPIN";
import md5 from "md5";
import { isMobile } from "react-device-detect";
import "./Login.css";
import { ILoginRequest } from "../../types/Request/IloginRequest";
// import "../Home/style1.css";

interface ILoginInput {
  clientid: string;
  password: string;
  brokerId: string;
  source: string;
  pin: number;
}

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginInput>();

  const history = useHistory();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  var Source = "";
  if (isMobile) {
    Source = "Mobile";
  } else {
    Source = "Web";
  }

  const onSubmit: SubmitHandler<ILoginInput> = (data) => {
    dispatch(logging(data.clientid));
    console.log(data);
    //dispatch(loggedInSuccess("User"));
    const loginRequest: ILoginRequest = {
      uid: data.clientid,
      pwd: md5(data.password),
      brokerId: "TECXLABS",
      source: Source,
    };
    //var querystring = JSON.stringify(loginRequest);

    dispatch(UserLogin(loginRequest));
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  if (user.isAuthenticated) {
    history.push("/home");
  }
  return (
    <div className="retail_login">
      <div className="Login container-login-main">
        <div className="wrap-login-main">
          <div className="wrap-login-in">
            <div className="loginform">
              {user.isPasswordCheked === false ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="text-center">
                    <img src="../images/logo.svg" />
                  </div>
                  <h3 className="login-main-form-title">Sign in</h3>

                  <div className="form">
                    <input
                      {...register("clientid", {
                        required: "User Id is required.",
                      })}
                      className="form__input"
                      id="clientid"
                      name="clientid"
                      placeholder=" "
                      type="text"
                    />
                    <label htmlFor="clientid" className="form__label">
                      User ID
                    </label>
                    <span className="icon-inside">
                      <img src="../images/user-ico.png" />
                    </span>
                  </div>
                  <p>{errors.clientid && errors.clientid.message}</p>
                  <div className="form">
                    <input
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="form__input"
                      id="password"
                      name="password"
                      placeholder=" "
                      type={passwordShown ? "text" : "password"}
                    />
                    <label htmlFor="password" className="form__label">
                      Password
                    </label>
                    <span className="icon-inside">
                      <img src="../images/pswd-ico.png" />
                    </span>
                    <span
                      className={
                        "toggle-password " +
                        (passwordShown ? "pass-eye-slash" : "pass-eye")
                      }
                      onClick={togglePasswordVisiblity}
                    ></span>
                  </div>
                  <p>{errors.password && errors.password.message}</p>
                  <div className="container-login-main-form-btn p-t-25">
                    <button
                      type="submit"
                      className="btn btn-primary login-main-form-btn"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="text-right w-full">
                    <a href="/forgotpassword" id="frgt-clk" className="lf">
                      FORGOT PASSWORD?
                    </a>
                  </div>
                </form>
              ) : user.SetPassword ? (
                "SetPasword Window Here"
              ) : user.SetPassword ? (
                "SetPasword Window Here"
              ) : (
                <MPIN />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
