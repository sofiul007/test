import React, { useState } from "react";
import { useGetRouteQuery } from "../../feature/optimaization/optimizationApi";

function SeatOptimiz({ p }) {
  const { id } = p || {};
  const [request, setRequest] = useState(true);
  const [routes, setRoutes] = useState([]);
  const { data, isLoading, isError } = useGetRouteQuery(
    { routes, id },
    {
      skip: request,
    }
  );

  const handleOptimize = () => {
    let totalSeat = parseInt(p.seatPerBus) * parseInt(p.totalBus);

    if (totalSeat > parseInt(p.totalPassenger)) {
      setRoutes(p.route);
      setRequest(false);
    }
  };
  return (
    <>
      <div className="my-12 text-md">
        <button className="btn bg-green-500 px-8 py-1 uppercase rounded-sm" onClick={handleOptimize}>
          Optimize Seat
        </button>
      </div>
    </>
  );
}

export default SeatOptimiz;
