import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const GradientContext = createContext({});

export const useGradient = () => useContext(GradientContext);

export const GradientContextProvider = ({ children }) => {
  const [gradients, setGradients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await axios
        .get("/gradient/")
        .then((res) => {
          setGradients(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };
    init();
  }, []);

  return (
    <GradientContext.Provider value={{ gradients, loading }}>
      {children}
    </GradientContext.Provider>
  );
};
