import useOuterClick from "@/custom-hooks/useOuterClick";
import React from "react";
import { BsX } from "react-icons/bs";

const Modal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const { ref, out }: { ref: any; out: boolean } = useOuterClick();
  React.useEffect(() => {
    out && closeModal();
  }, [out, closeModal]);
  return (
    <div className="h-full w-full fixed top-0  text-4xl z-[9999] bg-opacity-30 flex justify-center items-center">
      <div className="w-full h-full absolute -z-10 top-0 right-0"></div>
      <div
        className="flex flex-col relative w-1/2 bg-light min-h-[150px] p-10 gap-4 text-base border rounded-xl shadow-2xl"
        ref={ref}
      >
        <div
          className="absolute top-6 right-6 text-2xl cursor-pointer"
          onClick={closeModal}
        >
          <BsX />
        </div>

        <div>
          <label className="label">Unit Number</label>
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
          <label className="label">Unit name</label>
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
};

export default Modal;
