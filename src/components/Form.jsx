import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";

const Form = () => {
  const { setCity, setAlertMessage } = useGlobalContext();
  const [place, setPlace] = useState("");

  const onSubmit = (e) => {
    if (!place) {
      setAlertMessage(true);
      return;
    } else {
      e.preventDefault();
      setCity(place);
      setPlace("");
      setAlertMessage(false);
    }
  };

  return (
    <form className="w-11/12 m-auto pt-3 pb-2 text-center">
      <input
        className="py-1 px-2 mr-2.5 rounded-2xl text-base"
        type="text"
        id="city"
        placeholder="Choose city"
        value={place}
        onChange={(e) => {
          setPlace(e.target.value);
        }}
      />
      <button
        className="p-2 text-base rounded-2xl text-white bg-sky-800 pointer "
        onClick={onSubmit}
      >
        GO
      </button>
    </form>
  );
};

export default Form;
