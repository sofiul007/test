import React from "react";

function TableData({ passenger, seatCount }) {
  const { traveler, name: packageName, paymentStatus } = passenger || {};
  

  return (
    <>
      <tr>
        <td className="py-1 px-2">{seatCount}</td>
        <td className="py-1 px-2"> {traveler.name} </td>
        <td className="py-1 px-2">{packageName}</td>
        <td className="py-1 px-2"> {paymentStatus ? "Paid" : "Pending"} </td>
      </tr>
    </>
  );
}

export default TableData;
