import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Nabar";

const SignUp = () => {
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !username || !password) {
      setError("Email, username, and password are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        username,
        password,
      });

      if (response.status === 200) {
        setSuccess(response.data.mssg);
        emailRef.current.value = "";
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        navigate("/signin");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.mssg || err.response.data.error);
      } else {
        setError("Internal server error: " + err.message);
      }
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-green-200">
      <Navbar />

      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] relative">
        
        <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                ref={usernameRef}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                ref={passwordRef}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
