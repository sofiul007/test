import React, { useEffect, useState } from "react";
import { useRegisterMutation } from "../../feature/auth/authApi";
import { useNavigate } from "react-router";
import "./register.css";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseError, setResponseError] = useState(undefined);
  const [register, { data, isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (error?.data) {
      setResponseError(error.data);
    }
    if (data?.user && data.accessToken) {
      navigate("/");
    }
  }, [data, navigate, setResponseError, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseError("");
    if (password !== confirmPassword) {
      setResponseError("Password Doesn't Match");
    } else {
      const data = {
        name,
        email,
        password,
      };
      register(data);
    }
  };

  // return (
  //   <div>
  //     <h1>Sign Up</h1>

  //     <form onSubmit={handleSubmit}>
  //       <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} /> <br />
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         required
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />{" "}
  //       <br />
  //       <input
  //         type="password"
  //         placeholder="password"
  //         required
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />{" "}
  //       <br />
  //       <input
  //         type="password"
  //         placeholder="confirm password"
  //         required
  //         value={confirmPassword}
  //         onChange={(e) => setConfirmPassword(e.target.value)}
  //       />
  //       <button type="submit" disabled={isLoading}>Sign Up</button>
  //     </form>
  //     {<div>{responseError}</div>}
  //   </div>
  // );

  return (
    <div
      className="bg-cover bg-center h-screen "
      style={{
        backgroundImage:
          'url("https://png.pngtree.com/background/20210711/original/pngtree-flat-tourist-season-world-map-background-picture-image_1116739.jpg")',
      }}
    >
      <div className="text-centers mb-8">
        <h1 className="title text-blue-500 pt-10 text-center text-4xl font-semibold uppercase">SingUP Here</h1>
      </div>
      <div className="bg-white p-8 gap-x-4 grid grid-cols-2    rounded-lg shadow-lg justify-between mx-52">
        <div className="mb-4  card-img relative">
          <h1 className="text-3xl font-bold text-center absolute left-20  bottom-3/4 text-white">
            Tales from Adventurers, Explorers, and Jetsetters
          </h1>
          <p className=" text-sm  text-center absolute left-20  top-40 text-whit overflow-hidden right-20 text-[#969393]">
            Embark on thrilling journeys with our Travel Heroes as they navigate the globe, conquering new frontiers,
            uncovering hidden treasures, and inspiring wanderlust in the hearts of all who dare to dream..
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-lg" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
       onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">
            Sign Up
          </button>
          {responseError && <div className="text-red-500 mb-4">{responseError}</div>}
        </form>
      </div>
    </div>
  );
}

export default Registration;
