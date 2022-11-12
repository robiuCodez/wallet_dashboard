import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SendSuccess: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-center text-5xl text-white font-dm-sans">
      <div className="absolute top-[0px] left-[0px] w-[1512px] h-[65px] text-left">
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
            src="../assets/vuesaxboldnotification9.svg"
          />
          <div className="absolute h-[46.43%] w-[58.06%] top-[0%] right-[0%] bottom-[53.57%] left-[41.94%] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
            <b className="relative inline-block">24</b>
          </div>
        </Link>
      </div>
      <div className="absolute top-[125px] left-[449px] rounded-[20px] bg-white [border:1px_solid_#e8e8e8] box-border w-[614px] h-[749px] overflow-hidden text-3xl text-gray-700">
        <div className="absolute top-[88px] left-[117px] flex flex-col items-center justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[28px]">
            <div className="flex flex-col items-center justify-start gap-[28px]">
              <div className="flex flex-col items-center justify-start gap-[12px]">
                <div className="flex flex-col items-center justify-start gap-[8px]">
                  <div className="relative leading-[24px] inline-block">
                    Total
                  </div>
                  <b className="relative text-16xl inline-block text-gray-800 text-left">
                    BTC 0.04368
                  </b>
                </div>
                <div className="relative text-5xl text-left inline-block">
                  <span className="font-medium">
                    <span>Amount in USD:</span>
                    <span className="text-gray-1400">{` `}</span>
                  </span>
                  <b className="text-gray-800">$226,000.000</b>
                </div>
              </div>
              <div className="rounded-[16px] bg-gray-400 w-[380px] flex flex-col p-[30px_24px] box-border items-start justify-start text-left text-5xl text-gray-1600">
                <div className="flex flex-col items-center justify-start gap-[28px]">
                  <div className="flex flex-row items-center justify-center gap-[10px]">
                    <img
                      className="relative w-[24px] h-[24px] shrink-0"
                      alt=""
                      src="../assets/vuesaxlinearcard1.svg"
                    />
                    <div className="relative font-medium inline-block">
                      Account Details
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[18px] text-base text-gray-1400">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative leading-[170%] inline-block mix-blend-normal">
                        Wallet Address (Network TRC20)
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[9px] text-3xl text-gray-1600">
                        <div className="relative leading-[170%] font-medium inline-block mix-blend-normal">
                          18WmMsAsSsrPHo9VNEupecZ1xH8gPzygWi
                        </div>
                        <img
                          className="relative w-[20px] h-[20px] shrink-0"
                          alt=""
                          src="../assets/vuesaxlineardocumentcopy4.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative leading-[170%] inline-block mix-blend-normal">
                        Amount
                      </div>
                      <div className="relative text-3xl leading-[170%] font-medium text-gray-1600 inline-block mix-blend-normal">
                        0.03984 BTC (USD $1,200)
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative leading-[170%] inline-block mix-blend-normal">
                        Fee
                      </div>
                      <div className="relative text-3xl leading-[170%] font-medium text-gray-1600 inline-block mix-blend-normal">
                        0.00384 BTC (USD $0.02)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[336px] flex flex-row items-start justify-start gap-[8px] text-left text-base text-gray-1300">
              <img
                className="relative w-[16px] h-[16px] shrink-0"
                alt=""
                src="../assets/status11.svg"
              />
              <div className="relative leading-[130%] inline-block">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Please confirm transaction details. We cannot reverse
                </p>
                <p className="m-[0]">
                  transaction if you send to wrong address or network.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[380px] h-[54px] shrink-0 text-5xl text-white">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[10px] [background:linear-gradient(89.2deg,_#2f79f9,_#3daefa)]" />
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_32px)] font-medium inline-block">
              Proceed
            </div>
          </div>
        </div>
        <div className="absolute top-[40px] left-[40px] w-[380px] h-[24px] text-left text-7xl text-gray-1600">
          <div className="absolute h-full w-[46.05%] top-[0%] right-[53.95%] bottom-[0%] left-[0%] flex flex-row items-center justify-start gap-[14px]">
            <img
              className="relative w-[24px] h-[24px] shrink-0"
              alt=""
              src="../assets/vuesaxlineararrowleft12.svg"
            />
            <b className="relative inline-block">Confirm Transfer Details</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-black w-[1512px] h-[982px] opacity-[0.4]" />
      <div className="absolute top-[125px] left-[542px] rounded-[19px] bg-white w-[428px] h-[339px] overflow-hidden text-11xl text-gray-1600">
        <div className="absolute top-[50px] left-[61px] w-[306px] flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[18px]">
            <img
              className="relative w-[90px] h-[90px] shrink-0"
              alt=""
              src="../assets/vuesaxboldtickcircle2.svg"
            />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <b className="relative inline-block w-[399px]">
                  Transaction Successful.
                </b>
                <div className="relative text-3xl leading-[24px] text-gray-700 inline-block w-[309px]">
                  Check your email for transaction details.
                </div>
              </div>
              <div className="relative text-3xl leading-[24px] hidden w-[309px] text-gray-700">
                <span>{`You have purchase `}</span>
                <span className="font-medium text-gray-1600">{`BTC 0.0067, `}</span>
                <span>your wallet will be funded soon</span>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="absolute w-[calc(100%_-_48px)] right-[24px] bottom-[24px] left-[24px]"
          sx={{ width: 380 }}
          variant="contained"
          color="success"
          href="/wallet-home"
        >
          Done
        </Button>
        <img
          className="absolute top-[28px] right-[28px] w-[24px] h-[24px] opacity-[0]"
          alt=""
        />
      </div>
    </div>
  );
};

export default SendSuccess;
