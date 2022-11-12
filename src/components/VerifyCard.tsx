import React from "react";
import { Link } from "react-router-dom";

const VerifyCard = ({
  imageOne,
  text,
  imageTwo,
  bgColor,
  route,
}: {
  imageOne: string;
  text: string;
  imageTwo: string;
  route: string;
  bgColor: "red" | "green";
}) => {
  return (
    <Link to={route}
      className={
        bgColor == "red"
          ? `bg-red-500 flex items-center justify-between`
          : "bg-green-200 flex items-center justify-between px-5 py-2 rounded-lg text-green-800 my-5"
      }
    >
      <div className="flex items-center space-x-5 mr-10">
        <img src={imageOne} alt="" />
        <p>{text}</p>
      </div>
      <img src={imageTwo} alt="" />
    </Link>
  );
};

export default VerifyCard;
