import React from "react";

import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";

import PageRoutes from "./Routes/PageRoutes";

const App = () => {

  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />

      <PageRoutes />

      <Footer />
    </div>
  );
}

export default App;
