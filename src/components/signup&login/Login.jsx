import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../../feature/auth/authApi";
import { useNavigate } from "react-router";
import "./register.css";
import { Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseError, setResponseError] = useState("");
  const [login, { data, isLoading, error }] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (error?.data) {
      setResponseError(error.data);
    }
    if (data?.user && data.accessToken) {
      navigate("/");
    }
  }, [data, navigate, setResponseError, error]);

  const loginHandle = (e) => {
    e.preventDefault();
    setResponseError("");
    login({
      email,
      password,
    });
  };

  // return (
  //   <div>
  //     <h1>Login</h1>

  //     <form onSubmit={loginHandle}>
  //       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
  //       <input
  //         type="password"
  //         placeholder="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />{" "}
  //       <br />
  //       <button type="submit">Login</button>
  //     </form>
  //       <div>{responseError}</div>

  //   </div>
  // );

  return (
    <div className="flex justify-center items-center h-screen login-bg">
      <form className="bg-[#8ACBC6] shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={loginHandle}>
        <h2 className="text-2xl font-bold mb-6 text-white">Login Here</h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" disabled={isLoading}
          >
            Sign In
          </button>
          <div className="text-gray-500 ml-4">
         <Link to="/registration">
         
         Don't have an account? <span className="underline cursor-pointer">Registration</span></Link>
          </div>
        </div>
        {responseError && <div className="text-red-500 mb-4">{responseError}</div>}
      </form>
    </div>
  );
}

export default Login;
