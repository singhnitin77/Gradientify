import React, { useState, useEffect } from "react";
import axios from "axios";

// icons
import { FiGithub, FiLink, FiTwitter } from "react-icons/fi";

const ContributeCard = ({ contributor }) => {
  const [data, setData] = useState([]);

  const fetchContributor = () => {
    axios
      .get(`https://api.github.com/users/${contributor.login}`, {
        headers: {},
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchContributor();
  }, []);

  return (
    <div className="p-4 gradient-shadow bg-white m-3 rounded-[8px] transition duration-400 cursor-pointer text-[#222] dark:bg-[#222222] border dark:border-[#444]">
      <img
        src={`${contributor.avatar_url}&s=200`}
        alt={contributor.login}
        className="rouned-md w-full"
      />
      <h1 className="text-2xl font-semibold font-Epilogue mt-2 capitalize dark:text-[#fafafa]">
        {data.name ? data.name : contributor.login}
      </h1>
      <p className="text-[14px] leading-[1.15] h-[50px] font-Epilogue text-[#666] dark:text-[#ccc]">
        {data.bio ? data.bio : `${contributor.login} loves to Code`}
      </p>
      <div className="flex items-center pt-4">
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
        >
          <FiGithub className="text-[18px]" />
        </a>

        {data.twitter_username && (
          <a
            href={`https://twitter.com/${data.twitter_username}`}
            target="_blank"
            rel="noreferrer"
            className="ml-2 dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
          >
            <FiTwitter className="text-[18px]" />
          </a>
        )}
        {data.blog && (
          <a
            href={data.blog}
            target="_blank"
            rel="noreferrer"
            className="ml-2 dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
          >
            <FiLink className="text-[18px]" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ContributeCard;
