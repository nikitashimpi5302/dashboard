import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Audio } from "react-loader-spinner";
import Data from "./components/Data";

const App = () => {
  const [loading, setLoading] = useState(!true);
  return (
    <div className="text-3xl tere h-full">
      <Navbar />
      <div className="flex items-center justify-center  h-full">
        {loading ? (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        ) : (
          <Data />
        )}
      </div>
    </div>
  );
};

export default App;
