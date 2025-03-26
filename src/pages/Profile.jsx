import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="w-screen py-[21px] pl-[15px] bg-white font-medium ">
        <h1 className="text-[20px]">Account Settings</h1>
      </div>

      <div className="mt-10 w-screen flex flex-col items-center">
        <div className="w-[90vw] sm:w-[75vw] md:w-[35vw] flex flex-col gap-3">
          <div className="flex gap-8">
            <div className="relative rounded-full">
              <img src="/profile.png" alt="profile" width={76} height={76} />
              <img
                src="/cam.png"
                alt="cam"
                width={21}
                height={23}
                className="absolute top-[50px] left-[60px]"
              />
            </div>

            <div className="flex flex-col gap-1 font-medium text-[var(--brand-black)]">
              <p className="text-[15px] font-bold">Marry Doe</p>
              <p className="text-[14px]">Marry@Gmail.Com</p>
            </div>
          </div>
          <p className="font-medium text-[var(--brand-black)] text-[14px] mt-8">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-dashed border-[var(--brand-grey-light)] w-screen mt-7" />
    </div>
  );
};

export default Profile;
