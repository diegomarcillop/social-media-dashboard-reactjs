import React, { useState } from "react";

function Togle() {
  const onClick = () => {
    //    document.getElementById('card').classList.toggle('dark-mode')
  };
  return (
    <>
      <label className="switch">
        <input type="checkbox" onClick={onClick} />
        <span className="slider round" />
      </label>
    </>
  );
}
export default Togle;
