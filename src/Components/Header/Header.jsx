import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <div>
      <div className="text-center my-5">
        <img src={logo} alt="logo" className="mx-auto" />
        <h3 className="text-xl font-semibold text-[#706F6F]">
          Journalism Without Fear or Favor
        </h3>
        <h3 className="text-2xl font-semibold">
          {moment().format("dddd, MMMM Do YYYY")}
        </h3>
      </div>
      <div className="bg-[#F3F3F3] px-3 py-2 flex items-center">
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Latest
        </button>
        <div className="pl-10">
          <Marquee pauseOnHover={true} className="font-semibold">
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
