import React, { useState, useMemo } from "react";
import "./admin.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useGetPackageQuery } from "../../feature/package/packageApi";
import { useGetBookingQuery } from "../../feature/booking/bookingApi";
import TableData from "./TableData";
import SeatPlan from "./SeatPlan";

import Seat from "./Seat";
import Package from "./Package";

const Admin = () => {
  const [toggle, setToggle] = useState(false);
  const [request, setRequest] = useState(true);
  const [name, setName] = useState("");
  const { data: packages, isLoading: loadingPackage, isError: pacageError } = useGetPackageQuery();
  const {
    data: passengers,
    isLoading,
    isError,
  } = useGetBookingQuery(name, {
    skip: request,
  });

  const toggleHandle = (event) => {
    setName(event.target.textContent);
    setRequest(false);

    setToggle(!toggle);
  };

  // package content

  let packageContent = null;

  if (isLoading) {
    packageContent = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    packageContent = <div>There was an error!!!</div>;
  } else if (!isLoading && !isError && packages?.length === 0) {
    packageContent = <div>There was no Package Available</div>;
  } else if (!isLoading && !isError && packages?.length > 0) {
    packageContent = packages.map((p) => {
      return <Package p={p} />;
    });
  }

  return (
    <div>
      <Header />
      <section className="banner text-6xl font-bold text-slate-100">
        <span className="admin_title">Welcome Admin</span>
      </section>

      <main>
        <div>
          <Link to="/addPackage">
            <button>Add Package</button>
          </Link>
        </div>

        <section className="mt-12 mb-16 bg-[#fff]">
          <div className="px-24">
            <div className="uppercase text-center py-6">
              <h1 className="text-2xl text-[#2ED89B]">Active Packages</h1>
              <p className="text-[8px]">Click to view detials</p>
            </div>
            {packageContent}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
