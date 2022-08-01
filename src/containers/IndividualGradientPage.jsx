import React, { forwardRef, useEffect, useRef, useState } from "react";

// material ui
import { Button, Tooltip } from "@mui/material";
import {
  exportComponentAsPNG,
  exportComponentAsJPEG,
  exportComponentAsPDF,
} from "react-component-export-image";

// react hot toast
import toast from "react-hot-toast";

// react router
import { useParams } from "react-router-dom";

// code editor components
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";

// icons
import {
  BsBookmarkCheck,
  BsBookmarkPlus,
  BsCode,
  BsDownload,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";

import { Loading } from "../components";
import { useGlobalContext } from "../context/Context";
import { useGradient } from "../context/GradientContext";
// import { gradients } from "../utility/gradients";

const IndividualGradientPage = ({ savedGradients, setSavedGradients }) => {
  const { align, rotate } = useGlobalContext();
  const { gradients } = useGradient();

  // const [gradient, setGradient] = useState([]);

  const [isBookMarked, setIsBookMarked] = useState(false);

  let params = useParams();
  const componentRef = useRef();

  //   getting gradient id from the params
  const gradientId = params.id;
  // console.log(useParams());
  // const { id } = useParams();
  // console.log(id);
  console.log(gradientId);

  const gradient = gradients.find(
    (gradientobj) => gradientobj.id === Number(gradientId)
  );

  console.log(gradient);

  const ComponentToPrint = forwardRef((props, ref) => (
    <div
      className="h-[400px] w-[200px] lg:h-[1200px] lg:w-[630px] overflow-hidden absolute z-[-10]"
      ref={ref}
      style={{
        height: "630px",
        width: "1200px",
        background: `linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]})`,
      }}
    ></div>
  ));

  // copy single color to clipboard
  const copySingleColor = (color) => {
    navigator.clipboard.writeText(color);
    toast.success("Copied to clipboard");
  };

  let code =
    gradient.colors &&
    `background: ${gradient.colors[0]};  \nbackground: -webkit-linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]});  \nbackground: linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]}); `;

  let textCSS =
    gradient.colors &&
    `background: -webkit-linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]});  
     background: linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]});
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;`;

  // copy CSS
  const copyCSS = () => {
    navigator.clipboard.writeText(code);
    toast.success("Copied to clipboard!");
  };

  const copytextCSS = () => {
    navigator.clipboard.writeText(textCSS);
    toast.success("Copied to clipboard!");
  };

  const saveGradient = () => {
    if (isBookMarked) {
      setSavedGradients(
        savedGradients.filter(
          (savedGradient) => savedGradient.id !== gradientId
        )
      );
      // toast
      toast.success("Removed Gradient from Saved!");
    } else {
      setSavedGradients([
        ...savedGradients,
        {
          id: gradientId,
          colors: gradient.colors,
        },
      ]);
      // toast
      toast.success("Saved Gradient!");
    }
  };

  const fetchSavedGradients = () => {
    if (
      savedGradients.some((savedGradient) => savedGradient.id === gradientId)
    ) {
      setIsBookMarked(true);
    } else {
      setIsBookMarked(false);
    }
  };

  useEffect(() => {
    fetchSavedGradients();
  });

  return (
    // <div className="flex items-center justify-center h-full lg:h-[87vh] w-full">
    //   {/* <ComponentToPrint ref={componentRef} /> */}
    //   <div
    //     style={{
    //       background: `linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]})`,
    //     }}
    //     className="w-11/12 lg:w-[85%] h-full lg:h-[85%] flex items-center justify-center rounded-md gradient-shadow py-10 lg:py-0"
    //   >
    //     <div className="py-8 rounded-md w-11/12 lg:w-8/12 flex items-start justify-center flex-col px-6 bg-white gradient-shadow dark:bg-[#333] border dark:border-[#444]">
    //       <div className="flex items-center">
    //         <Tooltip title={`Copy ${gradient.colors[0]}`}>
    //           <h3
    //             className="text-xl lg:text-4xl font-bold cursor-pointer font-Epilogue"
    //             onClick={() => copySingleColor(gradient.colors[0])}
    //             style={{ color: `${gradient.colors[0]}` }}
    //           >
    //             {gradient.colors[0]}
    //           </h3>
    //         </Tooltip>

    //         <Tooltip title={`Copy ${gradient.colors[1]}`}>
    //           <h3
    //             className="text-xl lg:text-4xl font-bold ml-1 cursor-pointer font-Epilogue"
    //             onClick={() => copySingleColor(gradient.colors[1])}
    //             style={{ color: `${gradient.colors[1]}` }}
    //           >
    //             {gradient.colors[1]}
    //           </h3>
    //         </Tooltip>
    //       </div>

    //       <div className="w-full overflow-hidden rounded-md h-40 mt-2">
    //         <CodeMirror
    //           value={code}
    //           options={{
    //             mode: "css",
    //             lineWrapping: true,
    //             theme: "material-palenight",
    //             lineNumbers: true,
    //           }}
    //         />
    //       </div>

    //       <div className="flex items-center justify-center mt-2 flex-wrap">
    //         <Tooltip title="Copy CSS">
    //           <div
    //             className="overflow-hidden flex items-center justify-center rounded-md border border-[#eee] bg-gray-100 transition duration-500 hover:bg-gray-200 dark:border-[#555] dark:bg-[#181718]"
    //             onClick={copyCSS}
    //           >
    //             <Button className="btn">
    //               <div className="w-40 h-9 flex items-center justify-center overflow-hidden">
    //                 <BsCode className="text-[1.5rem] dark:text-[#fafafa]" />
    //                 <h3 className="ml-1 text-sm lg:text-lg font-semibold font-Epilogue capitalize dark:text-[#fafafa]">
    //                   Copy Code
    //                 </h3>
    //               </div>
    //             </Button>
    //           </div>
    //         </Tooltip>

    //         <Tooltip title="Save Gradient">
    //           <div
    //             className="overflow-hidden ml-2 flex items-center justify-center rounded-md border border-[#eee] bg-gray-100 transition duration-500 hover:bg-gray-200 dark:border-[#555] dark:bg-[#181718]"
    //             onClick={saveGradient}
    //           >
    //             <Button className="btn">
    //               <div className="w-40 h-9 flex items-center justify-center overflow-hidden">
    //                 {isBookMarked ? (
    //                   <BsBookmarkCheck className="text-[1.3rem] text-[#fec821]]" />
    //                 ) : (
    //                   <BsBookmarkPlus className="text-[1.3rem] dark:text-[#fafafa]" />
    //                 )}

    //                 {isBookMarked ? (
    //                   <h3 className="ml-1 text-sm lg:text-lg font-semibold capitalize text-[#fec821] font-Epilogue">
    //                     Saved
    //                   </h3>
    //                 ) : (
    //                   <h3 className="ml-1 text-sm lg:text-lg font-semibold capitalize font-Epilogue dark:text-[#fafafa]">
    //                     Save Gradient
    //                   </h3>
    //                 )}
    //               </div>
    //             </Button>
    //           </div>
    //         </Tooltip>

    //         <Tooltip title="Download Gradient">
    //           <div
    //             // onClick={() =>
    //             //   exportComponentAsPNG(componentRef, {
    //             //     fileName: "gradient.png",
    //             //   })
    //             // }
    //             className="overflow-hidden flex items-center justify-center rounded-md border border-[#eee] bg-gray-100 transition duration-500 hover:bg-gray-200 ml-2 dark:border-[#555] dark:bg-[#181718]"
    //           >
    //             <Button className="btn">
    //               <div className="w-40 h-9 flex items-center justify-center overflow-hidden">
    //                 <BsDownload className="text-[1.3rem] dark:text-[#fafafa]" />
    //                 <h3 className="ml-1 text-sm lg:text-lg font-semibold font-Epilogue capitalize dark:text-[#fafafa]">
    //                   Download
    //                 </h3>
    //               </div>
    //             </Button>
    //           </div>
    //         </Tooltip>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="">
      <div className="">{/* <ComponentToPrint ref={componentRef} /> */}</div>
      <div className="h-full lg:h-[87vh] w-full flex items-center justify-center">
        <div
          style={{
            background: `linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]})`,
          }}
          className="w-11/12 lg:w-[85%] h-[50vh] lg:h-[85%] flex items-center justify-center rounded-md gradient-shadow py-10 lg:py-0"
        ></div>
      </div>
      <div className="py-8 rounded-md w-11/12 lg:w-8/12 mx-auto mb-[44px] flex items-start justify-center flex-col px-6 bg-white gradient-shadow dark:bg-[#333] border dark:border-[#444]">
        <div className="flex items-center gap-3 mb-[12px]">
          <Tooltip title={`Copy ${gradient.colors[0]}`}>
            <div
              className="font-medium w-[40px] h-[40px] rounded-[50%]"
              onClick={() => copySingleColor(gradient.colors[0])}
              style={{ background: `${gradient.colors[0]}` }}
            ></div>
          </Tooltip>

          <Tooltip title={`Copy ${gradient.colors[1]}`}>
            <div
              className="font-medium w-[40px] h-[40px] rounded-[50%]"
              onClick={() => copySingleColor(gradient.colors[1])}
              style={{ background: `${gradient.colors[1]}` }}
            ></div>
          </Tooltip>

          <Tooltip title={`Copy ${gradient.colors[2]}`}>
            <div
              className="font-medium w-[40px] h-[40px] rounded-[50%]"
              onClick={() => copySingleColor(gradient.colors[2])}
              style={{ background: `${gradient.colors[2]}` }}
            ></div>
          </Tooltip>
        </div>
        <div className="w-full overflow-hidden rounded-md h-40 mt-2">
          <CodeMirror
            value={code}
            options={{
              mode: "css",
              lineWrapping: true,
              theme: "material-palenight",
              lineNumbers: true,
            }}
          />
        </div>

        <div className="flex items-center gap-5 mt-[24px]">
          <Tooltip title="Copy CSS">
            <div
              onClick={copyCSS}
              className="overflow-hidden cursor-pointer flex items-center justify-center transition duration-300 dark:text-white"
            >
              <div className="flex items-center justify-center overflow-hidden">
                <h1 className="font-Epilogue text-[18px] continuous-line font-medium">
                  Copy CSS
                </h1>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="Rotate Gradient">
            <div
              onClick={rotate}
              className="overflow-hidden cursor-pointer flex items-center justify-center transition duration-300 dark:text-white"
            >
              <div className="flex items-center justify-center overflow-hidden">
                <h1 className="font-Epilogue text-[18px] continuous-line font-medium">
                  Rotate Gradient
                </h1>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="Copy Text CSS">
            <div
              onClick={copyCSS}
              className="overflow-hidden cursor-pointer flex items-center justify-center transition duration-300 dark:text-white"
            >
              <div className="flex items-center justify-center overflow-hidden">
                <h1 className="font-Epilogue text-[18px] continuous-line font-medium">
                  Copy Text CSS
                </h1>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="Save Gradient">
            <div
              className="overflow-hidden cursor-pointer flex items-center justify-center rounded-md border border-[#eee] bg-gray-100 transition duration-500 hover:bg-gray-200 dark:border-[#555] dark:bg-[#181718]"
              onClick={saveGradient}
            >
              <div className="w-40 h-9 flex items-center justify-center overflow-hidden">
                {isBookMarked ? (
                  <BsBookmarkCheck className="text-[1.3rem] text-[#fec821]]" />
                ) : (
                  <BsBookmarkPlus className="text-[1.3rem] dark:text-[#fafafa]" />
                )}

                {isBookMarked ? (
                  <h3 className="ml-1 text-sm lg:text-lg font-semibold capitalize text-[#fec821] font-Epilogue">
                    Saved
                  </h3>
                ) : (
                  <h3 className="ml-1 text-sm lg:text-lg font-semibold capitalize font-Epilogue dark:text-[#fafafa]">
                    Save Gradient
                  </h3>
                )}
              </div>
            </div>
          </Tooltip>

          <Tooltip title="Download Gradient">
            <div
              onClick={() =>
                exportComponentAsPNG(componentRef, {
                  fileName: "gradient.png",
                })
              }
              className="overflow-hidden cursor-pointer flex items-center justify-center rounded-md border border-[#eee] bg-gray-100 transition duration-500 hover:bg-gray-200 dark:border-[#555] dark:bg-[#181718]"
            >
              <div className="w-40 h-9 flex items-center justify-center overflow-hidden">
                <BsDownload className="text-[1.3rem] dark:text-[#fafafa]" />
                <h3 className="ml-1 text-sm lg:text-lg font-semibold font-Epilogue capitalize dark:text-[#fafafa]">
                  Download
                </h3>
              </div>
            </div>
          </Tooltip>
        </div>
      </div>

      <h1
        className="text-[60px] text-center font-black text-Epilogue text-gradient mb-[80px]"
        style={{
          backgroundImage: `linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]})`,
        }}
      >
        Gradientify
      </h1>
    </div>
  );
};

export default IndividualGradientPage;
