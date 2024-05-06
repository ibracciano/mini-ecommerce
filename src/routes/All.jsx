import { Link, useLoaderData } from "react-router-dom";
// import { FaStar } from "react-icons/fa";

// import React from 'react'

const All = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="pt-24 pb-10 dark:bg-slate-900">
      <ul className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-4">
        {data.map((item) => (
          <li
            key={item.id}
            className="p-5 bg-white  border rounded-md shadow-lg md:h-[230px]"
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
    </div>
  );
};

export default All;
