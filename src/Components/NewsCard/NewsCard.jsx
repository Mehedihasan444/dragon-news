import { BsBookmark } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const NewsCard = ({ aNews }) => {
  const { _id, title, image_url, author, details } = aNews;
  // console.log(aNews._id)
  return (
    <div className="mb-5">
      <div className="  border rounded-md border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between p-5 bg-[#F3F3F3]">
          <div className="flex justify-around gap-3">
            <div className="">
              <img src={author.img} alt="" className="rounded-full w-10" />
            </div>
            <div className="">
              <p className="font-bold">{author.name}</p>
              <p className="">{author.published_date}</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <BsBookmark></BsBookmark>
            <BiShareAlt></BiShareAlt>
          </div>
        </div>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <a href="#">
            <img className="rounded-t-lg" src={image_url} alt="" />
          </a>
          <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
            {details?.length > 200 ? (
              <p className="">
                {details.slice(0, 200)}{" "}
                <Link
                  to={`/NewsDetails/${_id}`}
                  className="text-blue-600 font-semibold"
                >
                  Read more...
                </Link>
              </p>
            ) : (
              details
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
