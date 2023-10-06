import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import Resister from "../Pages/Resister/Resister";
import Newses from "../Components/Newses/Newses";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children:[{
          path:'/Newses/:id',
          element:<Newses ></Newses>,
          
        }]
      },
      {
        path:"/About",
        element: <About></About>
      },
      {
        path:"/Career",
        element: <Career></Career>
      }
    ],
  },
  {
    path:"/NewsDetails/:id",
    element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader:()=>fetch('/news.json')
   
  },
  {
    path:"/Login",
    element:<Login></Login>
   
  },
  {
    path:"/Resister",
    element: <Resister></Resister>
  },

]);

export default router;
