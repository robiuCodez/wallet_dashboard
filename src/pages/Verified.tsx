import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import RouteButton from "../components/RouteButton";

const Verified: FunctionComponent = () => {
  return (
    <div className="w-screen flex items-center justify-between font-sans">
      <LeftSide />

      {/* right hand side */}
      <div className="w-1/2 flex md:px-auto items-center justify-center flex-col space-y-6">
        <img className="" alt="" src="../assets/ellipse-150.svg" />
        <span className="">🎉</span>

        <p className="">You are verified!</p>
        <img className="" alt="" src="../assets/vuesaxboldverify.svg" />

        <h3 className="">
          You’ve completed all the steps, and you can now make transactions on
          Cloudax.
        </h3>

        <RouteButton route="login" text="Proceed" />
      </div>
    </div>
  );
};

export default Verified;
