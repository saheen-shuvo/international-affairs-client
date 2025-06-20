import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";
import PartnerUniversities from "../pages/partnerUniversities/PartnerUniversities";
import SignIn from "../pages/signin/SignIn";
import Register from "../pages/register/Register";
import ErasmusExchangeDetails from "../pages/exchangePrograms/ExchangeProgramDetails";
import ExchangeProgram from "../pages/exchangePrograms/ExchangePrograms";
import Vip from "../pages/vip/Vip";
import Vip2025Details from "../pages/vip/Vip2025Details";
import Iip from "../pages/iip/Iip";
import Iip2025Details from "../pages/iip/Iip2025Details";

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
        path: "/programs-exchanges/:programType",
        element: <ExchangeProgram></ExchangeProgram>,
      },
      {
        path: "/programs-exchanges/:programType",
        element: <ExchangeProgram></ExchangeProgram>,
      },
      {
        path: "/programs-exchanges/:programType/:id",
        element: <ErasmusExchangeDetails></ErasmusExchangeDetails>,
      },
      {
        path: "/vip",
        element: <Vip></Vip>
      },
      {
        path: "/vip/vip2025details",
        element: <Vip2025Details></Vip2025Details>
      },
      {
        path: "/iip",
        element: <Iip></Iip>
      },
      {
        path: "/iip/iip2025details",
        element: <Iip2025Details></Iip2025Details>
      },
    ],
  },
]);
