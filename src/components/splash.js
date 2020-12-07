import React from "react";
import ReactLoading from "react-loading";

export default function Splash() {
  return (
    <div className="splash-bg flex text-white text-xl flex-wrap justify-center content-center">
      <div>
        <h1>Please wait a moment while we generate Gad Jacobs report 😊</h1> <br />
        <ReactLoading className="mx-auto text-center" type="spin" color="#fff" />
      </div>
    </div>
  );
}
