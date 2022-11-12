import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import LeftSide from "../components/LeftSide";
import RouteButton from "../components/RouteButton";

const VerifyEmail: FunctionComponent = () => {
  return (
    <div className="w-screen flex items-center justify-between font-sans">
      {/* left hand side */}
      <LeftSide />

      {/* right hand side */}
      <div className="w-1/2 flex md:px-auto items-center justify-center flex-col space-y-6">
        <div className="w-full flex flex-col items-center justify-center space-y-8">
          <img className="" alt="" src="../assets/group-447.svg" />

          <div className="text-center space-y-3">
            <h3 className="font-black text-3xl my-2">Verify your E-mail address</h3>

            <p className="text-base">
              We've sent an email to <b>johndoe@gmail.com</b> <br />
              Please click the verification link to complete your registration.
            </p>
          </div>

          <RouteButton route="enterphonenumber" text="Go to Mail" />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
