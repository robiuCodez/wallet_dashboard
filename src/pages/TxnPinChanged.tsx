import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const TxnPinChanged: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-center text-5xl text-gray-1600 font-dm-sans">
      <div className="absolute top-[0px] left-[0px] w-[1512px] h-[65px] text-left text-white">
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
              <div className="absolute h-[11.9%] w-[14.58%] top-[100%] right-[41.67%] bottom-[-11.9%] left-[43.75%] rounded-[0px_0px_4px_4px] bg-indigo-100 opacity-[0]" />
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
              <div className="absolute h-[50%] w-[103.28%] top-[0%] right-[-3.28%] bottom-[50%] left-[0%] font-medium inline-block">
                Settings
              </div>
              <div className="absolute h-[11.9%] w-[93.75%] top-[100%] right-[2.08%] bottom-[-11.9%] left-[4.17%] rounded-[0px_0px_4px_4px] bg-indigo-100" />
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
            src="../assets/vuesaxboldnotification46.svg"
          />
          <div className="absolute h-[46.43%] w-[58.06%] top-[0%] right-[0%] bottom-[53.57%] left-[41.94%] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
            <b className="relative inline-block">24</b>
          </div>
        </Link>
      </div>
      <div className="absolute top-[125px] left-[480px] rounded-[20px] bg-white [border:1px_solid_#e8e8e8] box-border w-[552px] h-[569px] text-11xl">
        <div className="absolute top-[88px] left-[84px] flex flex-col items-center justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[30px]">
            <div className="flex flex-col items-center justify-start gap-[18px]">
              <img
                className="relative w-[90px] h-[90px] shrink-0"
                alt=""
                src="../assets/group-44726.svg"
              />
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <b className="relative inline-block">Enter OTP code</b>
                <div className="relative text-3xl leading-[24px] text-gray-700 inline-block w-[384px]">
                  Type in the 6-digit code received on your phone number
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[40px] text-left text-7xl">
              <div className="flex flex-row items-start justify-start gap-[14px]">
                <div className="relative w-[51px] h-[58px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12px] bg-white shadow-[0px_20px_25px_rgba(52,_69,_85,_0.08),_0px_10px_10px_rgba(52,_69,_85,_0.01)]" />
                  <div className="absolute h-[39.66%] w-[21.57%] top-[31.25%] right-[38.43%] bottom-[29.09%] left-[40%] inline-block">
                    2
                  </div>
                </div>
                <div className="relative w-[51px] h-[58px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12px] bg-white shadow-[0px_20px_25px_rgba(52,_69,_85,_0.08),_0px_10px_10px_rgba(52,_69,_85,_0.01)]" />
                  <div className="absolute h-[39.66%] w-[21.57%] top-[31.25%] right-[38.43%] bottom-[29.09%] left-[40%] inline-block">
                    4
                  </div>
                </div>
                <div className="relative w-[52px] h-[58px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12px] bg-white shadow-[0px_20px_25px_rgba(52,_69,_85,_0.08),_0px_10px_10px_rgba(52,_69,_85,_0.01)]" />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12px] opacity-[0.15]" />
                  <img
                    className="absolute h-[40.63%] w-[1.67%] top-[29.69%] right-[48.33%] bottom-[29.69%] left-[50%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../assets/alex.svg"
                  />
                </div>
                <div className="relative w-[52px] h-[58px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12px] bg-white shadow-[0px_20px_25px_rgba(52,_69,_85,_0.08),_0px_10px_10px_rgba(52,_69,_85,_0.01)]" />
                </div>
                <div className="relative w-[51px] h-[58px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12px] bg-white shadow-[0px_20px_25px_rgba(52,_69,_85,_0.08),_0px_10px_10px_rgba(52,_69,_85,_0.01)]" />
                </div>
                <div className="relative w-[51px] h-[58px] shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12px] bg-white shadow-[0px_20px_25px_rgba(52,_69,_85,_0.08),_0px_10px_10px_rgba(52,_69,_85,_0.01)]" />
                </div>
              </div>
              <div className="relative text-3xl text-center inline-block text-gray-900">
                <span>{`Didn’t receive the code? `}</span>
                <b className="text-teal">Resend</b>
              </div>
            </div>
          </div>
          <div className="relative w-[380px] h-[54px] shrink-0 text-5xl text-white">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[10px] [background:linear-gradient(89.2deg,_#2f79f9,_#3daefa)]" />
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_35px)] font-medium inline-block">
              Continue
            </div>
          </div>
        </div>
        <div className="absolute top-[40px] left-[40px] w-[380px] h-[24px] text-left text-7xl">
          <div className="absolute h-full w-[46.05%] top-[0%] right-[53.95%] bottom-[0%] left-[0%] flex flex-row items-center justify-start gap-[14px]">
            <img
              className="relative w-[24px] h-[24px] shrink-0"
              alt=""
              src="../assets/vuesaxlineararrowleft12.svg"
            />
            <b className="relative inline-block opacity-[0]">Deposit</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-black w-[1512px] h-[982px] opacity-[0.4]" />
      <div className="absolute top-[125px] left-[542px] rounded-[19px] bg-white w-[428px] h-[330px] overflow-hidden text-9xl">
        <div className="absolute top-[50px] left-[61px] w-[306px] flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[18px]">
            <img
              className="relative w-[90px] h-[90px] shrink-0"
              alt=""
              src="../assets/vuesaxboldtickcircle2.svg"
            />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <b className="relative inline-block w-[287px]">
                You’ve changed your transaction pin successffully
              </b>
              <div className="relative text-3xl leading-[24px] hidden w-[309px] text-gray-700">
                <span>{`You have purchase `}</span>
                <span className="font-medium text-gray-1600">{`BTC 0.0067, `}</span>
                <span>your wallet will be funded soon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_48px)] right-[24px] bottom-[24px] left-[24px] flex flex-col items-start justify-start gap-[18px] text-5xl">
          <Button
            className="relative"
            sx={{ width: 380 }}
            variant="contained"
            color="success"
            href="/settings-home"
          >
            Done
          </Button>
          <div className="relative w-[380px] h-[54px] shrink-0 hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[10px]" />
            <div className="absolute h-[38.89%] w-[13.95%] top-[29.63%] right-[42.89%] bottom-[31.48%] left-[43.16%] font-medium [background:linear-gradient(89.2deg,_#2f79f9,_#3daefa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
              Cancel
            </div>
          </div>
        </div>
        <img
          className="absolute top-[28px] right-[28px] w-[24px] h-[24px] opacity-[0]"
          alt=""
        />
      </div>
    </div>
  );
};

export default TxnPinChanged;
