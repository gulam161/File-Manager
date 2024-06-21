import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FolderIcon from "@mui/icons-material/Folder";

interface SrcProps {
  srcfiles: any;
}

const Src: React.FC<SrcProps> = (srcfiles) => {
  const labels = { inputProps: { "aria-label": "Checkbox demo" } };
  const main = srcfiles?.srcfiles?.main;
  let src = main?.children[0]?.src;
  src = src?.children;
  // console.log(typeof src);

  return (
    <div>
      {src &&
        src.length > 0 &&
        src.map((item: any, index: number) => (
          <div className="flex gap-x-3" key={index}>
            <div className="w-1/4">
              <Checkbox {...labels} color="default" />
              <FolderIcon className="text-orange-300 mx-4" />
              <span className="cursor-pointer">
                <span>
                  {Object.keys(item)[0]}
                  {/* <Link to={`/${Object.keys(item)[0]}`}>
                  </Link> */}
                </span>
              </span>
            </div>
            <div className="f_between w-1/4">
              <h1>{item[Object.keys(item)[0]].size}</h1>
            </div>
            <div className="f_between w-1/4">
              <h1>{item[Object.keys(item)[0]].type}</h1>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Src;
