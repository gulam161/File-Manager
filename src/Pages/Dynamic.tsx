import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FolderIcon from "@mui/icons-material/Folder";

type DynamicProps = {
  children: string[];
};

const Dynamic = ({ children }: DynamicProps) => {
  //   console.log(children);

  const labels = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      {children &&
        children.length > 0 &&
        children?.map((item: any, index: number) => (
          <div className="flex gap-x-3" key={index}>
            <div className="w-1/4">
              <Checkbox {...labels} color="default" />
              <FolderIcon className="text-orange-300 mx-4" />
              <span className="cursor-pointer">
                <span>
                  <Link to={`/folder/app/main`}>{Object.keys(item)}</Link>
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
    </>
  );
};

export default Dynamic;
