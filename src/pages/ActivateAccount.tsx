import { FunctionComponent, useState } from "react";
import { Button } from "@mui/material";
import LeftSide from "../components/LeftSide";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import RouteButton from "../components/RouteButton";

const ActivateAccount: FunctionComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState<any>();

  function handleSubmit(e: { preventDefault: () => void }) {}
  return (
    <div className="w-screen flex items-center justify-between font-sans">
      <LeftSide />

      {/* right hand side */}
      <div className="w-1/2 flex md:px-auto items-center justify-center flex-col space-y-6">
        <img className="" alt="" src="../assets/group-4475.svg" />

        <div className="text-center space-y-3">
          <p className="font-black text-3xl my-2">Activate your account.</p>
          <p className="text-base">
            Enter the 6-digit code sent to your phone number.
          </p>
        </div>

        {/* phone number */}
        <div>
          <PhoneInput
            value={phoneNumber}
            placeholder="Enter phone number"
            onChange={setPhoneNumber}
            className="px-3 py-2 border-blue-500 border-[1.5px]"
          />
        </div>

        <div>
          <p>Didn’t receive the code?</p>
          <p className="">Resend in 2:39</p>
        </div>

        <RouteButton route="activateaccount-2" text="Send" />
      </div>
    </div>
  );
};

export default ActivateAccount;
