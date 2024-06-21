import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";

type detailsProps = {};

const data = [
  { label: "NAME" },
  { label: "SIZE" },
  { label: "TYPE" },
  { label: "MODIFIED DATE/TI..." },
];

const details: React.FC<detailsProps> = () => {
  const labels = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="f_between font-medium text-gray-600 py-1">
        {data.map(({ label }, index) => (
          <div key={index} className="f_between w-1/4">
            <h1>
              {index > 0 && <span className="font-light px-2">|</span>}
              {index === 0 && (
                <>
                  <Checkbox {...labels} color="default" />
                  <span className="font-light px-2">|</span>
                </>
              )}
              {label}
            </h1>
            <MoreVertIcon className="mt-1 cursor-pointer" />
          </div>
        ))}
      </div>
      <hr />
    </>
  );
};
export default details;
