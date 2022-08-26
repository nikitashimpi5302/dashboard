import React from "react";
import Navbar from "./components/Navbar";

import Data from "./components/Data";

const App = () => {
  return (
    <div className="text-3xl tere h-full">
      <Navbar />
      <div className="flex items-center justify-center  h-full">
        <Data />
      </div>
    </div>
  );
};

export default App;
