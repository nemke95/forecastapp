import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorLoadingPage">
      <div className="mt-5 border-red-500 bg-red-800 rounded-2xl p-3.5 ">
        <Link
          className="text-white bg-red-900 px-2.5 pb-1.5 rounded-2xl underline"
          to="/"
        >
          Back to weather location
        </Link>
        <h1 className="flex items-center justify-center text-white">
          <MdOutlineErrorOutline />
          Page doesn`t exist
        </h1>
      </div>
    </div>
  );
};

export default Error;
