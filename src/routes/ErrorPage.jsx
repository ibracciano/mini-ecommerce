import { Link, useRouteError } from "react-router-dom";

// import React from 'react'

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p>😡🤬😡🤬🥵</p>
      <h1 className="text-3xl font-bold text-gray-400">
        {error.statusText} - error {error.status}
      </h1>
      <p>{error.data} </p>
      <Link to="/" className="text-green-600">
        &larr; Go back{" "}
      </Link>
    </div>
  );
};

export default ErrorPage;
