import React, { useState, useEffect } from "react";
import { ContributeCard, GradientifyBanner } from "../components";
import axios from "axios";
import Newsletter from "./Newsletter";

const Contributors = () => {
  const [data, setData] = useState([]);

  const fetchContributors = () => {
    axios
      .get(
        "https://api.github.com/repos/singhnitin77/designerslobby/contributors",
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
      <div className="w-full h-full py-[80px] px-[60px] dark:bg-[#333333]">
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
