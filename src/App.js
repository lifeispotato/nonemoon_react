import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }, []);

  const handleComplete = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="App" style={{ width: "300px" }}></div>{" "}
    </>
  );
}

export default App;
