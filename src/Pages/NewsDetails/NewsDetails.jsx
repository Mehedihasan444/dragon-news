import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import RightSideMenu from "../../Components/RightSideMenu/RightSideMenu";
import { useEffect } from "react";
import { useState } from "react";

const NewsDetails = () => {
  const { id } = useParams();
  const Newses = useLoaderData();
  const [newsData, setNewsData] = useState([]);
  // console.log(Newses)

  useEffect(() => {
    const News = Newses.find((news) => news._id === id);
    setNewsData(News);
  }, [id, Newses]);

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4">
        <div className="col-span-3 space-y-5 border rounded-md p-5 mt-5">
          <h1 className="text-xl font-semibold">Dragon News</h1>
          <div className="">
            <img src={newsData.image_url} alt="" className="" />
          </div>
          <h1 className="text-4xl font-bold">{newsData.title}</h1>
          <p className="">{newsData.details}</p>
        </div>
        <div className="">
          <RightSideMenu></RightSideMenu>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
