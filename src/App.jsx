import React from "react";
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Service from "./Pages/Service";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";

// const Demo = () => <h1>Login Page</h1>;

//-----------second-way---------------------
// const router = createBrowserRouter([
//   {
//     path: "/", element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/service",
//         element: <Service />
//       },
//     ]
//   }
// ])

//---------Third-way-----------
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>

    //--------------First Way Routing---------------------
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/services" element={<Service />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/login" element={<Demo />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
