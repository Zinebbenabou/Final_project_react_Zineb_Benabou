import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyAppContext } from "../../context";

const Register = () => {
  const { dataProfile, setDataProfile } = MyAppContext();
  const navigate = useNavigate();

  const [firstInputValue, setFirstInputValue] = useState("");
  const [lastInputValue, setLastInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const invalidChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      firstName: firstInputValue,
      lastName: lastInputValue,
      email: emailInputValue,
      password: passwordInputValue,
    };

    if (!firstInputValue) {
      setValidationMessage("First name is required.");
      return;
    } else if (invalidChars.test(firstInputValue)) {
      setValidationMessage("Your first name contains special characters.");
      return;
    } else if (!lastInputValue) {
      setValidationMessage("Last name is required.");
      return;
    } else if (!emailInputValue) {
      setValidationMessage("Email is required.");
      return;
    } else if (dataProfile.find((element) => element.email === emailInputValue)) {
      setValidationMessage("This email already exists.");
      return;
    } else if (!passwordInputValue) {
      setValidationMessage("Password is required.");
      return;
    } else {
      setDataProfile([...dataProfile, newProfile]);
      navigate("/", {
        state: { notificationMessage: "Registration Successful!" },
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-6 border flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Create Account</h1>
        <p className="text-lg text-gray-600">Your Personal Details</p>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="First Name"
            value={firstInputValue}
            onChange={(e) => setFirstInputValue(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Last Name"
            value={lastInputValue}
            onChange={(e) => setLastInputValue(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
            value={emailInputValue}
            onChange={(e) => setEmailInputValue(e.target.value)}
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
            value={passwordInputValue}
            onChange={(e) => setPasswordInputValue(e.target.value)}
          />
        </div>

        {validationMessage && (
          <p className="text-red-600 mb-2">{validationMessage}</p>
        )}

        <div className="flex gap-2">
          <button
            type="submit"
            className="block w-[15vw] text-center bg-black px-14 py-3 font-medium text-white"
          >
            Create
          </button>
          <p className="text-gray-600">
            or
            <span className="text-lg text-gray-600 hover:text-[#e65540]">
              Return to Store
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
