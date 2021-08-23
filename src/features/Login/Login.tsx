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
} from "./userSlice";
import MPIN from "./MPIN";
import md5 from "md5";
import { postLoginRequest } from "../../app/api";

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

  const onSubmit: SubmitHandler<ILoginInput> = (data) => {
    dispatch(logging());
    console.log(data);
    dispatch(loggedInSuccess("User"));
    var querystring = JSON.stringify({
      uid: data.clientid + "-TECXLABS",
      pwd: md5(data.password),
      brokerId: "TECXLABS",
      source: "Web",
    });
    postLoginRequest(querystring);
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="retail_login">
      <div className="Login container-login-main">
        <div className="wrap-login-main">
          <div className="wrap-login-in">
            <div className="loginform">
              {user.isPasswordCheked === false ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <span className="login-main-form-title">Sign in</span>
                  <div className="wrap-input100 m-b-20">
                    <input
                      {...register("clientid", {
                        required: "User Id is required.",
                      })}
                      className="input100 txtLofinPasss userIdCls"
                      id="clientid"
                      name="clientid"
                      placeholder="User ID"
                      type="text"
                      maxLength={10}
                    />
                    <span className="input-ico user"></span>
                  </div>
                  <p>{errors.clientid && errors.clientid.message}</p>
                  <div className="wrap-input100 m-b-20">
                    <input
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="input100 txtLofinPasss"
                      id="password"
                      name="password"
                      placeholder="Password"
                      type={passwordShown ? "text" : "password"}
                    />
                    <span className="input-ico pswd"></span>
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
                    <button type="submit" className="login-main-form-btn">
                      Sign In
                    </button>
                  </div>
                  <div className="text-right w-full">
                    <a href="/forgotpassword" id="frgt-clk" className="lf">
                      FORGOT PASSWORD?
                    </a>
                  </div>
                </form>
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
