import React from "react";

const SpecialButton = (props) => {
  return (
    <button className='buttons special-buttons'>
      {props.specials}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
export default SpecialButton;