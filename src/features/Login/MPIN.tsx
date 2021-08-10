import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { twofasuccess } from "./userSlice";

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
  const onSubmit: SubmitHandler<IMPINInput> = (data) => {
    //Make Web call for Fogot Passwoed Here
    console.log(data);
    dispatch(twofasuccess("User Logged IN")); //Temp Code need to remove and Set after success response on Login/MPIN : MP
    history.push("/Home");    
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className="login-main-form-title">MPIN</span>
      <div className="wrap-input100 m-b-20">
        <input
          {...register("PIN", {
            required: "PIN is required.",
            maxLength: { value: 6, message: "Max length is 6." },
            minLength:{value:6,message:"Invalid PIN."}
          })}
          className="input100 userIdCls inputFP"
          type="password"
          name="PIN"
          placeholder="PIN"
          id="userIDFP"
          maxLength={6}
          minLength={6}
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
