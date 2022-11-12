import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Assets from "../components/Assets";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";
import TxnHistory from "../components/TxnHistory";

const WalletHome: FunctionComponent = () => {
  return (
    <div className="">
      <Header />
      <div className="flex items-start justify-between gap-10 p-10 w-full">
        {/* left hand side */}
        <div className="space-y-5 w-full">
          <PortfolioCard />
          <TxnHistory />
        </div>

        {/* right hand side  */}
        <div className="w-full">
          <Assets />
          <div>
            <img src="../assets/largeCryptoImage.png" className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHome;
