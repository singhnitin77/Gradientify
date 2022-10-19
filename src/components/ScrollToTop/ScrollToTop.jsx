import React, { useEffect, useState} from "react"
import {FaArrowAltCircleUp} from 'react-icons/fa';
import "./index.scss"
  
const ScrollToTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const handleVisibleButton = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else{
      setVisible(false)
    }
  };
  
  const handleScrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);

    return ()=> window.removeEventListener('scroll',handleVisibleButton);
    });

  
  return (
    <div className="scroll_top" style={{display: visible ? 'inline' : 'none'}} >
     <FaArrowAltCircleUp className="scroll_top__button" onClick={handleScrollToTop}  />
    </div>
    
  );
}
  
export default ScrollToTop;

