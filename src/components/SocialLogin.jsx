import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">LogIn With</h2>
      <div className="flex flex-col gap-3">
        <button className="btn">
          <FcGoogle />
          <h2 className="text-blue-700 ">Login with google</h2>
        </button>
        <button className="btn">
          <FaGithub></FaGithub> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
