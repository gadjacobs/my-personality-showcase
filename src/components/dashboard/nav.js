import 'alpinejs';

export default function Nav() {
  const navBar = `
  <!-- Desktop Header -->
  <header class="w-full flex items-center bg-white py-2 px-6 hidden sm:flex">
      <div class="w-1/2"></div>
      <div x-data="{ isOpen: false }" class="relative w-1/2 flex justify-end">
          <button @click="isOpen = !isOpen" class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
              <img src="https://avatars0.githubusercontent.com/u/13969732?s=460&u=b5d6f924e9abb2013e7b26a8973009d81f6c43ac&v=4">
          </button>
          <button x-show="isOpen" @click="isOpen = false" class="h-full w-full fixed inset-0 cursor-default"></button>
          <div x-show="isOpen" class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
              <a href="#" class="block px-4 py-2 account-link hover:text-white">Account</a>
              <a href="#" class="block px-4 py-2 account-link hover:text-white">Support</a>
              <a href="#" class="block px-4 py-2 account-link hover:text-white">Sign Out</a>
          </div>
      </div>
  </header>

  <!-- Mobile Header & Nav -->
  <header x-data="{ isOpen: false }" class="w-full bg-sidebar py-5 px-6 sm:hidden">
      <div class="flex items-center justify-between">
          <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">KnackLab</a>
          <button @click="isOpen = !isOpen" class="text-white text-3xl focus:outline-none">
              <i x-show="!isOpen" class="fa fa-bars"></i>
              <i x-show="isOpen" class="fa fa-times"></i>
          </button>
      </div>

      <!-- Dropdown Nav -->
      <nav :class="isOpen ? 'flex': 'hidden'" class="flex flex-col pt-4">
          <a href="index.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i class="fa fa-tachometer mr-3"></i>
              Summary
          </a>
          <a href="blank.html" class="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
              <i class="fa fa-sticky-note mr-3"></i>
              Personality test
          </a>
          <a href="tables.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i class="fa fa-table mr-3"></i>
              Work Values
          </a>
          <a href="forms.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i class="fa fa-align-left mr-3"></i>
              Career Aptitude
          </a>

          <button class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <a
          href="https://knacklab.co"
          target="_blank"
          rel="noreferrer"
          className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
        >
          <i className="fa fa-arrow-circle-up mr-3"></i>
          For KnackLab ❤️
        </a>
          </button>
      </nav>
  </header>

`;

const NavBar = () => (
    <div dangerouslySetInnerHTML={{__html: navBar}} />
  );

  return(
      <NavBar />
  );
}
