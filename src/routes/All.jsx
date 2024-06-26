import { Link, useLoaderData } from "react-router-dom";


const All = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="pt-24 pb-10 dark:bg-slate-900">
      <ul className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-4">
        {data.map((item) => (
          <li
            key={item.id}
            className="p-5 bg-white border rounded-md shadow-lg md:h-[260px]"
          >
            <div className="pb-10">
              <img
                src={item.image}
                alt={item.name}
                className="md:w-[30%] md:h-[30%] mx-auto"
              />
              <h3 className="mt-3 text-[10px] text-center font-semibold">{item.title}</h3>
              <p className="mt-3 text-[12px] text-center font-bold">${item.price}</p>
              <button className="px-1 py-2 md:py-1 w-[50%] md:w-[70%] md:ml-[15%] ml-[25%] mt-3 text-white bg-purple-600 rounded-md">
                <Link
                  to={`/product/${item.id}`}
                  className="text-sm font-semibold"
                >
                  View product
                </Link>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default All;
