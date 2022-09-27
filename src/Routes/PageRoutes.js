import { Route, Routes } from "react-router-dom";

import HomeScreen from "../Pages/HomeScreen";
import PostScreen from "../Pages/PostScreen";
import ContactScreen from "../Pages/ContactScreen";
import TeamsScreen from "../Pages/TeamsScreen";
import LoginScreen from "../Pages/LoginScreen";
import ArchiveScreen from "../Pages/ArchiveScreen"

function PageRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/post" element={<PostScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/teams" element={<TeamsScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/archive" element={<ArchiveScreen />} />
        </Routes>
    );


}

export default PageRoutes;