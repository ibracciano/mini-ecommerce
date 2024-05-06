// import React from 'react'

import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Sort = () => {
  const data = useLoaderData();
  const tabA = data.sort((a, b) => {
    return a.price - b.price;
  });
  //   console.log(tabA);

  const tabB = [...tabA].reverse();

  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("state")) || ""
  );

  function Lth() {
    setState("lth");
  }
  function Htl() {
    setState("htl");
  }

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div className="py-20 dark:bg-slate-900">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="flex items-center justify-center gap-5 bg-purple-600 py-1 md:w-[40%] rounded-md text-white md:ml-[60%] mt-5">
          <p className="space-x-2">
            <span
              onClick={Lth}
              className={`inline-block w-3 h-3 border-2 rounded-full ${
                state === "lth" ? "bg-blue-500" : ""
              }`}
            ></span>
            <span htmlFor="lth">Price Low to Hight</span>
          </p>
          <p className="space-x-2">
            <span
              onClick={Htl}
              className={`inline-block w-3 h-3 border-2 rounded-full ${
                state === "htl" ? "bg-blue-500" : ""
              }`}
            ></span>
            <span htmlFor="lth">Price Hight to Low </span>
          </p>
        </div>
      </div>
      {state === "" ? (
        <p className="flex items-center justify-center my-[180px] md:my-40 dark:text-white">
          Nothing to display, please make a selection
        </p>
      ) : state === "lth" ? (
        <ul className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-4 py-10 ">
          {tabA.map((item) => (
            <li
              key={item.id}
              className="p-5 bg-white border rounded-md shadow-lg md:h-[230px]"
            >
              <Link to="">
                <img
                  src={item.image}
                  alt={item.name}
                  // style={{ width: "65%", height: "65%", margin: "0 auto" }}
                  className="md:w-[70%] md:h-[70%] mx-auto"
                />
                <button className="px-1 py-2 md:py-1 w-[50%] md:w-[70%] md:ml-[15%] ml-[25%] mt-3 text-white bg-purple-600 rounded-md">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-sm font-semibold"
                  >
                    View product
                  </Link>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-4 py-10">
          {tabB.map((item) => (
            <li
              key={item.id}
              className="p-5 bg-white border rounded-md shadow-lg md:h-[230px]"
            >
              <Link to="">
                <img
                  src={item.image}
                  alt={item.name}
                  // style={{ width: "65%", height: "65%", margin: "0 auto" }}
                  className="md:w-[70%] md:h-[70%] mx-auto"
                />
                <button className="px-1 py-2 md:py-1 w-[50%] md:w-[70%] md:ml-[15%] ml-[25%] mt-3 text-white bg-purple-600 rounded-md">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-sm font-semibold"
                  >
                    View product
                  </Link>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;

{
  /* <ul className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-4 py-10">
  {tabA.map((item) => (
    <li
      key={item.id}
      className="p-5 bg-white border rounded-md shadow-lg md:h-[230px]"
    >
      <Link to="">
        <img
          src={item.image}
          alt={item.name}
          // style={{ width: "65%", height: "65%", margin: "0 auto" }}
          className="md:w-[70%] md:h-[70%] mx-auto"
        />
        <button className="px-1 py-2 md:py-1 w-[50%] md:w-[70%] md:ml-[15%] ml-[25%] mt-3 text-white bg-purple-600 rounded-md">
          <Link to={`/product/${item.id}`} className="text-sm font-semibold">
            View product
          </Link>
        </button>
      </Link>
    </li>
  ))}
</ul>; */
}
