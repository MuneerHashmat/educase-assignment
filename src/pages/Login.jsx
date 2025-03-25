import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen pt-10 flex flex-col items-center">
      <div className="w-[90vw] sm:w-[75vw] md:w-[35vw] flex flex-col gap-4">
        <h1 className="text-[var(--brand-black)] text-[28px] font-medium">
          Signin to your PopX account
        </h1>
        <p className="text-[#6c7e8c] text-[18px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex flex-col items-center gap-3"
        >
          <div className="relative w-full">
            <p className="text-[13px] text-[var(--brand-blue)] absolute top-[-12px] left-3 bg-[var(--brand-grey-bg)] p-0.5">
              Email Address
            </p>
            <input
              type="email"
              placeholder="Enter email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border-2 border-[var(--brand-grey-light)] outline-[var(--brand-blue)] p-2 text-[14px]"
            />
          </div>
          <div className="relative w-full">
            <p className="text-[13px] text-[var(--brand-blue)] absolute top-[-12px] left-3 bg-[var(--brand-grey-bg)] p-0.5">
              Password
            </p>
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border-2 border-[var(--brand-grey-light)] outline-[var(--brand-blue)] p-2 text-[14px]"
            />
          </div>
          <button
            disabled={!email || !password}
            className={`w-full py-2 text-white rounded-md ${
              !email || !password
                ? "bg-[var(--brand-grey-light)] cursor-not-allowed"
                : "bg-[var(--brand-blue)] hover:scale-[1.005] transition-all cursor-pointer"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
