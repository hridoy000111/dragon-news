import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div>{user?.name}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login">
        <div className="flex  gap-2">
          <img src={userIcon} alt="" />

          {user && user?.email ? (
            <button onClick={logOut} className="btn">
              LogOut
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral">
              LogIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
