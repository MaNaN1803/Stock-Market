import React, { useState } from "react";
import photo from "./home2.jpg";
function Homepage() {
  return (
    <div>
      <div className="homepage-section">
        <div className="background-image"></div>
        <div className="content">
          <h1>
            WELCOME TO , PULSE STOCK <br />
          </h1>
          <h1>PREDICT... INVEST... GAIN</h1>
          <p>
            Unlock the secrets of stock market Success with Pulsestock's <br />{" "}
            advanced prediction platform.
          </p>
          <button>
            <a
              href="#predi"
              style={{
                color: "white",
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              START PREDICTING NOW
            </a>
          </button>
          <div className="">
            <img
              src={photo}
              alt=""
              style={{ width: "68%", height: "72%", marginTop: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
