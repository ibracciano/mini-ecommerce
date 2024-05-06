import axios from "axios";

import { Link, useLoaderData } from "react-router-dom";

// import React from 'react'

const Product = () => {
  // const [idChange, setIdChange] = useState(0)


  const data = useLoaderData();
  const api = 'http://localhost:5000/posts';




  function handleCart(data) {
    // const idNum = (data.id).toString()

    axios.post(api, {
      id: `${data.id}`,
      title: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      image: data.image,
      rating: {
        rate: data.rating.rate,
        count: data.rating.count,
      }
    }).then((response) => {
      if (response) {
        alert('product added successfully')
      }
      console.log(response)
    }
    ).catch((error) => console.log(error));
  }

  return (
    <div className="py-[170px] dark:bg-slate-900">
      <div className="w-[90%] md:w-[60%] mx-auto bg-slate-100 p-5 rounded-md">
        <div className="flex justify-between gap-5">
          <div className="w-1/5">
            <img src={data.image} alt="" className="w-full md:w-[70%]" />
          </div>

          <div className="w-4/5">
            <h1 className="font-bold md:text-3xl">{data.title}</h1>
            <div className="flex justify-between mt-2">
              <span>{data.category} </span>
              <button className="px-2 py-1 text-sm font-semibold text-white bg-purple-500 rounded-md" onClick={() => handleCart(data)}>
                <Link to="">Add to cart</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <span className="p-1 border border-purple-600 rounded-md">
            {data.price} $
          </span>
          <span className="p-1 border border-purple-600 rounded-md">
            {data.rating.rate} stars
          </span>
        </div>
        <p className="mt-10 text-sm font-semibold">{data.description}</p>
      </div>
    </div>
  );
};

export default Product;
