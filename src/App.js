import React, { useEffect, useState } from "react";
import Splash from "./components/splashscreen/splash";
import Dashboard from "./components/dashboard/layout/dashboard";
import "./App.css";

function App() {
  useEffect(() => {
    setTimeout(() => {
      setTimePassed();
    }, 2000);
  });

  const [loading, setLoading] = useState(true);

  const setTimePassed = () => {
    setLoading(false);
  };

  return loading === true ? (
    <div className="App">
      <Splash
        bg={"splash-bg "}
        text="Please wait a moment, we're compiling Gad's reports 😊"
      />
    </div>
  ) : (
    <Dashboard />
  );
}

export default App;
