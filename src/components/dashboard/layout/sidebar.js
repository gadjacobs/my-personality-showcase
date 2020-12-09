import { NavLink as Link } from "react-router-dom";
export default function SideBar() {
  return (
    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <Link
          className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          to="/"
          exact
        >
          KnackLab
        </Link>
        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <a
            href="https://www.16personalities.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-plus mr-3"></i>
            New Report
          </a>
        </button>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <Link
          className="flex items-center text-white py-4 pl-6 nav-item"
          activeStyle={{ background: "#1947ee" }}
          to="/"
          exact
        >
          <i className="fa fa-tasks mr-3"></i>
          Summary
        </Link>
        <Link
          className="flex items-center text-white py-4 pl-6 nav-item"
          activeStyle={{ background: "#1947ee" }}
          to="/personality"
        >
          <i className="fa fa-user mr-3"></i>
          Personality Test
        </Link>
        <Link
          className="flex items-center text-white py-4 pl-6 nav-item"
          activeStyle={{ background: "#1947ee" }}
          to="/work"
        >
          <i className="fa fa-briefcase mr-3"></i>
          Work Values
        </Link>
        <Link
          className="flex items-center text-white py-4 pl-6 nav-item"
          activeStyle={{ background: "#1947ee" }}
          to="/career"
        >
          <i className="fa fa-laptop mr-3"></i>
          Career Aptitude
        </Link>
      </nav>
      <a
        href="https://knacklab.co"
        target="_blank"
        rel="noreferrer"
        className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
      >
        <i className="fa fa-arrow-circle-up mr-3"></i>
        For KnackLab ❤️
      </a>
    </aside>
  );
}
