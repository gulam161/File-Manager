import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
// import Home from "../Pages/Home";
import HomePage from "../Pages/HomePage";
import Dynamic from "../Pages/Dynamic";
import Main from "./Main";
import Src from "./Src";

const AllRoutes = () => {
  const [children, setChildren] = useState<string[]>([]);
  const [main, setMain] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3030/app`);
      setChildren(res.data.children);
      setMain(res.data.children[2]);
    } catch (error: any) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const main_children = (main as any)?.main?.children;

  const src_children = main;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/folder/:fileid"
          element={<Dynamic children={children} />}
        />
        <Route
          path="/folder/app/main"
          element={<Main main={main_children} />}
        />
        <Route
          path="/folder/app/main/src"
          element={<Src srcfiles={src_children} />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default AllRoutes;
