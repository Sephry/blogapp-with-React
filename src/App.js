import React from "react";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import PageRoutes from "./Routes/PageRoutes";

function App() {
  return (
    <div class="max-w-screen-lg mx-auto">
      <Navbar />

      <PageRoutes />

      <Footer />
    </div>
  );
}

export default App;
