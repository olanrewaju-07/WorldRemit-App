import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';

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
    <div>
      <Link to="/">
        <GoArrowLeft className="text-[rgb(129,0,129)] text-4xl ml-4" />
      </Link>

      <div className="flex min-h-36 justify-center items-center mt-20">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-md">
          <h2 className="text-[rgb(129,0,129)] text-xl font-semibold">Login</h2>
          <form onSubmit={handleLogin}>
            {error && <div className="text-red-600 mb-4 mt-4">{error}</div>}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-black mt-4 ml-4"
              >
                Email:
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 ml-4 outline-none border w-[90%] px-2 py-2 rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-black mt-4 ml-4"
              >
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 ml-4 outline-none border w-[90%] px-2 py-2 rounded-lg shadow-sm"
              />
            </div>
            <a
              href="#"
              className="text-[rgb(129,0,129)] text-sm font-medium text-right block"
            >
              Forget password?
            </a>
            <button
              type="submit"
              className="w-full rounded-lg text-white bg-[rgb(129,0,129)] shadow-sm py-2 mt-4"
            >
              Log in
            </button>
            <p className="mt-4 text-center block font-semibold">
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
}

export default Login;
