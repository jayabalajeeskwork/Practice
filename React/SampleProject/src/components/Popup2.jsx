import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Popup2.css";
function Popup2() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setShow(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {show && (
        <div className="popup">
          <button onClick={() => setShow(false)}>
            <i className="bi bi-x"></i>
          </button>
          <img src="./offer.png"></img>
        </div>
      )}
    </>
  );
}

export default Popup2;
