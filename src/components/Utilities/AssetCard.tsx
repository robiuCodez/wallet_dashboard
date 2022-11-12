import React from "react";
import { assets } from "../../data/asset";

const AssetCard = () => {
  return (
    <div>
      {assets.map(({ Icon, name, price, percent }, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-100 px-5 py-3 rounded-lg my-2"
        >
          <div className="flex items-center space-x-3 ">
            <Icon className="w-8 h-8 rounded-full bg-transparent" />
            <h2>{name}</h2>
          </div>
          <div>
            <h5>{price}</h5>
            <span>{percent}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssetCard;
