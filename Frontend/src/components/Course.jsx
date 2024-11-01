import React, { useEffect, useState } from "react";

import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [books, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.BACKEND_URL}/book`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("frontend error: ", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 dark:bg-slate-900 dark:text-white items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consequat ipsum non ullamcorper ultricies. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consequat ipsum non ullamcorper ultricies. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {books.map((item) => (
            <Cards key={item.id} item={item}></Cards>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
