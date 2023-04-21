import React from "react";

function Index() {
  return (
    <div className="min-h-screen bg-primary relative bg-opacity-5 flex justify-center items-center">
      <div className="w-full h-full absolute -z-10 top-0 right-0 bg-[url('/login-bg2.png')] opacity-50 bg-no-repeat bg-cover"></div>

      <div className="flex flex-col w-1/2 bg-light min-h-[150px] p-10 gap-4">
        <div>
          <label className="block ">Which Year</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Email Address"
            className="text-input"
            autoComplete=""
            required
          />
        </div>
        <div>
          <label className="block ">Course Name</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Email Address"
            className="text-input"
            autoComplete=""
            required
          />
        </div>
        <div className="btn-primary w-full mt-2">Submit</div>
      </div>
    </div>
  );
}

export default Index;
