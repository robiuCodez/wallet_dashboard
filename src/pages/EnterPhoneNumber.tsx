import { FunctionComponent } from "react";
import { TextField, Button } from "@mui/material";
import LeftSide from "../components/LeftSide";
import RouteButton from "../components/RouteButton";

const EnterPhoneNumber: FunctionComponent = () => {
  return (
    <div className="w-screen flex items-center justify-between font-sans">
      <LeftSide />
      {/* right hand side */}
      <div className="w-1/2 flex md:px-auto items-center justify-center flex-col space-y-6">
        <img className="" alt="" src="../assets/group-4477.svg" />

        <div className="text-center space-y-3">
          <h3 className="font-black text-3xl my-2">Enter your phone number.</h3>
          <p className="text-base">
            Type in the 5-digit code received on your <br /> phone number.
          </p>
        </div>

        <TextField
          className=""
          sx={{ width: 380 }}
          variant="outlined"
          label="Phone Number"
        />
        <RouteButton route="activateaccount" text="Continue" />
      </div>
    </div>
  );
};

export default EnterPhoneNumber;
