import React from "react";

function Seat({ isBooked, label }) {
  return (
        <button className={`bg-[#${isBooked ? "7ECC71" : "F3BCBC"}] px-4 py-2 flex justify-center items-center`}>
          {label}
        </button>
  );
}

export default Seat;
