import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { twofasuccess } from "./userSlice";
import { RootState } from "../../store/store";
import md5 from "md5";
import { isMobile } from "react-device-detect";
import { UserMPINLogin } from "./userSlice";

interface IMPINInput {
  PIN: string;
}

const MPIN = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IMPINInput>();

  const UserDetailsonLogin = useAppSelector((state: RootState) => state.user);

  var Source = "";
  if (isMobile) {
    Source = "Mobile";
  } else {
    Source = "Web";
  }

  const onSubmit: SubmitHandler<IMPINInput> = (data) => {
    //Make Web call for Fogot Passwoed Here
    var querystring = JSON.stringify({
      uid: UserDetailsonLogin.UserId,
      mpin: md5(data.PIN),
      brokerId: "TECXLABS",
      devicempinkey: UserDetailsonLogin.user.data.devicempinkey,
      source: Source,
    });

    console.log(data);
    dispatch(UserMPINLogin(querystring)); //Temp Code need to remove and Set after success response on Login/MPIN : MP
    history.push("/Home");
  };
  return (    
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className="login-main-form-title">MPIN</span>
      <div className="wrap-input100 m-b-20">
        <input
          {...register("PIN", {
            required: "PIN is required.",
          })}
          className="input100 userIdCls inputFP"
          type="password"
          name="PIN"
          placeholder="PIN"
          id="userIDFP"
        />
        <p>{errors.PIN && errors.PIN.message}</p>
      </div>
      <div className="container-login-main-form-btn p-t-25">
        <button type="submit" className="login-main-form-btn">
          PROCEED
        </button>
      </div>
    </form>
  );
};
export default MPIN;
