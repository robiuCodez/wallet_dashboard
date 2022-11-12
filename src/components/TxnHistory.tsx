import React from "react";
import { BsSliders } from "react-icons/bs";
import TxnHistoryCard from "./Utilities/TxnHistoryCard";

const TxnHistory = () => {
  return (
    <div className="border-2 border-gray-200 p-5 rounded-lg">
      {/* top */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl">Transactions</h3>
        <BsSliders className="w-6 h-6 font-bold" />
      </div>
      {/* txn history cards */}
      <div className="overflow-y-scroll">
        <TxnHistoryCard />
      </div>
    </div>
  );
};

export default TxnHistory;
