import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="mt-5">
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical">
        <button className="btn join-item justify-start">
          <FaFacebookF className="text-blue-500"></FaFacebookF> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className="text-blue-500"></FaTwitter>Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaSquareXTwitter /> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
