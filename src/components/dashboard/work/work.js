import React, { useEffect, useState } from "react";
import Splash from "../../splashscreen/splash";
import WorkSummary from "./workSummary";

export default function Work({ title }) {
    useEffect(() => {
        setTimeout(() => {
          setTimePassed();
        }, 1500);
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
            Gad's Work Profile
          </h2>
          <div className="flex flex-wrap -m-4 text-center">
            <WorkSummary />
          </div>
        </div>
      </div>
    </main>
  );
}
