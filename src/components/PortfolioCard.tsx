import React, { useState } from "react";
import { IoWallet } from "react-icons/io5";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import TxnCard from "./Utilities/TxnCard";

const PortfolioCard = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [balance, setBalance] = useState<number | string>(108393);

  const handleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div className="border-2 border-gray-200 rounded-lg p-5 space-y-5">
      {/* top */}
      <div className="flex items-center justify-between ">
        <IoWallet className="w-8 h-8" />
        <span onClick={handleVisibility}>
          {visible ? (
            <AiOutlineEye className="w-8 h-8" />
          ) : (
            <AiOutlineEyeInvisible className="w-8 h-8" />
          )}
        </span>
      </div>
      {/* middle */}
      <div>
        {/* <h3 className="text-4xl">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "NGN",
          }).format(balance)}
        </h3> */}
        <p>{visible ? balance : "*********"}</p>
      </div>
      {/* bottom */}
      <div className="flex items-center">
        <TxnCard />
      </div>
    </div>
  );
};

export default PortfolioCard;
