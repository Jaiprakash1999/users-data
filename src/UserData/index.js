import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import UserDetails from "./LandingPage/UserDetails";

const UserData = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/profile/*" element={<UserDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default UserData;
