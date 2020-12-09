import React, { useEffect, useState } from "react";
import Splash from "../../splashscreen/splash";
import PersonalitySummary from "./personalitySummary";

export default function Personality({ title }) {
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
            Gad is a Turbulent Logician (INTP-T)
          </h2>
          <div className="flex flex-wrap -m-4 text-center">
            <PersonalitySummary />
          </div>
        </div>
      </div>
      <div className="mt-4 pt-6 bg-white">
        <div id="chartOne" width="400" height="200">
          <h2 className="text-xl text-center text-black pb-6">
            Turbulent individuals are self-conscious and sensitive to stress.
            They are likely to experience a wide range of emotions and to be
            success-driven, perfectionistic and eager to improve. <br />
            <a
              target="_blank"
              href="https://www.16personalities.com/articles/identity-assertive-vs-turbulent"
              rel="noreferrer"
              className="underline text-xl text-center text-black pb-6"
            >
              Read More
            </a>
          </h2>
        </div>
      </div>
      <div className="mt-4 pt-6 bg-white">
        <section class="text-gray-700 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-full mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-32 object-cover object-center"
                src="https://static.neris-assets.com/images/personality-types/avatars/intp-logician-male.svg?v=1"
              />
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <div class="flex border-t border-gray-300 py-2">
                  <h2 className="text-xl text-left text-black p-6">TYPE:</h2>
                  <a
                    target="_blank"
                    href="https://www.16personalities.com/articles/identity-assertive-vs-turbulent"
                    rel="noreferrer"
                    className="ml-auto underline text-xl text-center text-black p-6"
                  >
                    Turbulent Logician
                  </a>
                </div>
                <div class="flex border-t border-gray-300 py-2">
                  <h2 className="text-xl text-left text-black p-6">CODE:</h2>
                  <p className="ml-auto text-xl text-center text-black p-6">
                    INTP-T
                  </p>
                </div>
                <div class="flex border-t border-gray-300 py-2">
                  <h2 className="text-xl text-left text-black p-6">ROLE:</h2>
                  <a
                    target="_blank"
                    href="https://www.16personalities.com/articles/roles-analysts"
                    rel="noreferrer"
                    className="ml-auto underline text-xl text-center text-black p-6"
                  >
                    Analyst
                  </a>
                </div>
                <div class="flex border-t border-b border-gray-300 py-2">
                  <h2 className="text-xl text-left text-black p-6">
                    STRATEGY:
                  </h2>
                  <a
                    target="_blank"
                    href="https://www.16personalities.com/articles/strategies-constant-improvement"
                    rel="noreferrer"
                    className="ml-auto underline text-xl text-center text-black p-6"
                  >
                    Constant Improvement
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Do you require more clarity?{" "}
            </h1>
            <a
              target="_blank"
              href="https://www.16personalities.com/profiles/e69fc715e7b47"
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
