import "./packages.css";
import SinglePackage from "./SinglePackage";
import { useGetPackageQuery } from "../../feature/package/packageApi";
import { useState } from "react";

const Packages = () => {
  const [showAll, setShowAll] = useState(false);
  const { data: packages, isLoading, isError } = useGetPackageQuery();

  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = <div>There was an error!!!</div>;
  } else if (!isLoading && !isError && packages?.length === 0) {
    content = <div>There was no Package Available</div>;
  } else if (!isLoading && !isError && packages?.length > 0) {
    const displayedPackages = showAll ? packages : packages.slice(0, 3);
    console.log(displayedPackages);
    content = displayedPackages.map((pack) => <SinglePackage pack={pack} />);
  }

  return (
    <section className="w-10/12 m-auto py-20 bg-[#F5FFFC]"
    >
      <div className="text-centers mb-8">
        <h1 className="title text-[#2ED89B] text-center text-4xl font-semibold uppercase">Our Most Popular Tours</h1>
        <p className="text-[#2D5527] text-center mt-2 uppercase">See our most popular tour packages this year</p>
      </div>
      <div
        className="grid grid-cols-3 row-auto gap-y-12 justify-items-center transition-height duration-500 ease-in-out"
        id="package"
      >
        {content}
      </div>

      <div className="mt-12 flex justify-center items-center transition-opacity duration-500 ease-in-out ">
        <a className="bg-[#FFCE0C] text-slate-100 px-6 py-2 rounded" onClick={() => setShowAll(!showAll)}>
          {showAll ? "ALL" : "More"}
        </a>
      </div>
    </section>
  );
};

export default Packages;
