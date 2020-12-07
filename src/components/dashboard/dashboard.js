import React from "react";
import SideBar from "./sidebar";
import Nav from "./nav";
import Footer from "./footer";
import Body from "./body";
export default function Dashboard() {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <SideBar />
      <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <Nav />
      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <Body />
        <Footer />
      </div>
      </div>
    </div>
  );
}
