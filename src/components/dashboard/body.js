import {NavLink as Link} from 'react-router-dom';
import Personality from "./personality";

export default function Body() {
  return (
    <main class="w-full flex-grow p-6">
      <h1 class="text-3xl text-black pb-6">Gad's profile summary</h1>

      <div class="flex flex-wrap mt-6">
        <div class="w-full lg:w-full pr-0 lg:pr-2">
          <p class="text-xl pb-3 flex items-center">
            <i class="fa fa-user mr-3"></i> Personality Report
          </p>
          <div class="p-6 bg-white">
            <div id="chartOne" width="400" height="200">
              <h2 class="text-2xl text-center text-black pb-6">
                Gad is a Turbulent Logician (INTP-T)
              </h2>
              <div class="flex flex-wrap -m-4 text-center">
                <Personality />
              </div>
              <div className="flex">
                <div className="lg:w-2/5"></div>
                <div class="mt-4">
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
      <div class="flex flex-wrap mt-6">
        <div class="w-full lg:w-1/2 pr-0 lg:pr-2">
          <p class="text-xl pb-3 flex items-center">
            <i class="fa fa-user mr-3"></i> Career Aptitude
          </p>
          <div class="p-6 bg-white">
            <canvas id="chartOne" width="400" height="200"></canvas>
          </div>
        </div>
        <div class="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
          <p class="text-xl pb-3 flex items-center">
            <i class="fa fa-briefcase mr-3"></i> Work Values
          </p>
          <div class="p-6 bg-white">
            <canvas id="chartTwo" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
    </main>
  );
}
