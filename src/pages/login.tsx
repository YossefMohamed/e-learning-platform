import Link from "next/link";
import React from "react";

function login() {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="hidden overflow-hidden relative lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="/login-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="w-full h-full absolute z-10 top-0 right-0 bg-primary opacity-50"></div>
        </div>
        <div
          className="bg-white  w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
  flex items-center justify-center"
        >
          <div className="w-full h-90">
            <h1 className=" text-2xl font-bold ">Log in to your account</h1>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block ">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="text-input"
                  autofocus
                  autoComplete=""
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block ">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minLength={6}
                  className="text-input"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full mt-6">
                Log In
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default login;
