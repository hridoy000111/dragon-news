import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-gray-200 p-2 rounded">
      <p className="bg-[#d72050] text-base-200 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true}>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora
          quisquam voluptatibus, dolorem, laboriosam aspernatur beatae vel,
          eligendi nam fugit doloremque incidunt veniam ullam esse aliquam porro
          nemo eos tenetur?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
