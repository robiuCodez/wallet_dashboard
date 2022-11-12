import React from "react";
import { transactionData } from "../../data/txnData";

interface ITxnHistoryCard {
  txnStatus: "pending" | "completed";
}

const TxnHistoryCard = () => {
  return (
    <div className="h-[50%]">
      {transactionData.map(({ Icon, txnTitle, txnDesc, status }, index) => (
        <div key={index}>
          <Icon />
          <div>
            <h3>{txnTitle}</h3>
            <p>{txnDesc}</p>
          </div>
          <span>{status}</span>
        </div>
      ))}
    </div>
  );
};

export default TxnHistoryCard;
