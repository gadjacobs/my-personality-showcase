import React, { useEffect, useState } from "react";
import Splash from "../../splashscreen/splash";
import CareerSummary from "./careerSummary";

export default function Career({ title }) {
  useEffect(() => {
    setTimeout(() => {
      setTimePassed();
    }, 1500);
  });

  const occupations = ['Street Artist', 'Illustrator', 'Artistic Painter', 'Landscape Architect', 'Sculptor', 'Glass Artist', 'Cartoonist', 'Dancer', 'Animator', '3D Modeller', 'Architect', 'Musician']

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
            Gad's Holland Code is 'ARIECS'
          </h2>
          <div className="flex flex-wrap -m-4 text-center">
            <CareerSummary />
          </div>
        </div>
      </div>
      <div className="mt-4 pt-6 bg-white">
        <div id="chartOne" width="400" height="200">
          <h2 className="underline text-2xl text-center text-black pb-6">
            There are six personality types in Holland's model:
          </h2>
          <p className="text-xl font-bold text-center text-black pb-6">
            Realistic:{" "}
            <span className="text-lg font-thin text-center text-black pb-6">
              practical, physical, concrete, hands-on, machine, and
              tool-oriented
            </span>
          </p>
          <p className="text-xl font-bold text-center text-black pb-6">
            Investigative:{" "}
            <span className="text-lg font-thin text-center text-black pb-6">
              analytical, intellectual, scientific, explorative, thinker
            </span>
          </p>
          <p className="text-xl font-bold text-center text-black pb-6">
            Artistic:{" "}
            <span className="text-lg font-thin text-center text-black pb-6">
              creative, original, independent, chaotic, inventive, media,
              graphics, and text
            </span>
          </p>
          <p className="text-xl font-bold text-center text-black pb-6">
            Social:{" "}
            <span className="text-lg font-thin text-center text-black pb-6">
              cooperative, supporting, helping, healing/nurturing, teaching
            </span>
          </p>
          <p className="text-xl font-bold text-center text-black pb-6">
            Enterprising:{" "}
            <span className="text-lg font-thin text-center text-black pb-6">
              competitive environments, leadership, persuading, status
            </span>
          </p>
          <p className="text-xl font-bold text-center text-black pb-6">
            Conventional:{" "}
            <span className="text-lg font-thin text-center text-black pb-6">
              detail-oriented, organizing, clerical
            </span>
          </p>
        </div>
      </div>
      <div className="mt-6 p-6 bg-white">
        <div id="chartOne" width="400" height="200">
          <h2 className="text-2xl text-center text-black pb-6">
            Gad's list of suggested occupations
          </h2>
          <div class="bg-white overflow-auto whitespace-no-wrap py-3 px-4 text-center">
            {occupations.map((occupation, i) => {
              return (
                <button class="inline-block border border-teal-500 text-teal-500 rounded-full px-6 py-2 mr-4">
                  {occupation}
                </button>
              );
            })}
          </div>
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
              href="https://www.123test.com/career-test/id=QRAOKO0HA1TG&version="
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
