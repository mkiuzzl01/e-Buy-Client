import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const defaultImage =
    "https://i.ibb.co/x19M7TG/blank-profile-picture-973460-1280.png";

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Shop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut();
  };
  return (
    <div>
      <div className="navbar bg-[#0E8388] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0E8388] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">e-buy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center space-x-4">
              <Tooltip id="my-tooltip" />
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="top"
              >
                <img
                  src={user?.photoURL ? user?.photoURL : defaultImage}
                  className="w-10 rounded-full"
                  alt={user?.displayName}
                />
              </a>
              <div>
                <button onClick={handleLogout} className="btn">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/Login" className="btn">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
