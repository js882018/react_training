import React, { useState } from "react";

const Randomtexts = () => {
  const [randomText, setRandomText] = useState("");

  const generateRandomText = () => {
    setRandomText(Math.random().toString(36).substring(2, 15));
  };

  return (
    <div>
      <h2>Random Text</h2>
      <button onClick={generateRandomText}>Generate Random Text</button>
      <p>{randomText}</p>
    </div>
  );
};

export default Randomtexts;
