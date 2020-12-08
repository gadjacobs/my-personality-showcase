import React, { useEffect, useState } from "react";
import Splash from "../splash";

import PersonalitySummary from "./personalitySummary";
export default function Personality({ title }) {useEffect(() => {
    setTimeout(() => {
      setTimePassed();
    }, 3000);
  });

  const [loading, setLoading] = useState(true);

  const setTimePassed = () => {
    setLoading(false);
  };
  return loading === true ? (
    <div className="App">
      <Splash
        bg={"dash-bg animate-pulse"}
        text="Please hold, we're building the results ⏳"
      />
    </div>
  ) : (
    <main className="w-full flex-grow p-6">
      <h1 className="text-3xl text-black pb-6">{title}</h1>
      <div className="p-6 bg-white">
        <div id="chartOne" width="400" height="200">
          <h2 className="text-2xl text-center text-black pb-6">
            Gad is a Turbulent Logician (INTP-T)
          </h2>
          <div className="flex flex-wrap -m-4 text-center">
            <PersonalitySummary />
          </div>
        </div>
      </div>
    </main>
  );
}
