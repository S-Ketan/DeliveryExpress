import './App.css';
import MainLandingPage from './Components/landingPage/MainLandingPage';
import Navbar from './Components/navBar/Navbar';
import Chat from './Components/chat/Chat';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Services from './Components/services/Services';
import AboutUs from './Components/aboutUs/AboutUs';
import ContactUs from './Components/contactUs/ContactUs';
import List from './Components/list/List';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <MainLandingPage />
        </div>
      ),
    },
    {
      path: "/home",
      element: (
        <div>
          <Navbar />
          <MainLandingPage />
        </div>
      ),
    },
    {
      path: "/register",
      element: (
        <div>
          <Navbar />
         
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div>
          <Navbar />
       
        </div>
      ),
    },
    {
      path: "/chat",
      element: (
        <div>
          <Navbar />
          <Chat />
        </div>
      ),
    },
    {
      path: "/services",
      element: (
        <div>
          <Navbar />
          <Services />
        </div>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <div>
          <Navbar />
          <AboutUs />
        </div>
      ),
    },
    {
      path: "/contactus",
      element: (
        <div>
          <Navbar />
          <ContactUs />
        </div>
      ),
    },
    {
      path: "/list",
      element: (
        <div>
          <Navbar />
          <List />
        </div>
      ),
    },
    {
      path: "*", // Fallback route for unmatched paths
      element: (
        <div>
          <Navbar />
          <h1>Page Not Found</h1>
        </div>
      ),
    },
  ],
  {
    basename: "/DeliveryExpress",
  }
);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
