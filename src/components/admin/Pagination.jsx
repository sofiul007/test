import React from "react";
import { Link } from "react-router-dom";

function Pagination({currentPage, totalPage, setCurrentPage}) {
  const pages = Array.from({ length: totalPage }, (x, i) => i + 1);
  console.log(totalPage,currentPage);

  return (
    <div className="flex gap-4 text-slate-50">
      {pages.map((number) => {
        return (
          <React.Fragment key={number}>
            <Link to={`/admin`}>
              <div
                className={`${currentPage === number ? "bg-[#7ECC71]" : " bg-[#D9D9D9]"} px-4 py-2"`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </div>
            </Link>
          </React.Fragment>
        );
      })}
      {/* <div className="bg-[#7ECC71] px-4 py-2">1</div>
      <div className="bg-[#D9D9D9] px-4 py-2">2</div>
      <div className="bg-[#D9D9D9] px-4 py-2">3</div> */}
    </div>
  );
}

export default Pagination;
