import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";
import PartnerUniversities from "../pages/partnerUniversities/PartnerUniversities";

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
        path: "/partner-universities",
        element: <PartnerUniversities></PartnerUniversities>,
      },
    ],
  },
]);
