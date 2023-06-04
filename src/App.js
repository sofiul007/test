import React from "react";
import Home from "./Home";
import Admin from "./components/admin/Admin";
import Blogpost from "./components/blogpost/Blogpost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Registration from "./components/signup&login/Registration";
import Login from "./components/signup&login/Login";
import PackageAdd from "./components/admin/PackageAdd";
import AddBlog from "./components/blogpost/AddBlog";
import useAuthCheck from "./hooks/useAuthCheck";
import BlogDetails from "./components/blogpost/BlogDetails";
import Payment from "./components/admin/Payment";
import Success from "./components/util/Success";

const App = () => {
  const isAuthChecked = useAuthCheck();

  // return !isAuthChecked ? (
  //   <div>Authentication Checking!!!!</div>
  // ) : (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/admin" element={<Admin />} />
  //       <Route path="/" element={<Home />} />
  //       <Route path="/blogs" element={<Blogpost />} />
  //       <Route path="/registration" element={<Registration />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/addPackage" element={<PackageAdd />} />
  //       <Route path="addBlog" element={<AddBlog />} />
  //       <Route path="/blogs/:blogId" element={<BlogDetails/>}/>
  //     </Routes>
  //   </BrowserRouter>
  // );
  return(<>

    <BrowserRouter>
       <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogpost />} />
       <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addPackage" element={<PackageAdd />} />
        <Route path="addBlog" element={<AddBlog />} />
        <Route path="/blogs/:blogId" element={<BlogDetails/>}/>
        <Route path ="/payment/:packId" element={<Payment/>}  />
        <Route path="/success" element={<Success/>} />
       </Routes>
     </BrowserRouter>
  </>
  )
};

export default App;
