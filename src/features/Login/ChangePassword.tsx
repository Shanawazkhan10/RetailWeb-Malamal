import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { changePasswordSucess } from "./forgotpasswordSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useHistory } from "react-router-dom";

interface IChangePasswordInput {
  newpassword: string;
  repetpassword: string;
  newpin: string;
  repeatpin: string;
}

export const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IChangePasswordInput>();
  const password = React.useRef({});
  password.current = watch("newpassword", "");
  const pin = React.useRef({});
  pin.current = watch("newpin", "");
  const onSubmit: SubmitHandler<IChangePasswordInput> = (data) => {
    //Make Web call for Change Passwoed Here
    //console.log(data);
    dispatch(changePasswordSucess("Change Password Success"));
    history.push("login");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className="login-main-form-title">Reset Password</span>
      <div className="wrap-input100 m-b-20">
        <input
          {...register("newpassword", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password is too short.",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              message: "Invalid password",
            },
          })}
          className="input100 txtLofinPasss"
          id="newpassword"
          name="newpassword"
          placeholder="New Password"
          type="password"
          maxLength={8}
        />
        <span className="input-ico pswd"></span>
      </div>
      <p>{errors.newpassword && errors.newpassword.message}</p>
      <div className="wrap-input100 m-b-20">
        <input
          {...register("repetpassword", {
            required: "Repeat Password is required",
            minLength: {
              value: 8,
              message: "Repeat Password too short",
            },
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
          className="input100 txtLofinPasss"
          id="repetpassword"
          name="repetpassword"
          placeholder="Repeat Password"
          type="password"
          maxLength={8}
        />
        <span className="input-ico pswd"></span>
      </div>
      <p>{errors.repetpassword && errors.repetpassword.message}</p>

      <div className="container-login-main-form-btn p-t-25">
        <span className="login-main-form-title">2Factor Pin</span>
        <span className="txt1">
          Set a numeric 6 digit PIN as your 2Factor authentication code. This is
          required for logins along with the password.
        </span>
      </div>
      <div className="wrap-input100 m-b-20">
        <input
          {...register("newpin", {
            required: "New PIN is required",
            valueAsNumber: true,
            minLength: {
              value: 6,
              message: "New PIN must be 6 numbers long.",
            },
          })}
          className="input100 txtLofinPasss"
          id="newpin"
          name="newpin"
          placeholder="New PIN"
          type="password"
          maxLength={6}
          inputMode="numeric"
        />
        <span className="input-ico pin"></span>
      </div>
      <p>{errors.newpin && errors.newpin.message}</p>
      <div className="wrap-input100 m-b-20">
        <input
          {...register("repeatpin", {
            required: "Repeat PIN is required",
            minLength: {
              value: 6,
              message: "Repeat PIN must be 6 numbers long.",
            },
            valueAsNumber: true,
            validate: (value) =>
              value === pin.current || "The PIN do not match",
          })}
          className="input100 txtLofinPasss"
          id="repeatpin"
          name="repeatpin"
          placeholder="Repeat PIN"
          type="password"
          maxLength={6}
          inputMode="numeric"
        />
        <span className="input-ico pin"></span>
      </div>
      <p>{errors.repeatpin && errors.repeatpin.message}</p>
      <div className="container-login-main-form-btn p-t-25">
        <button type="submit" className="login-main-form-btn">
          SAVE
        </button>
      </div>
    </form>
  );
};
