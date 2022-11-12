import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import LeftSide from "../components/LeftSide";
import RouteButton from "../components/RouteButton";

const ActivateAccount2: FunctionComponent = () => {
  return (
    <div className="w-screen flex items-center justify-between font-sans">
      <LeftSide />
      <div className="w-1/2 flex md:px-auto items-center justify-center flex-col space-y-6">
        <img className="" alt="" src="../assets/group-4475.svg" />

        <div className="text-center space-y-3">
          <h3 className="font-black text-3xl my-2">Activate your account.</h3>
          <p className="text-base">
            Enter the 6-digit code sent to your phone number.
          </p>
        </div>

        {/* input otp */}
        <div></div>

        <div className="">
          <span>Didn’t receive the code?</span>
          <b className="">Resend</b>
        </div>

        <RouteButton route="createtxnpin" text="Send" />
      </div>
    </div>
  );
};

export default ActivateAccount2;
