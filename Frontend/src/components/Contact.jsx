import React from "react";
import { useForm } from "react-hook-form";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex h-screen  items-center justify-center dark:bg-slate-900 dark:text-white">
        <div className="md:w-[500px]">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Contact Us</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-[200px] md:w-[380px] px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span
                    className="text-sm text-red-500
            "
                  >
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[200px] md:w-[380px] px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Message */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  type="text"
                  placeholder="Enter your password"
                  rows="4"
                  className="w-[200px] md:w-[380px] px-3 py-1 border rounded-md outline-none"
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && (
                  <span
                    className="text-sm text-red-500
            "
                  >
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button
                  to="/"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
