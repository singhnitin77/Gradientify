import React, { useState, useEffect } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="w-[80%] mx-auto rounded-[20px]">
      <div className="bg-cover bg-no-repeat bg-center bg-image rounded-[20px]">
        <div className="px-[80px] py-[92px]">
          <h1 className="text-white text-center font-Epilogue lg:text-[40px] font-bold">
            Never Miss Out on Our New Products
          </h1>
          <form
            className="w-full mt-[64px]"
            // onSubmit={handleSubmit}
          >
            <div className="flex justify-between gap-2 items-center">
              <input
                type="email"
                className="w-[80%] text-[24px] py-[12px] px-[16px] border border-gray-300 rounded-[10px] placeholder:font-Epilogue placeholder:font-light focus:outline-none font-medium focus:shadow-outline shadow appearance-none font-Epilogue"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
              <div className="">
                <button className="bg-[#F5BA31] hover:bg-[#f7c85a] text-[#191925] font-Epilogue text-[22px] shine font-bold outline-none cursor-pointer flex items-cener justify-center px-[26px] py-[13px] rounded-[12px]">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
