import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ForgotPasswordOTP } from "./ForgotPasswordOTP";
import { authenticationSuccess } from "./forgotpasswordSlice";

interface IForgotPasswordInput {
    clientid: string;
    panno: string;
}

const ForgotPassword = () => {
  const forgotpassword = useAppSelector((state) => state.forgotPassword);
  const dispatch = useAppDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm<IForgotPasswordInput>();
    const onSubmit: SubmitHandler<IForgotPasswordInput> = (data) => {        
        //Make Web call for Fogot Passwoed Here
        console.log(data);        
        dispatch(authenticationSuccess("Authenticated"));
      };

  return (
    <div className="retail_login">
      <div className="Login container-login-main">
        <div className="wrap-login-main">
          <div className="wrap-login-in">
            <div className="loginform">              
            {forgotpassword.isUserAuthenticated === false ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <span className="login-main-form-title">Forgot Password</span>
                <div className="wrap-input100 m-b-20">
                  <input
                  {...register("clientid", {
                    required: "User Id is required.",
                    maxLength: { value: 10, message: "Max length is 10." },
                  })}                  
                    className="input100 userIdCls inputFP"
                    type="text"
                    name="clientid"
                    placeholder="User ID"
                    id="clientid"                    
                  />
                  <span className="input-ico user"></span>
                  <p>{errors.clientid && errors.clientid.message}</p>
                </div>
                <div className="wrap-input100 m-b-20">
                  <input
                  {...register("panno", {
                    required: "PAN Number is required.",
                    maxLength: { value: 10, message: "Max length is 10." },
                  })}                  
                    className="input100 userIdCls inputFP"
                    type="text"
                    name="panno"
                    placeholder="PAN Number"
                    id="panno"                    
                    maxLength={10}
                    minLength={10}
                  />
                  <span className="input-ico user"></span>
                  <p>{errors.panno && errors.panno.message}</p>
                </div>
                <div className="container-login-main-form-btn p-t-25">
                  <button type="submit" className="login-main-form-btn">
                    PROCEED
                  </button>
                </div>
                <div className="text-right w-full">
                  <a href="/login" id="frgt-clk" className="lf">
                    BACK TO SIGN IN
                  </a>
                </div>
              </form>):(<ForgotPasswordOTP/>)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
