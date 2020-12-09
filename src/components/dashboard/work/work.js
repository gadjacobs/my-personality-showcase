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
      <div className="mt-4 pt-6 bg-white">
        <div id="chartOne" width="400" height="200">
          <h2 className="text-xl text-center text-black pb-6">
          If you have work in which the work values that you believe are important have ample room, the chance that you will be successful and happy in your work will increase. <br />
            <a
              target="_blank"
              href="https://www.123test.com/report/3XKNWPRYBOX4ODKZTH/"
              rel="noreferrer"
              className="underline text-xl text-center text-black pb-6"
            >
              View Report
            </a>
          </h2>
        </div>
      </div>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Do you require more clarity?{" "}
            </h1>
            <a
              target="_blank"
              href="https://www.123test.com/report/3XKNWPRYBOX4ODKZTH/"
              rel="noreferrer"
              class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
            >
              View full report
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
