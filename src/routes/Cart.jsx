import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [tab, setTab] = useState([]);

  async function getProducts() {
    let api = "http://localhost:5000/posts";
    const response = await fetch(api);
    try {
      const data = await response.json();
      setTab(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  //   console.log(data);

  function handleDelete(id) {
    console.log(id);
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then(() => {
        alert("Product deleted successfully");
        setTab(tab.filter((item) => item.id !== id));
      })
      .catch((error) => console.log(error));
    getProducts();
  }

  return (
    <div className="py-40 dark:bg-slate-900 dark:text-white">
      <h1 className="mb-5 text-center">
        {tab.length > 1
          ? `You have ${tab.length} products in your cart`
          : tab.length === 0
          ? `No products in your cart`
          : `You have ${tab.length} product in your cart`}
      </h1>
      <div className="w-[90%] md:w-[80%] mx-auto grid md:grid-cols-4 gap-5">
        {tab.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center py-4 bg-white border rounded-md shadow-md"
            >
              <img src={item.image} alt="" className="w-[50%] " />
              <button
                className="w-2/3 py-1 mt-3 font-semibold text-white bg-purple-600 rounded-md"
                onClick={() => handleDelete(item.id)}
              >
                Delete from cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
