import React, { useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SearchIcon from "@mui/icons-material/Search";

import {
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [isSwitched, setSwitched] = useState(true);
  const [mins, setMins] = React.useState("");

  return (
    <>
      <h1 className="my-3 text-gray-600">
        <span className="bg_slate">Root Directory</span>
      </h1>
      <hr />

      <div className="f_between">
        <div className="f_between">
          <DriveFolderUploadIcon />
          <p className="bg_slate text-sm ml-2">Keep Local Path</p>
          <Switch
            checked={isSwitched}
            onChange={(event) => setSwitched(event.target.checked)}
            // inputProps={{ "aria-label": "controlled" }}
          />
          <p className="bg_slate text-sm">Auto Sync</p>

          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-label">15 mins</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mins}
              label="Mins"
              onChange={(event) => setMins(event.target.value)}
            >
              <MenuItem value={10}>15 mins</MenuItem>
              <MenuItem value={20}>20 mins</MenuItem>
              <MenuItem value={30}>25 mins</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="f_between px-4 py-2 border border-gray-300 rounded-full w-1/3 h-fit">
          <input
            type="text"
            placeholder="Scene name / Job ID"
            className="outline-none"
          />
          <SearchIcon />
        </div>
      </div>
      <hr />
    </>
  );
};
export default Header;
