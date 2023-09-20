import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { signIn } from "next-auth/react";
import Loading from "./Loading";
import { useState } from "react";

const LoginCard = () => {
  const [loginLoading , setLoginLoading] = useState(false);
  const handleSubmitLogin = () => {
    setLoginLoading(true);
    signIn("google");
  };
  if (loginLoading) {
    return <Loading />;
  };
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-sm">Sign in to your account</p>
        </div>

        <span className="flex flex-row justify-center gap-4">
          <button
            id="SignIn with Google" 
            title="SignIn with Google" 
            className="flex flex-row gap-3 items-center py-2 px-4 rounded-lg bg-white hover:bg-slate-50 transition-all ease-out"
            onClick={handleSubmitLogin}
            >
            <FcGoogle />
            <p className="text-xs text-slate-500">Sign in with Google</p>
          </button>
          <button
          id="SignIn with Apple" 
          title="SignIn with Apple" 
          className="flex flex-row gap-3 items-center py-2 px-4 rounded-lg bg-white hover:bg-slate-50 transition-all ease-out">
            <AiFillApple className="text-slate-600" />
            <p className="text-xs text-slate-500 ">Sign in with Apple</p>
          </button>
        </span>

        <div className="flex flex-col w-full bg-white gap-4 px-8 py-8 rounded-xl">
          <div className="flex flex-col w-full gap-2">
            <p className="text-sm">Email address</p>
            <input className="bg-[#EAEAEA] py-2 px-4 text-sm rounded-lg focus:outline-none"></input>
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-sm">Password</p>
            <input className="bg-[#EAEAEA] py-2 px-4 text-sm rounded-lg focus:outline-none"></input>
          </div>
          <p className="text-blue-500 text-sm">Forgot password?</p>
          <button className="w-full bg-[#4285F4] text-white text-md font-bold text-center py-2 rounded-lg">Sign In</button>
        </div>

        <div className="flex w-full justify-center text-sm">
          <h1 className="text-[#858585]">Don’t have an account? <a className="text-blue-500">Register here</a></h1>
        </div>
      </div>
    </>
  );
}

export default LoginCard;