import React, { useState } from "react";
import { formItems } from "../constants/formItems";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate=useNavigate();
  const initialState = {
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  };

  const [inputValues, setInputValues] = useState(initialState);

  const handleOnChange = (key, value) => {
    setInputValues({ ...inputValues, [key]: value });
  };
  return (
    <div className="w-screen h-screen pt-8 pb-7 flex flex-col items-center">
      <div className="w-[90vw] sm:w-[75vw] md:w-[35vw] h-full">
        <div className="flex flex-col gap-5 h-full">
          <h1 className="text-[var(--brand-black)] text-[28px] font-medium">
            Create your PopX account
          </h1>
          <form
           onSubmit={(e) => {
            e.preventDefault();
            navigate("/profile");
          }}
            className="w-full flex flex-col items-center justify-between h-full font-medium"
          >
            <div className="flex flex-col items-center gap-5 w-full">
              {formItems.map((formItem) => (
                <div key={formItem.label} className="relative w-full">
                  <p className="text-[13px] text-[var(--brand-blue)] absolute top-[-12px] left-3 bg-[var(--brand-grey-bg)] p-0.5">
                    {formItem.label}{" "}
                    {formItem.label !== "Company Name" && (
                      <span className="text-[var(--brand-red)]">*</span>
                    )}
                  </p>
                  <input
                    type={formItem.type}
                    placeholder={formItem.placeHolder}
                    value={inputValues[formItem.name]}
                    required={formItem.label !== "Company Name"}
                    onChange={(e) =>
                      handleOnChange(formItem.name, e.target.value)
                    }
                    className="w-full rounded-md border-2 border-[var(--brand-grey-light)] outline-[var(--brand-blue)] p-2 text-[14px] text-[var(--brand-black)]"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2 w-full">
                <p className="text-[13px] text-[var(--brand-black)]">
                  Are you an Agency?
                  <span className="text-[var(--brand-red)]">*</span>
                </p>
                <div className="flex gap-5 text-[14px]">
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      value="yes"
                      checked={inputValues.isAgency === "yes"}
                      onChange={(e) =>
                        setInputValues({
                          ...inputValues,
                          isAgency: e.target.value,
                        })
                      }
                      className="w-5 h-5 text-[var(--brand-blue)]"
                    />{" "}
                    <label>Yes</label>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      value="no"
                      checked={inputValues.isAgency === "no"}
                      onChange={(e) =>
                        setInputValues({
                          ...inputValues,
                          isAgency: e.target.value,
                        })
                      }
                      className="w-5 h-5 text-[var(--brand-blue)]"
                    />{" "}
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>

            <button
              disabled={
                !inputValues.name ||
                !inputValues.phone ||
                !inputValues.email ||
                !inputValues.password ||
                !inputValues.isAgency
              }
              className={`w-full py-2 font-medium text-white rounded-md ${
                !inputValues.name ||
                !inputValues.phone ||
                !inputValues.email ||
                !inputValues.password ||
                !inputValues.isAgency
                  ? "bg-[var(--brand-grey-light)] cursor-not-allowed"
                  : "bg-[var(--brand-blue)] hover:scale-[1.005] transition-all cursor-pointer"
              }`}
            >
              Create  Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
