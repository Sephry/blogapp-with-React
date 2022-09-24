import { Route, Routes } from "react-router-dom";

import HomeScreen from "../Pages/HomeScreen";
import PostScreen from "../Pages/PostScreen";
import ContactScreen from "../Pages/ContactScreen";
import AboutScreen from "../Pages/AboutScreen";
import LoginScreen from "../Pages/LoginScreen";
import RegisterScreen from "../Pages/RegisterScreen";

function PageRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/post" element={<PostScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
        </Routes>
    );


}

export default PageRoutes;