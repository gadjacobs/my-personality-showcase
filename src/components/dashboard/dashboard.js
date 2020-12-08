import React from "react";
import SideBar from "./sidebar";
import Nav from "./nav";
import Footer from "./footer";
import Body from "./body";
import Personality from "./personality";
import Career from "./career";
import { Route, Switch } from "react-router-dom";
import Work from "./work";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <SideBar />
      <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
        <Nav />
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <Switch>
            <Route path="/" component={Body} exact />
            <Route path="/personality" component={Personality} />
            <Route path="/career" component={Career} />
            <Route path="/work" component={Work} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
  );
}
