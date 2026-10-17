import React, { useState, useEffect } from "react";

function Train() {
  const [localTrains, setLocalTrains] = useState("");
  const [expressTrains, setExpressTrains] = useState("");

  const LOCALTRAINS = ["Chennai to Chengalpattu", "Chengalpattu to Chennai"];

  function localTrainsFunc() {
    let index = 0;

    const interval = setInterval(() => {
      setLocalTrains(LOCALTRAINS[index]);

      index = (index + 1) % LOCALTRAINS.length;
    }, 10000);

    return interval;
  }

  useEffect(() => {
    const interval = localTrainsFunc();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <h1>Chengalpattu Train Details</h1>

        <div>
          <p>Local Trains</p>
          <p>{localTrains || "Waiting for train details..."}</p>
        </div>

        <div>
          <p>Express Trains</p>
          <p>{expressTrains}</p>
        </div>
      </div>
    </>
  );
}

export default Train;
