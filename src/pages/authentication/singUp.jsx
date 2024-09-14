import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyAppContext } from "../../context";

const Login = () => {
  const { dataProfile } = MyAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = dataProfile.find(
      (profile) => profile.email === email && profile.password === password
    );

    if (user) {
      setLoginMessage("Login successful!");
      console.log("Logged in user:", user);
      navigate("/")

      
    } else {
      setLoginMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <div className="flex">
        <Link className="hover:text-[#e65540]" to="/">
          Home
        </Link>
        <p>&nbsp;account</p>
      </div>
      <div className="flex justify-center items-center gap-3 h-[70vh]">
        <div className="p-6 border w-[50vw] flex flex-col gap-2">
          <h1 className="text-xl font-semibold">New Customer</h1>
          <p className="text-lg text-gray-600">Register Account</p>
          <p className="text-lg text-gray-500">
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>
          <button onClick={ ()=> navigate("/register")} className="block w-[15vw] text-center bg-black px-14 py-3 font-medium text-white">
            Continue
          </button>
        </div>

        <div className="p-6 border w-[50vw] flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Returning Customer</h1>
          <p className="text-lg text-gray-600">I am a returning customer</p>
          {loginMessage && (
            <p
              className={`text-center mb-4 ${
                loginMessage.includes("successful")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {loginMessage}
            </p>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-lg text-gray-600 hover:text-[#e65540]">
            Forgot your password?
          </p>
          <div className="flex gap-2">
            <button
              className="block w-[15vw] text-center bg-black px-14 py-3 font-medium text-white"
              onClick={handleLogin}
            >
              Sign In
            </button>
            <p className="text-gray-600">
              or{" "}
              <span className="text-lg text-gray-600 hover:text-[#e65540]">
                Return to Store
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
