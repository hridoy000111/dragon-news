import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    //const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createNewUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        e.target.reset();
      })
      .catch((error) => {
        const errorMessage = error.code;
        setUser(errorMessage);
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
            Regiester Your Account
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
            <button className="btn btn-neutral mt-4">Regiester</button>
            <p className="font-bold">
              Already Have An Account? Please
              <Link className="font-bold text-red-500 ml-2" to="/auth/login">
                LogIn Now
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
