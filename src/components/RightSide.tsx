import React, { ReactNode } from "react";

const RightSide = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full sm:w-1/2 flex md:px-auto items-center justify-center flex-col space-y-6">
      {children}
    </div>
  );
};

export default RightSide;
