import { Link } from "react-router-dom";

const Newscard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view } = news;

  return (
    <div className=" mx-auto bg-white shadow-md rounded-xl overflow-hidden border mt-6">
      {/* Author Info */}
      <div className="flex items-center px-6 py-4">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={author?.img}
          alt={author?.name}
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none font-semibold">
            {author?.name || "Unknown Author"}
          </p>
          <p className="text-gray-600">{author?.published_date}</p>
        </div>
      </div>

      {/* News Content */}
      <div className="px-6 pb-4">
        <h2 className="text-lg font-bold text-gray-800 leading-tight">
          {title}
        </h2>

        <img
          className="w-full h-48 object-cover rounded-lg mt-4"
          src={image_url}
          alt="News"
        />

        <p className="mt-4 text-gray-600 text-sm">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>

        <Link
          to={`/news/${news._id}`}
          className="inline-block mt-3 text-blue-500 font-semibold hover:underline"
        >
          {" "}
          Read more
        </Link>

        <div className="flex items-center justify-between mt-4">
          <div className="text-yellow-500 flex items-center text-sm">
            ⭐ {rating?.number}{" "}
            <span className="ml-1 text-gray-700">({rating?.badge})</span>
          </div>
          <div className="text-gray-600 text-sm">👁️ {total_view}</div>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
