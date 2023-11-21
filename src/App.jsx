import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useGlobalContext } from "./context/context";
import "./App.css";
import Main from "./components/Main";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  const { isLoading, isError } = useGlobalContext();
  let context = "";
  if (isLoading) {
    context = <Loading />;
  } else if (isError) {
    context = <Error />;
  } else {
    context = <Main />;
  }

  return (
    <>
      <Header />
      {context}
      <Footer />
    </>
  );
}

export default App;
