import React, { useEffect, useState } from "react";
import Splash from "../splash";
import { NavLink as Link } from "react-router-dom";
import Personality from "./personalitySummary";


export default function Body({ title }) {
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

      <div className="flex flex-wrap mt-6">
        <div className="w-full lg:w-full pr-0 lg:pr-2">
          <p className="text-xl pb-3 flex items-center">
            <i className="fa fa-user mr-3"></i> Personality Report
          </p>
          <div className="p-6 bg-white">
            <div id="chartOne" width="400" height="200">
              <h2 className="text-2xl text-center text-black pb-6">
                Gad is a Turbulent Logician (INTP-T)
              </h2>
              <div className="flex flex-wrap -m-4 text-center">
                <Personality />
              </div>
              <div className="flex">
                <div className="lg:w-2/5"></div>
                <div className="mt-4">
                  <Link
                    className="lg:ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
                    to="/personality"
                  >
                    Find out More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
          <p className="text-xl pb-3 flex items-center">
            <i className="fa fa-laptop mr-3"></i> Career Aptitude
          </p>
          <div className="p-6 bg-white">
            <canvas id="chartOne" width="400" height="200"></canvas>
          </div>
        </div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
          <p className="text-xl pb-3 flex items-center">
            <i className="fa fa-briefcase mr-3"></i> Work Values
          </p>
          <div className="p-6 bg-white">
            <canvas id="chartTwo" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
    </main>
  );
}
