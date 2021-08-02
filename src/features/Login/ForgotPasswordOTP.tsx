import { useForm, SubmitHandler } from "react-hook-form";
import { otpVerificationSuccess } from "./forgotpasswordSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ChangePassword } from "./ChangePassword";

interface IForgotPasswordOTPInput {
  OTP: number;
}

export const ForgotPasswordOTP = () => {
  const forgotpassword = useAppSelector((state) => state.forgotPassword);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForgotPasswordOTPInput>();
  const onSubmit: SubmitHandler<IForgotPasswordOTPInput> = (data) => {
    //Make Web call for Fogot Passwoed Here
    console.log(data);
    dispatch(otpVerificationSuccess("OTP Verified"));
  };
  return (
    <>
      {forgotpassword.isOTPVerified == false ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className="login-main-form-title">Forgot Password OTP</span>
          <div className="wrap-input100 m-b-20">
            <input
              {...register("OTP", {
                required: "User Id is required.",
                maxLength: { value: 6, message: "Max length is 6." },
                minLength: { value: 6, message: "Invalid PIN." },
              })}
              className="input100 userIdCls inputFP"
              type="text"
              name="OTP"
              placeholder="OTP"
              id="OTP"
              maxLength={6}
            />
            <span className="input-ico.pin"></span>
            <p>{errors.OTP && errors.OTP.message}</p>
          </div>
          <div className="container-login-main-form-btn p-t-25">
            <button type="submit" className="login-main-form-btn">
              PROCEED
            </button>
          </div>
        </form>
      ) : (
        <ChangePassword />
      )}
    </>
  );
};
