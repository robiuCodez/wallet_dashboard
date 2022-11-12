import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const WithdrawComplete: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-center text-3xl text-gray-700 font-dm-sans">
      <div className="absolute top-[125px] left-[449px] rounded-[20px] bg-white [border:1px_solid_#e8e8e8] box-border w-[614px] h-[622px] overflow-hidden">
        <div className="absolute top-[88px] left-[117px] flex flex-col items-center justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[28px]">
            <div className="flex flex-col items-center justify-start gap-[12px]">
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <div className="relative leading-[24px] inline-block">
                  Amount to withdraw
                </div>
                <b className="relative text-16xl inline-block text-gray-800 text-left">
                  ₦ 44,500.00
                </b>
              </div>
              <div className="relative leading-[24px] text-gray-1400 inline-block">
                (Escrow fee of N100.00 included)
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-left text-5xl text-gray-1600">
              <div className="relative w-[380px] h-[222px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[16px] bg-gray-400 w-[380px] h-[222px]" />
                <div className="absolute top-[30px] left-[113px] flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0"
                    alt=""
                    src="../assets/vuesaxlinearcard1.svg"
                  />
                  <div className="relative font-medium inline-block">
                    Account Details
                  </div>
                </div>
                <div className="absolute top-[82px] left-[24px] flex flex-col items-start justify-start gap-[18px] text-3xl text-gray-1400">
                  <div className="relative w-[332px] h-[24px] shrink-0">
                    <div className="absolute top-[0px] left-[calc(50%_-_166px)] leading-[170%] inline-block mix-blend-normal">
                      Account Name
                    </div>
                    <div className="absolute top-[0px] left-[calc(50%_-_-75px)] leading-[170%] font-medium text-gray-1600 inline-block mix-blend-normal">
                      Investor Seed
                    </div>
                  </div>
                  <div className="relative w-[332px] h-[26px] shrink-0">
                    <div className="absolute top-[0px] left-[calc(50%_-_166px)] leading-[170%] inline-block mix-blend-normal">
                      Payment Account
                    </div>
                    <div className="absolute top-[2px] left-[calc(50%_-_-96px)] leading-[170%] font-medium text-gray-1600 inline-block mix-blend-normal">
                      Kuda bank
                    </div>
                  </div>
                  <div className="relative w-[332px] h-[24px] shrink-0">
                    <div className="absolute top-[0px] left-[calc(50%_-_166px)] leading-[170%] inline-block mix-blend-normal">
                      Account Number
                    </div>
                    <div className="absolute top-[0px] left-[210px] flex flex-row items-center justify-start gap-[9px] text-gray-1600">
                      <div className="relative leading-[170%] font-medium inline-block mix-blend-normal">
                        37892009745
                      </div>
                      <img
                        className="relative w-[20px] h-[20px] shrink-0"
                        alt=""
                        src="../assets/vuesaxlineardocumentcopy6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="relative"
            sx={{ width: 380 }}
            variant="contained"
            color="primary"
            href="/withdraw-txn-pin"
          >
            Proceed
          </Button>
        </div>
        <div className="absolute top-[40px] left-[40px] w-[380px] h-[24px] text-left text-7xl text-gray-1600">
          <div className="absolute h-full w-[46.05%] top-[0%] right-[53.95%] bottom-[0%] left-[0%] flex flex-row items-center justify-start gap-[14px]">
            <img
              className="relative w-[24px] h-[24px] shrink-0"
              alt=""
              src="../assets/vuesaxlineararrowleft2.svg"
            />
            <b className="relative inline-block opacity-[0]">Deposit</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1512px] h-[65px] text-left text-5xl text-white">
        <div className="absolute h-[98.46%] w-full top-[0%] right-[0%] bottom-[1.54%] left-[0%] bg-gray-400" />
        <img
          className="absolute h-[27.69%] w-[8.99%] top-[35.38%] right-[81.08%] bottom-[36.92%] left-[9.92%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../assets/logo12.svg"
        />
        <div className="absolute h-[64.62%] w-[24.67%] top-[33.85%] right-[37.63%] bottom-[1.54%] left-[37.7%] text-gray-1400">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-start justify-start gap-[50px]">
            <div className="relative w-[48px] h-[42px] shrink-0">
              <div className="absolute h-[50%] w-full top-[0%] right-[0%] bottom-[50%] left-[0%] font-medium inline-block">
                Wallet
              </div>
              <div className="absolute h-[11.9%] w-[93.75%] top-[100%] right-[2.08%] bottom-[-11.9%] left-[4.17%] rounded-[0px_0px_4px_4px] bg-indigo-100" />
            </div>
            <div className="relative w-[57px] h-[42px] shrink-0">
              <a className="[text-decoration:none] absolute h-[50%] w-[101.75%] top-[0%] right-[-1.75%] bottom-[50%] left-[0%] font-medium text-[inherit] inline-block">
                Savings
              </a>
              <div className="absolute h-[11.9%] w-[14.58%] top-[100%] right-[41.67%] bottom-[-11.9%] left-[43.75%] rounded-[0px_0px_4px_4px] bg-indigo-100 opacity-[0]" />
            </div>
            <div className="relative w-[57px] h-[42px] shrink-0">
              <div className="absolute h-[50%] w-full top-[0%] right-[0%] bottom-[50%] left-[0%] font-medium inline-block">
                Explore
              </div>
              <div className="absolute h-[11.9%] w-[14.58%] top-[100%] right-[41.67%] bottom-[-11.9%] left-[43.75%] rounded-[0px_0px_4px_4px] bg-indigo-100 opacity-[0]" />
            </div>
            <div className="relative w-[61px] h-[42px] shrink-0">
              <Link
                className="cursor-pointer [text-decoration:none] absolute h-[50%] w-[103.28%] top-[0%] right-[-3.28%] bottom-[50%] left-[0%] font-medium text-[inherit] inline-block"
                to="/settings"
              >
                Settings
              </Link>
              <div className="absolute h-[11.9%] w-[14.58%] top-[100%] right-[41.67%] bottom-[-11.9%] left-[43.75%] rounded-[0px_0px_4px_4px] bg-indigo-100 opacity-[0]" />
            </div>
          </div>
        </div>
        <div className="absolute h-[61.54%] w-[2.65%] top-[18.46%] right-[10.58%] bottom-[20%] left-[86.77%]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../assets/ellipse-332.svg"
          />
          <div className="absolute h-[52.5%] w-[42.5%] top-[22.5%] right-[27.5%] bottom-[25%] left-[30%] tracking-[0.2em] font-medium inline-block">
            SI
          </div>
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] absolute h-[43.08%] w-[2.05%] top-[27.69%] right-[14.62%] bottom-[29.23%] left-[83.33%] text-xs text-[inherit]"
          to="/notifications"
        >
          <img
            className="absolute h-full w-[90.32%] top-[0%] right-[9.68%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../assets/vuesaxboldnotification11.svg"
          />
          <div className="absolute h-[46.43%] w-[58.06%] top-[0%] right-[0%] bottom-[53.57%] left-[41.94%] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
            <b className="relative inline-block">24</b>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WithdrawComplete;
