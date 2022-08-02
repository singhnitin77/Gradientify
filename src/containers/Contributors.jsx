import React, { useState, useEffect } from "react";
import { ContributeCard, GradientifyBanner } from "../components";
import axios from "axios";
import Newsletter from "./Newsletter";

const Contributors = () => {
  const [data, setData] = useState([]);

  const fetchContributors = () => {
    axios
      .get(
        "https://api.github.com/repos/singhnitin77/gradientify/contributors",
        {
          headers: {},
        }
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchContributors();
  }, []);

  return (
    <>
      <GradientifyBanner />
      <div className="w-full h-full py-[72px] md:py-[80px] lg:py-[100px] px-[60px] dark:bg-[#333333]">
        <h1 className="text-[36px] md:text-[44px] w-full font-bold font-Epilogue text-center leading-[1.3] mb-[44px] md:mb-[66px] text-gradient-heading mx-auto md:w-7/12">
          Contributors
        </h1>
        <div className="grid lg:grid-cols-4 gap-x-4">
          {data.map((contributor, key) => {
            return <ContributeCard contributor={contributor} key={key} />;
          })}
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Contributors;
