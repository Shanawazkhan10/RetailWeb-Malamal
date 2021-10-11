import md5 from "md5";
import { isMobile } from "react-device-detect";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../store/store";
import { UserMPINLogin } from "./userSlice";

interface IMPINInput {
  PIN: string;
}

const MPIN = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const user = useAppSelector((state) => state.user);

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
    var querystring = {
      uid: UserDetailsonLogin.UserId.toLocaleUpperCase(),
      mpin: md5(data.PIN),
      brokerId: "TECXLABS",
      devicempinkey: UserDetailsonLogin.user.data.devicempinkey,
      source: Source,
    };
    dispatch(UserMPINLogin(querystring)); //Temp Code need to remove and Set after success response on Login/MPIN : MP
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center logo">
        <img src="../images/logo.svg" className="mb-2" />
        <span>NUVESTER</span>
      </div>

      <h3 className="login-main-form-title">{user.UserId.split("-")[0]}</h3>
      <div className="form m-b-20">
        <span className="icon-inside">
          <img src="../images/pswd-ico.png" />
        </span>
        <input
          {...register("PIN", {
            required: "PIN is required.",
          })}
          className="form__input userIdCls inputFP"
          type="password"
          name="PIN"
          placeholder=" "
          id="userIDFP"
          autoFocus
        />
        <label htmlFor="userIDFP" className="form__label">
          PIN
        </label>
        <p>{errors.PIN && errors.PIN.message}</p>
      </div>
      <div className="container-login-main-form-btn p-t-25">
        <button type="submit" className="btn btn-primary login-main-form-btn">
          PROCEED
        </button>
      </div>
    </form>
  );
};
export default MPIN;
