import React, { useState } from "react";
import { useGlobalContext } from "../context/context";

const Form = () => {
  const { setCity } = useGlobalContext();
  const [place, setPlace] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setCity(place);
    setPlace("");
  };

  return (
    <form className="w-11/12 m-auto pt-5 pb-4 text-center">
      <input
        className="py-1.5 px-2 mr-2.5 rounded-2xl text-base"
        type="text"
        id="city"
        placeholder="Choose city"
        value={place}
        onChange={(e) => {
          setPlace(e.target.value);
        }}
      />
      <button
        className="p-2.5 text-base rounded-2xl text-white bg-sky-800 pointer "
        onClick={onSubmit}
      >
        GO
      </button>
    </form>
  );
};

export default Form;
