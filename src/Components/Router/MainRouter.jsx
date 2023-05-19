import React from "react";
import { Routes, Route } from "react-router-dom";
import {UserAuthContextProvider} from "../Context/UserAuthContext";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Service from "../Pages/Service";
import Login from "../Pages/Login";
import ViewMore from "../Pages/ViewMore";
import SignUp from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoute from "../Context/ProtectedRoute";

const MainRouter = () => {
    return(
        <div>
            <UserAuthContextProvider>
            <Routes>
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/service" element={<Service/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/viewmore" element={<ViewMore/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
            </Routes>
            </UserAuthContextProvider>
        </div>
    );
};
export default MainRouter;