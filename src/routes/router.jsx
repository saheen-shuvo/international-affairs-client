import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";
import PartnerUniversities from "../pages/partnerUniversities/PartnerUniversities";
import SignIn from "../pages/signin/SignIn";
import Register from "../pages/register/Register";
import ErasmusExchangeDetails from "../pages/exchangePrograms/ExchangeProgramDetails";
import ExchangeProgram from "../pages/exchangePrograms/ExchangePrograms";

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
    ],
  },
]);
