import { useLoaderData, useParams } from "react-router-dom";
import Newscard from "../components/Newscard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <div>
        {news.map((singlenews) => (
          <Newscard key={singlenews._id} news={singlenews}></Newscard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
