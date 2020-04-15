import React from "react";

function Togle() {

   const onClick = (evt) => {
       console.log(evt);
   } 

  return (
    <> 
      <label className="switch">
        <input type="checkbox"  onClick={onClick} />
        <span className="slider round" />
      </label>
    </>
  );
}
export default Togle;
