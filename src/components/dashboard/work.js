import React, { useEffect, useState } from "react";
import Splash from "../splash";

export default function Work({ title }) {
    useEffect(() => {
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
    </main>
  );
}
