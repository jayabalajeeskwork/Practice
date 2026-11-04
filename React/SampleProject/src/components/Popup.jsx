
import { useEffect, useState } from "react";
import "./Popup.css";

function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="popup">
      <button onClick={() => setShow(false)}>X</button>
      <img src="/offer.png" alt="Offer" />
    </div>
  );
}

export default Popup;
