import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="w-screen h-screen bg-[var(--brand-grey-bg)] flex flex-col justify-end items-center pb-10 rubik">
      <div className="w-[90vw] sm:w-[70vw] md:w-[35vw] flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-[28px]  text-[var(--brand-black)]">
            Welcome to PopX
          </h1>
          <p className="text-[#6c7e8c] text-[18px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        <div className="flex flex-col gap-2 text-[16px] font-medium">
          <button 
          onClick={()=>navigate("/sign-up")}
          className="py-2 bg-[var(--brand-blue)] text-white rounded-md cursor-pointer hover:scale-[1.005] transition-all">
            Create Account
          </button>

          <button 
          onClick={()=>navigate("/sign-in")}
          className="py-2 bg-[var(--brand-purple)] text-[var(--brand-black)] rounded-md cursor-pointer hover:scale-[1.005] transition-all">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
