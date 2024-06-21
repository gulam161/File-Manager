import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { Link } from "react-router-dom";
import FolderIcon from "@mui/icons-material/Folder";

type MainProps = {
  main: [];
};

type MainItem = {
  src: {
    type: string;
  };
};

const Main: React.FC<MainProps> = ({ main }) => {
  const labels = { inputProps: { "aria-label": "Checkbox demo" } };

  //   const param = useParams();
  //   console.log(param);

  return (
    <div>
      {main &&
        main.map((item: MainItem, index: number) => (
          <div className="f_between" key={index}>
            <div className="w-[48%]">
              <span>
                <Checkbox {...labels} color="default" />

                <FolderIcon className="text-orange-300 mx-4" />
                <span className="cursor-pointer">
                  <Link to={`/folder/app/main/src`}>
                    <span>{Object.keys(item)}</span>
                  </Link>
                </span>
              </span>
            </div>
            <div className="w-[48%]">{item.src.type}</div>
          </div>
        ))}
    </div>
  );
};

export default Main;
