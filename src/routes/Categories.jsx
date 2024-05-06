// import React from 'react'

import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState(
    JSON.parse(localStorage.getItem("category")) || ""
  );
  // console.log(category);

  const data = useLoaderData();

  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);

  return (
    <div className="py-20 md:py-[120px] dark:bg-slate-900">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="ml-[30%] md:ml-[83%]">
          <select
            name=""
            className="text-white bg-purple-600 outline-white"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" className="font-semibold">
              Select a category
            </option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>
        {category === "electronics" && (
          <ul className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-4 py-10 ">
            {data
              .filter((item) => item.category === "electronics")
              .map((item) => (
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
                    <button className="px-1 py-2 md:py-1 w-[50%] md:w-[80%] md:ml-[10%] ml-[25%] mt-3 text-white bg-purple-600 rounded-md">
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

        {category === "jewelery" && (
          <ul className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-4 py-10 ">
            {data
              .filter((item) => item.category === "jewelery")
              .map((item) => (
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
                    <button className="px-1 py-2 md:py-1 w-[50%] md:w-[80%] md:ml-[10%] ml-[25%] mt-3 text-white bg-purple-600 rounded-md">
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

        {category === "men's clothing" && (
          <ul className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-4 py-10 ">
            {data
              .filter((item) => item.category === "men's clothing")
              .map((item) => (
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
                    <button className="px-1 py-2 md:py-1 w-[50%] md:w-[80%] md:ml-[10%] ml-[25%] mt-3 text-white bg-purple-600 rounded-md">
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

        {category === "women's clothing" && (
          <ul className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-4 py-10 ">
            {data
              .filter((item) => item.category === "women's clothing")
              .map((item) => (
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
                    <button className="px-1 py-2 md:py-1 w-[50%] md:w-[80%] md:ml-[10%] ml-[25%] mt-3 text-white bg-purple-600 rounded-md">
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

        {category === "" && (
          <p className="flex items-center justify-center my-[180px] md:my-40 dark:text-white">
            Nothing to display, please make a selection
          </p>
        )}
      </div>
    </div>
  );
};

export default Categories;
