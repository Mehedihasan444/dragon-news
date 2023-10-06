import { Outlet, useLoaderData } from "react-router-dom";
import LeftSideMenu from "../../Components/LeftSideMenu/LeftSideMenu";
// import Newses from "../../Components/Newses/Newses";
import RightSideMenu from "../../Components/RightSideMenu/RightSideMenu";

const Home = () => {
  

  return (
    <div className=" ">
    
      <div className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-5">
        <div className="">
          <h1 className="text-2xl font-semibold">All Category</h1>
          <LeftSideMenu></LeftSideMenu>
        </div>
        <div className="col-span-2 ">
          <Outlet></Outlet>
          {/* <Newses ></Newses> */}
        </div>
        <div className="">
          

          <RightSideMenu></RightSideMenu>
        </div>
      </div>
    </div>
  );
};

export default Home;
