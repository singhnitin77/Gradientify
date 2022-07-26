import React, { useState } from "react";
import Values from "values.js";
import { SingleColor } from "../components";
import toast from "react-hot-toast";

const TintsandShades = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [shades, setShades] = useState(10);
  const [list, setList] = useState(new Values("#f15025").all(shades));

  console.log(shades);

  const handleChange = (e) => {
    e.preventDefault();
    setShades(e.target.value);
  };

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
      <div className="px-[80px] py-[60px]">
        <div className="flex items-center gap-[44px]">
          <h3 className="font-Epilogue font-semibold text-[24px]">
            Make Tints and Shades
          </h3>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex items-center gap-[44px]"
          >
            <input
              type="text"
              className="text-[24px] py-[12px] px-[12px] border border-gray-300 rounded-[8px] placeholder:font-Epilogue placeholder:font-light focus:outline-none font-medium focus:shadow-outline shadow appearance-none font-Epilogue"
              value={color}
              placeholder="#f15025"
              onChange={(e) => setColor(e.target.value)}
            />
            <button className="btn" type="submit">
              Submit
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
            class="self-center text-xl font-bold px-3 py-2 bg-gray-100 border text-center rounded ml-3"
          >
            {shades}
          </span>
        </div>
      </div>
      <section className="colors">
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
