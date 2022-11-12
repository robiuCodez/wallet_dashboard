import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBellFill } from "react-icons/bs";

const Header = () => {
  const [firstName, setFirstName] = useState<string>("Ololoade");
  const [lastName, setLastName] = useState<string>("Asake.");
  const [notificationsCount, setNotificationsCount] = useState<number>(12);

  const initials = `${firstName[0]}${lastName[0]} `;

  return (
    <header className="relative flex items-center justify-between w-screen py-3 px-10 bg-gray-100 font-sans">
      {/* logo */}

      <div className="">
        <img
          className="h-[20px] w-[150px]"
          alt=""
          src="../assets/group-1016.svg"
        />
      </div>

      {/* nav links */}

      <nav className="space-x-5">
        <Link to="/wallet-home">Wallet</Link>
        <Link to="/">Savings</Link>
        <Link to="/">Explore</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      {/* icons */}
      <div className="flex items-center space-x-8">
        {/* notification */}
        <div className="relative">
          {/* badge */}
          <p className="absolute bg-red-800 text-white text-xs p-1 -right-1 -top-1 font-semibold rounded-full">
            {notificationsCount}
          </p>
          <BsBellFill className="h-8 w-8" />
        </div>

        {/* initials */}
        <p className="bg-blue-600 rounded-full p-2 text-white font-bold cursor-pointer">
          {initials}
        </p>
      </div>
    </header>
  );
};

export default Header;
