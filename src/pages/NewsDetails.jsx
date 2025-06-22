import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";

const NewsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 grid grid-cols-12 gap-3">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>

          <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
              <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Card Title</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
