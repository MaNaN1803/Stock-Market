import React from "react";
import featureimg from "./Features.png";

function Aboutpage() {
  return (
    <div>
      {/* style={{ height: "720px" }} */}
      <div className="container">
        <div className="Features1">
          <div className="co" style={{ paddingBottom: "2%" }}>
            <h1 style={{ alignItems: "center", color: "white" }}>
              OUR FEATURES
            </h1>
          </div>

          <div className="logo1" style={{ height: "720px" }}>
            <img
              src={featureimg}
              alt=""
              style={{ height: "93%", width: "98%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
