import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import ConfettiGenerator from "confetti-js";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const confettiSettings = { target: "my-canvas", max: "200" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  });

  //submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("/email", {
        email,
      })
      .then((res) => {
        console.log(res);
        toast.success("Successfully saved");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email already saved");
      });
  };

  return (
    <div className="hero-container4 h-auto w-full px-[25px]">
      <div className="h-auto min-h-[50vh] w-full rounded-md flex items-center justify-center flex-wrap flex-col relative overflow-hidden">
        <canvas id="my-canvas" className="absolute"></canvas>
        <h1 className="text-white text-2xl lg:text-4xl font-bold font-Epilogue relative mb-[18px] animate__animated animate__fadeInUp">
          Never Miss out on Our Next Products
        </h1>
        <p className="text-xs lg:text-[18px] text-[#aaa] text-center font-Epilogue lg:text-left relative">
          Would You Like To Know About Our Next Product & Free Tools Like This?
        </p>
        <div className="w-11/12 lg:w-6/12 relative animate__animated animate__fadeInUp">
          <div className="w-full p-[2px] bg-app-gradient-2 mt-4 rounded-md">
            <form
              action=""
              className="bg-[#f0eef9] flex duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-full items-center justify-between"
              onSubmit={submitHandler}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-full py-1 pl-1 w-full bg-transparent font-Epilogue placeholder:font-Epilogue  text-sm lg:text-base focus:outline-none appearance-none"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="bg-[#764dff] p-2 lg:p-3 cursor:pointer shine rounded-lg text-sm lg:text-base">
                <FiSend
                  className="text-white -ml-1"
                  style={{ transform: "rotate(45deg" }}
                />
              </div>
            </form>
          </div>
          <h3 className="bg-text-gradient font-semibold mb-2 uppercase mt-2 tracking-wider text-sm lg:text-base">
            We don’t spam, only updates & new products!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
