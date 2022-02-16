import React, { useState } from "react";

const Cash = () => {
  const [value, setValue] = useState(420);
  return (
    // <div>
    //   <p>Cash: {value}</p>
    //   <button
    //     onClick={() => {
    //       setValue(value + 1);
    //     }}
    //   >
    //     Click
    //   </button>
    // </div>
    <p>{value} </p>
  );
};

export default Cash;
