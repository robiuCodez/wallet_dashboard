import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import LeftSide from "../components/LeftSide";
import RouteButton from "../components/RouteButton";

const CreateTxnPin2: FunctionComponent = () => {
  return (
    <div className="w-screen flex items-center justify-between font-sans">
      <LeftSide />
      <div className="w-1/2 flex md:px-auto items-center justify-center flex-col space-y-6">
        <img className="" alt="" src="../assets/group-446.svg" />

        <div className="text-center space-y-3">
          <h3 className="font-black text-3xl my-2">Create a transaction pin</h3>
          <p className="text-base">
            You will use to perform secure transactions
          </p>
        </div>

        {/* transaction pin */}

        <RouteButton route="verifykyc" text="Continue" />
      </div>
    </div>
  );
};

export default CreateTxnPin2;
