import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";
import PartnerUniversities from "../pages/partnerUniversities/PartnerUniversities";
import ErasmusExchange from "../pages/erasmus+/ErasmusExchange";
import SignIn from "../pages/signin/SignIn";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/partner-universities",
        element: <PartnerUniversities></PartnerUniversities>,
      },
      {
        path: "/erasmus-exchange",
        element: <ErasmusExchange></ErasmusExchange>,
      },
    ],
  },
]);
