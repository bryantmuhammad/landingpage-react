import React from "react";
import facebook from "./../images/facebook.png";
import medium from "./../images/medium.png";
import twitter from "./../images/twitter.png";
import navimage from "./../images/navimage.png";

const MainNavigation = () => {
  return (
    <div>
      <nav className="flex justify-between w-4/5 mx-auto my-14">
        <div className="flex items-end gap-3">
          <a href="google.com">
            <img src={twitter} />
          </a>
          <a>
            <img src={facebook} />
          </a>
          <a>
            <img src={medium} />
          </a>
        </div>
        <div className="flex gap-2">
          <svg
            width="35"
            height="42"
            viewBox="0 0 35 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 3511">
              <rect
                id="Rectangle 4"
                y="0.161987"
                width="9.45407"
                height="41.5979"
                rx="4.72703"
                fill="#6FCF97"
              />
              <path
                id="Rectangle 5"
                d="M13.2358 17.699C13.2358 15.3235 15.1616 13.3977 17.5371 13.3977C19.9126 13.3977 21.8383 15.3235 21.8383 17.699V29.1689C21.8383 31.5444 19.9126 33.4701 17.5371 33.4701C15.1616 33.4701 13.2358 31.5444 13.2358 29.1689V17.699Z"
                fill="#27AE60"
              />
              <rect
                id="Rectangle 7"
                x="13.2358"
                y="2.05283"
                width="8.60246"
                height="10.0362"
                rx="4.30123"
                fill="#27AE60"
              />
              <rect
                id="Rectangle 8"
                x="25.7773"
                y="15.7194"
                width="8.60246"
                height="10.0362"
                rx="4.30123"
                fill="#6FCF97"
              />
            </g>
          </svg>
          <p className="text-white mt-2 text-2xl font-medium">FINTECH</p>
        </div>

        <div>
          <img src={navimage} />
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
