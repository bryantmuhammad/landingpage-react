import MainNavigation from "./components/MainNavigation";
import Person from "./components/Person";
function App() {
  return (
    <div>
      <MainNavigation />
      <main className="relative">
        <div className="absolute left-0">
          <svg
            width="409"
            height="687"
            viewBox="0 0 409 687"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M275.117 174.125C-60.0647 -119.596 -178.262 45.4697 -186.528 58.0501C-186.874 58.577 -186.997 59.1239 -186.991 59.7544L-183.061 482.638C-181.901 607.457 -81.271 709.781 40.5524 682.575C179.056 651.644 341.425 580.378 397.401 416.846C451.187 259.713 301.966 197.652 275.117 174.125Z"
              fill="#6FCF97"
            />
          </svg>
        </div>
        <div className="flex justify-between px-[11.5rem]">
          <div className="flex flex-col justify-center text-white gap-7 ">
            <h3 className="font-bold text-[#D2D2D2] text-5xl text-left">
              Mutual Investment
            </h3>
            <p className="text-[#A9A9A9] text-2xl font-normal">
              At Finance we care about your future. We help you invest the way
              you want. So you can relax, have fun and let your fund grow.
            </p>

            <button className="cursor-pointer bg-[#27AE60] w-[241px] h-14 rounded-[55px] text-base font-semibold mt-10 border-b-2 ">
              Learn More
            </button>
          </div>

          <form>
            <div className="flex justify-center items-end pb-12">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8202 18.9131L12.4666 18.5595L11.7595 19.2666L12.1131 19.6202L12.8202 18.9131ZM17 23.8L16.6464 24.1535L17 24.5071L17.3535 24.1535L17 23.8ZM21.8868 19.6202L22.2404 19.2666L21.5333 18.5595L21.1797 18.9131L21.8868 19.6202ZM1.1333 17L0.633301 17L1.1333 17ZM17 1.1333L17 0.633301L17 1.1333ZM17 32.8666L17 32.3666L17 32.8666ZM32.8666 17L32.3666 17L32.8666 17ZM12.1131 19.6202L16.6464 24.1535L17.3535 23.4464L12.8202 18.9131L12.1131 19.6202ZM17.3535 24.1535L21.8868 19.6202L21.1797 18.9131L16.6464 23.4464L17.3535 24.1535ZM17.5 23.8L17.5 9.06663L16.5 9.06663L16.5 23.8L17.5 23.8ZM1.6333 17C1.6333 8.51319 8.51319 1.6333 17 1.6333L17 0.633301C7.9609 0.6333 0.633301 7.9609 0.633301 17L1.6333 17ZM17 32.3666C8.51319 32.3666 1.6333 25.4867 1.6333 17L0.633301 17C0.6333 26.039 7.9609 33.3666 17 33.3666L17 32.3666ZM32.3666 17C32.3666 25.4867 25.4867 32.3666 17 32.3666L17 33.3666C26.039 33.3666 33.3666 26.039 33.3666 17L32.3666 17ZM33.3666 17C33.3666 7.96091 26.039 0.633301 17 0.633301L17 1.6333C25.4867 1.6333 32.3666 8.51319 32.3666 17L33.3666 17Z"
                  fill="#27AE60"
                />
              </svg>
            </div>
          </form>
          <div>
            <Person />
          </div>
        </div>
        <div className="absolute bottom-[-31px]">
          <svg
            width="474"
            height="228"
            viewBox="0 0 474 228"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.91" filter="url(#filter0_d_1_3569)">
              <path
                d="M298.447 163.115C55.6277 -49.6229 -31.7042 66.3275 -39.429 77.783C-39.8513 78.4093 -39.9964 79.0634 -39.9894 79.8188L-38.082 284.999C-36.6919 434.544 88.6374 563.867 225.543 503.679C295.772 472.804 360.03 422.552 388.005 340.842C427.397 225.785 318.11 180.342 298.447 163.115Z"
                fill="#FFFF"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_3569"
                x="-75.9559"
                y="0.0338192"
                width="549.293"
                height="595.581"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="20.4354" dy="20.4354" />
                <feGaussianBlur stdDeviation="28.2009" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_3569"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_3569"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-[-33px]">
          <svg
            width="474"
            height="228"
            viewBox="0 0 474 228"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.91" filter="url(#filter0_d_1_3569)">
              <path
                d="M298.447 163.115C55.6277 -49.6229 -31.7042 66.3275 -39.429 77.783C-39.8513 78.4093 -39.9964 79.0634 -39.9894 79.8188L-38.082 284.999C-36.6919 434.544 88.6374 563.867 225.543 503.679C295.772 472.804 360.03 422.552 388.005 340.842C427.397 225.785 318.11 180.342 298.447 163.115Z"
                fill="#6FCF97"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_3569"
                x="-75.9559"
                y="0.0338192"
                width="549.293"
                height="595.581"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="20.4354" dy="20.4354" />
                <feGaussianBlur stdDeviation="28.2009" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_3569"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_3569"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </main>
    </div>
  );
}

export default App;
