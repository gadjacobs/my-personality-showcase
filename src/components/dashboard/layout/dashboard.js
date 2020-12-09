import React from "react";
import SideBar from "./sidebar";
import Nav from "./nav";
import Footer from "./footer";
import Body from "../summary/body";
import Personality from "../personality/personality";
import Career from "../career/career";
import { Route, Switch } from "react-router-dom";
import Work from "../work/work";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <SideBar />
      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        <Nav />
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <Body {...props} title={"Gad's Profile Summarry"} />
              )}
              exact
            />
            <Route
              path="/personality"
              render={(props) => (
                <Personality {...props} title={"Gad's Personality Traits"} />
              )}
            />
            <Route
              path="/career"
              render={(props) => (
                <Career {...props} title={"Gad's Career Aptitude"} />
              )}
            />
            <Route
              path="/work"
              render={(props) => (
                <Work {...props} title={"Gad's Work Values"} />
              )}
            />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
  );
}
