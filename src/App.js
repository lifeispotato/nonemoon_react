import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
