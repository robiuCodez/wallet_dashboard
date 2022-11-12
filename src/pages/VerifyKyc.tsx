import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import VerifyCard from "../components/VerifyCard";

const VerifyKyc: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleSkip = (e: Event) => {
    e.preventDefault();

    navigate("/");
  };
  return (
    <div className="w-screen flex items-center justify-between font-sans">
      <LeftSide />

      {/* right hand side */}
      <div className="w-1/2 flex md:px-auto items-center justify-center flex-col space-y-6">
        <img className="" alt="" src="../assets/group-4472.svg" />

        <div className="text-center space-y-3">
          <h3 className="font-black text-3xl my-2">KYC Verification</h3>
          <p className="text-base">
            To ensure the security of your account, <br /> we recommend you
            complete the following.
          </p>
        </div>

        {/* designs */}
        <div>
          {/* verify phone number */}
          <VerifyCard
            route="/verify-id"
            imageOne="../assets/group-442.svg"
            text="Verify Phone Number"
            imageTwo="../assets/vuesaxboldtickcircle.svg"
            bgColor="green"
          />
          <VerifyCard
            route="/verify-id"
            imageOne="../assets/group-442.svg"
            text="Verify Government Issued ID"
            imageTwo="../assets/vuesaxboldtickcircle.svg"
            bgColor="green"
          />

          {/* skip button */}
          <button onClick={(e) => handleSkip} className="">Skip</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyKyc;
