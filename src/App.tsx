import React from "react";
import Header from "./components/Navigation/Header";
import Details from "./components/Navigation/details";
import AllRoutes from "./components/AllRoutes";

const App: React.FC = () => {
  return (
    <div className="p-3">
      <Header />
      <Details />
      <AllRoutes />
    </div>
  );
};

export default App;
