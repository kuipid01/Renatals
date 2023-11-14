import React from "react";
import Home from "./Home";
import Popular from "../components/Popular";
import Choose from "../components/Choose";
import Featured from "../components/Featured";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <Popular />

      <Choose />
      {/* <Featured /> */}
    </div>
  );
};

export default LandingPage;
