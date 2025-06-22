import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";

const Login = () => {
  const { user, logInUser, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((result) => {
        setUser("Account login successfully");
        e.target.reset();
      })
      .catch((error) => {
        alert("Error");
      });
  };
  return (
    <div className="min-h-screen flex  justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h1
            style={{ textShadow: "1px 1px 2px red" }}
            className=" text-shadow text-3xl font-bold mb-5 text-center shadow"
          >
            Login Your Account
          </h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-bold">
              Don't Have An Account? Please
              <Link
                className="font-bold text-red-500 ml-2"
                to="/auth/regiester"
              >
                Regiester
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
