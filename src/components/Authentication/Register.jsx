import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { registerUser, profileUpdate, setLoading, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const Name = form.name.value;
    const Email = form.email.value;
    const Photo_URL = form.photo_url.value;
    const Pass = form.password.value;

    try {
      await registerUser(Email, Pass);
      await profileUpdate(Name, Photo_URL);
      await setUser(Email, Pass, Name, Photo_URL);

      await setLoading(false);
      navigate(location ? location?.state?.from?.pathname : "/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-5xl bg-white p-8 rounded-lg border-2 border-accent shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
            <h1 className="text-center lg:text-left">
              <span className="text-3xl font-semibold">
                Register to Your Account
              </span>
              <br />
              Then Buy Any Products
            </h1>
            <p className="pt-10">
              Have an account{" "}
              <span className="underline text-cyan-600">
                <Link to="/Login">Login</Link>
              </span>
            </p>
          </div>
          <div className="flex-1">
            <form onSubmit={handleRegister}>
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                <div className="form-control">
                  <label htmlFor="name">
                    <span>Name:</span>
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      className="input input-bordered rounded-none w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label htmlFor="email">
                    <span>Email:</span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input input-bordered rounded-none w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label htmlFor="Photo">
                    <span>Photo URL:</span>
                    <input
                      type="text"
                      name="photo_url"
                      id="photo_url"
                      className="input input-bordered rounded-none w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
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
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-accent rounded-none w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
