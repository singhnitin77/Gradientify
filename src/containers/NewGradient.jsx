import React from "react";

// code editor components
// import "codemirror/lib/codemirror.css";
// import "codemirror/theme/material-palenight.css";
// import "codemirror/mode/xml/xml";
// import "codemirror/mode/javascript/javascript";
// import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";

const NewGradient = () => {
  let code = `
//   gradients.json
  {
  "colors": ["#3CA55C", "#B5AC49"]
   },`;

  return (
    <div className="px-[30px] md:px-[72px] lg:px-[80px] py-[72px] md:py-[80px] lg:py-[92px] w-full bg-[#F5F9FF]">
      <h1 className="text-[28px] md:text-[36px] font-bold font-Epilogue text-center leading-[1.3] mb-[54px] md:mb-[72px] text-gradient-heading mx-auto md:w-7/12">
        Add New Gradient
      </h1>
      <div className="w-full md:w-[60%] mx-auto">
        <p className="text-left text-[16px] text-[#5B6478] md:text-[18px] font-Epilogue font-medium">
          Adding a gradient to gradientify is easy. All gradients are loaded and
          rendered from a gradients.json file which is available in this
          project's repo. Simply add your gradient details to it and submit a
          pull request.
        </p>
        {/* <p className="text-left text-[16px] text-[#5B6478] md:text-[18px] font-Epilogue mt-[42px] font-medium">
          Adding a gradient to the library is super simple. All the gradients
          are loaded and rendered from a single gradients.json file in the root.
        </p> */}
        <p className="text-left text-[16px] text-[#5B6478] md:text-[18px] font-Epilogue mt-[42px] font-medium">
          To add your gradient, fork this repository, add your gradient colors
          in the HEX format along with a name to the end of the json file and
          submit a pull request. Don't forget the commas!
        </p>
        <p className="text-left text-[16px] text-[#5B6478] md:text-[18px] font-Epilogue mt-[42px] font-medium">
          After your PR got merged, you'll be automatically appeared on
          contributors page. Works through Github API.
        </p>

        <div className="w-full overflow-hidden rounded-md h-40 mt-[42px]">
          <CodeMirror
            value={code}
            options={{
              mode: "javascript",
              lineWrapping: true,
              theme: "material-palenight",
              lineNumbers: true,
            }}
          />
        </div>

        <div className="flex items-center justify-center mt-[24px]">
          <a href="https://github.com/singhnitin77/Gradientify" target="_blank">
            <button
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:outline-none font-medium font-Epilogue rounded-lg text-[18px] px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              <svg
                className="mr-2 -ml-1 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
              Add New Gradient
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewGradient;
