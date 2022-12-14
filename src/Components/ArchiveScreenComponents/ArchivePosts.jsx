import React, { useState } from "react";
import LoadingPage from "../LoadingPage";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import ViewColumnRoundedIcon from "@mui/icons-material/ViewColumnRounded";

const ArchivePosts = ({ posts, loading }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [column, setColumn] = useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const cols = ["grid grid-cols-2", "grid grid-cols-1"];

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <ul className="">
      <li className="m-4">
        <IconButton
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <ViewColumnRoundedIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Button
            color=""
            variant="plain"
            onClick={() => {
              setColumn(false);
            }}
          >
            One Column
          </Button>
          <Button
            color=""
            variant="plain"
            onClick={() => {
              setColumn(true);
            }}
          >
            Two Column
          </Button>
        </Popover>
      </li>

      <li className={column ? cols[0] : cols[1]}>
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 hover:border-gray-500 hover:bg-gray-100 m-1 p-3  rounded-xl flex flex-col md:flex-row mb-10"
          >
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div className=" rounded px-4">
              <span className="text-green-700 text-sm hidden md:block">
                {post.title}
              </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                {post.body}
              </div>
              
            </div>
          </div>
        ))}
      </li>
    </ul>
  );
};

export default ArchivePosts;
