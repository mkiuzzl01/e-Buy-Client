import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const Email = form.email.value;
    const Pass = form.password.value;

    try {
      await loginUser(Email, Pass);
      navigate(location?.location?.state ? location?.state?.from?.pathname : "/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-2xl bg-white p-8 rounded-lg border-2 border-accent shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
            <h1 className="text-center lg:text-left">
              <span className="text-3xl font-semibold">
                Login to Your Account
              </span>
              <br />
              Then Buy Any Products
            </h1>
            <p className="mt-10">
              Have't account{" "}
              <Link to="/Register">
                <span className="underline text-cyan-600">Register</span>
              </Link>
            </p>
          </div>
          <div className="flex-1">
            <form onSubmit={handleLogin}>
              <div className="form-control mb-4">
                <label htmlFor="email">
                  <span>Email:</span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input input-bordered w-full rounded-none"
                  />
                </label>
              </div>
              <div className="form-control mb-4">
                <label htmlFor="password">
                  <span>Password:</span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="input input-bordered rounded-none w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-accent w-full rounded-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
