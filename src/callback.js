import React, { useState } from "react";
// this is a child component
const Callback = ({ getColor }) => {
  const [active, setActive] = useState(null);
  const handlecolor = (e) => {
    const { value } = e.target;
    setActive(value);
    getColor(value);
  };
  return (
    <input
      type="text"
      className="input"
      aria-label="input"
      placeholder="Enter any color"
      onChange={handlecolor}
      value={active}
    />
  );
};

export default Callback;
