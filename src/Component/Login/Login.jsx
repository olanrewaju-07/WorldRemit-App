import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function for form validation
  const validateForm = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return false;
    }
    setError("");
    return true;
  };

  // Prevent default form submission
  const handleLogin = (event) => {
    event.preventDefault();

    // Function to redirect back to home
    if (validateForm()) {
      window.location.href = "/home";
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Link to="/" className="self-start">
        <GoArrowLeft className="text-[rgb(129,0,129)] text-4xl" />
      </Link>
      <div className="flex justify-center items-center w-full mt-8 mobile:px-4 mobile:mt-56">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-[rgb(129,0,129)] text-xl font-semibold mb-4">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            {error && <div className="text-red-600 mb-4">{error}</div>}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-black mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-black mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm outline-none"
              />
            </div>
            <a
              href="#"
              className="text-[rgb(129,0,129)] text-sm font-medium block text-right mb-4"
            >
              Forget password?
            </a>
            <button
              type="submit"
              className="w-full bg-[rgb(129,0,129)] text-white py-2 rounded-lg shadow-sm"
            >
              Log in
            </button>
            <p className="mt-4 text-center font-semibold">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[rgb(129,0,129)]">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
