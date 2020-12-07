export default function SideBar() {
  return (
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <a
            href="/"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            KnackLab
          </a>
          <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <a href="https://www.16personalities.com/" target="_blank" rel="noreferrer">
              <i className="fa fa-plus mr-3"></i>
            New Report
            </a>
          </button>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          <a
            href="/"
            className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
          >
            <i className="fa fa-tachometer mr-3"></i>
            Summary
          </a>
          <a
            href="/"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fa fa-sticky-note mr-3"></i>
            Personality Test
          </a>
          <a
            href="/"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fa fa-table mr-3"></i>
            Work Values
          </a>
          <a
            href="/"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fa fa-align-left mr-3"></i>
            Career Aptitude
          </a>
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
