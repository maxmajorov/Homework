import React from "react";
import { HashRouter } from "react-router-dom";
import Header from "./Header/Header";
import RoutesPages from "./RoutesPages/RoutesPages";

const HW5 = () => {
  return (
    <div>
      {/*в gh-pages лучше работает HashRouter*/}
      <HashRouter>
        <Header />
        <RoutesPages />
      </HashRouter>
    </div>
  );
};

export default HW5;
