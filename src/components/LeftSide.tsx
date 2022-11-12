import React from 'react'

const LeftSide = () => {
  return (
    <div className="hidden md:w-1/2 md:px-10 bg-gray-100 min-h-screen space-y-10 sm:flex flex-col items-center justify-center">
      <div className="items-start w-full md:ml-32">
        <img
          className="h-[20px] w-[150px]"
          alt=""
          src="../assets/group-1016.svg"
        />
      </div>
      <img
        className="h-[268px] w-[268px]"
        alt=""
        src="../assets/bonbonstacksofcoinsbillscreditcardandbitcoin@2x.png"
      />

      <div className="flex items-center justify-center w-full flex-col space-y-3">
        <h3 className="font-bold text-3xl">
          Track Prices on all
          <br />
          Cryptocurrencies
        </h3>

        <p className="text-base">
          Set up automatic price alerts to let you know about <br /> price
          movements for a specific cryptocurrency.
        </p>
      </div>
    </div>
  );
}

export default LeftSide