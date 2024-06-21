import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FolderIcon from "@mui/icons-material/Folder";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  const [data, setData] = useState<Array<{ app: any }>>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/app")
      .then((res) => res.data)
      .then((res) => setData([...data, { app: res }]))
      .catch((err) => console.error(err));
  }, []);

  const labels = { inputProps: { "aria-label": "Checkbox demo" } };

  //   const main =
  //     data && data.length && data[0].hasOwnProperty("app")
  //       ? "app"
  //       : "No data to show";
  //   console.log("data", data);
  return (
    <>
      {data.map((elem: any, index: number) => {
        if (typeof elem === "object" && elem !== null) {
          const keys = Object.keys(elem);
          const main = keys[0];

          return (
            <div className="f_between" key={index}>
              <div className="w-[48%]">
                <span>
                  <Checkbox {...labels} color="default" />
                  <FolderIcon className="text-orange-300 mx-4" />
                  <span className="cursor-pointer">
                    <Link to={`${main ? `folder/${main}` : "unknow-route"}`}>
                      {main}
                    </Link>
                  </span>
                </span>
              </div>
              <div className="w-[48%]">{elem.app.type}</div>
            </div>
          );
        }
      })}
    </>
  );
};
export default HomePage;
