import React, { useState } from "react";
import { transactionTypes } from "../../data/txn";

const TxnCard = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className="  flex items-center justify-between gap-5  "
      onClick={() => setActive(!active)}
    >
      {transactionTypes.map(({ txn, Icon }, index) => (
        <div
          key={index}
          className="flex rounded-md bg-blue-300 items-center space-x-3 px-3 py-2 font-semibold"
        >
          <Icon />
          <p>{txn}</p>
        </div>
      ))}
    </div>
  );
};

export default TxnCard;
