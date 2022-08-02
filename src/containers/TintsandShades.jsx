import React, { useState, useEffect } from "react";
import Values from "values.js";
import { SingleColor } from "../components";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const TintsandShades = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [shades, setShades] = useState(10);
  const [list, setList] = useState(new Values("#A8EB12").all(shades));

  console.log(shades);

  const handleChange = (e) => {
    e.preventDefault();
    setShades(e.target.value);
  };

  // useEffect(() => {
  //   setList(new Values("#f15025").all(shades));
  // }, [shades]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    // let colors = new Values(color).all(10);
    // console.log(colors);
    // console.log(color);

    try {
      let colors = new Values(color).all(shades);
      setList(colors);
      // console.log(colors);
    } catch (err) {
      setError(true);
      console.error(err);
      toast.error("Uh Oh! Wrong Input");
    }
  };

  return (
    <>
      <div className="md:px-[80px] py-[60px] px-[30px]">
        <div className="flex items-center md:flex-row flex-col gap-[44px]">
          <h3 className="font-Epilogue text-gradient-heading font-bold text-[28px]">
            Make Tints and Shades
          </h3>

          <form
            onSubmit={handleSubmit}
            action=""
            className="flex items-center md:flex-row flex-col justify-between gap-[44px]"
          >
            <input
              type="text"
              className="text-[24px] py-[12px] px-[12px] text-[#555] border border-gray-300 rounded-[8px] placeholder:font-Epilogue placeholder:font-light focus:outline-none font-medium focus:shadow-outline shadow appearance-none font-Epilogue"
              value={color}
              placeholder="#f15025"
              onChange={(e) => setColor(e.target.value)}
            />
            <button
              type="submit"
              className="text-white font-Epilogue text-[18px] font-semibold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none rounded-lg px-[24px] py-[12px] text-center mr-2 mb-2"
            >
              Generate
            </button>
          </form>
          <div
            className="h-[100px] w-[100px] rounded-md"
            style={{ backgroundColor: `${color}` }}
          ></div>
        </div>

        <div className="flex mt-[28px]">
          <input
            type="range"
            id="volume"
            name="volume"
            min="2"
            max="25"
            className="self-center block rounded-[8px] h-[15px] outline-none opacity-70 bg-[#DFE3E8] w-[50%]"
            value={shades}
            // onChange={(e) => setShades(e.target.value)}
            onChange={handleChange}
          />
          <span
            style={{ width: 60 }}
            className="self-center text-xl font-bold px-3 py-2 bg-gray-100 border text-center rounded ml-3"
          >
            {shades}
          </span>
        </div>
      </div>
      <section className="colors mb-[72px]">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default TintsandShades;

{
  /* <div className="w-full p-[2px] bg-app-gradient-2 mt-4 rounded-md">
  <form
    action=""
    className="bg-[#0a0719] flex duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-full items-center justify-between"
  >
    <input
      type="text"
      placeholder="bhatinitin04@gmail.com"
      className="h-full py-1 pl-1 w-full bg-transparent font-Epilogue placeholder:font-Epilogue text-white text-sm lg:text-base focus:outline-none appearance-none"
    />
    <div className="bg-[#764dff] p-2 lg:p-3 cursor:pointer shine rounded-lg text-sm lg:text-base">
      <FiSend
        className="text-white -ml-1"
        style={{ transform: "rotate(45deg" }}
      />
    </div>
  </form>
</div>;
 */
}
