import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const DepositFailed: FunctionComponent = () => {
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
            src="../assets/vuesaxboldnotification8.svg"
          />
          <div className="absolute h-[46.43%] w-[58.06%] top-[0%] right-[0%] bottom-[53.57%] left-[41.94%] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
            <b className="relative inline-block">24</b>
          </div>
        </Link>
      </div>
      <div className="absolute top-[125px] left-[449px] rounded-[20px] bg-white [border:1px_solid_#e8e8e8] box-border w-[614px] h-[809px] overflow-hidden text-11xl">
        <div className="absolute top-[88px] left-[101px] flex flex-col items-center justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[28px]">
            <div className="flex flex-col items-center justify-start gap-[18px]">
              <img
                className="relative w-[80px] h-[80px] shrink-0 hidden"
                alt=""
                src="../assets/group-4463.svg"
              />
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <b className="relative inline-block">Make Payment</b>
                <div className="relative text-3xl leading-[24px] text-gray-700 inline-block w-[412px]">
                  Complete your fiat deposit by making payment to the merchant’s
                  account details below with your verified name.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[12px] text-3xl text-gray-800">
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <div className="relative leading-[24px] inline-block">
                  Amount to deposit
                </div>
                <b className="relative text-16xl inline-block text-left">
                  ₦ 44,500.00
                </b>
              </div>
              <div className="relative leading-[24px] text-gray-1400 inline-block">
                (Escrow fee of N100.00 included)
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] text-left text-5xl">
              <div className="relative w-[412px] h-[265px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[16px] bg-gray-400 w-[412px] h-[265px]" />
                <div className="absolute top-[30px] left-[135.5px] bg-gray-400 flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0"
                    alt=""
                    src="../assets/vuesaxlinearreceiptadd.svg"
                  />
                  <div className="relative font-medium inline-block">
                    Bank Transfer
                  </div>
                </div>
                <div className="absolute top-[82px] left-[40px] bg-gray-400 flex flex-col items-start justify-start gap-[18px] text-3xl text-gray-1400">
                  <div className="relative w-[332px] h-[25px] shrink-0">
                    <div className="absolute top-[0px] left-[calc(50%_-_166px)] leading-[170%] inline-block mix-blend-normal">
                      Merchant
                    </div>
                    <div className="absolute top-[1px] left-[calc(50%_-_-70px)] leading-[170%] font-medium text-gray-1600 inline-block mix-blend-normal">
                      OTC Exchange
                    </div>
                  </div>
                  <div className="relative w-[332px] h-[24px] shrink-0">
                    <div className="absolute top-[0px] left-[calc(50%_-_166px)] leading-[170%] inline-block mix-blend-normal">
                      Account Name
                    </div>
                    <div className="absolute top-[0px] left-[calc(50%_-_-92px)] leading-[170%] font-medium text-gray-1600 inline-block mix-blend-normal">
                      Ayo chimdi
                    </div>
                  </div>
                  <div className="relative w-[332px] h-[26px] shrink-0">
                    <div className="absolute top-[0px] left-[calc(50%_-_166px)] leading-[170%] inline-block mix-blend-normal">
                      Payment Account
                    </div>
                    <div className="absolute top-[2px] left-[calc(50%_-_-87px)] leading-[170%] font-medium text-gray-1600 inline-block mix-blend-normal">
                      Wema bank
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
                        src="../assets/vuesaxlineardocumentcopy9.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[336px] flex flex-row items-start justify-start gap-[8px] text-base text-gray-1300">
                <img
                  className="relative w-[16px] h-[16px] shrink-0"
                  alt=""
                  src="../assets/status14.svg"
                />
                <div className="relative leading-[130%] inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Your transferred funds will be kept safely till your account
                    has
                  </p>
                  <p className="m-[0]">been credited</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px] text-5xl text-brown-100">
            <div className="relative w-[194px] h-[54px] shrink-0">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[10px] [border:1px_solid_#fb4e4e] box-border" />
              <div className="absolute h-[38.89%] w-[27.32%] top-[29.63%] right-[36.22%] bottom-[31.48%] left-[36.46%] font-medium inline-block">
                Cancel
              </div>
            </div>
            <div className="relative w-[194px] h-[54px] shrink-0 text-white">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[10px] [background:linear-gradient(89.2deg,_#2f79f9,_#3daefa)]" />
              <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_16px)] font-medium inline-block">
                Paid
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[40px] left-[40px] w-[380px] h-[24px] text-left text-7xl">
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
      <div className="absolute top-[0px] left-[0px] bg-black w-[1512px] h-[982px] opacity-[0.4]" />
      <div className="absolute top-[125px] left-[542px] rounded-[19px] bg-white w-[428px] h-[396px] overflow-hidden text-9xl">
        <div className="absolute top-[50px] left-[61px] w-[306px] flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[18px]">
            <img
              className="relative w-[90px] h-[90px] shrink-0"
              alt=""
              src="../assets/vuesaxboldclosecircle.svg"
            />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <b className="relative inline-block">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Are you sure you want to
                </p>
                <p className="m-[0]">cancel this deposit?</p>
              </b>
              <div className="relative text-3xl leading-[24px] hidden w-[309px] text-gray-700">
                <span>{`You have purchase `}</span>
                <span className="font-medium text-gray-1600">{`BTC 0.0067, `}</span>
                <span>your wallet will be funded soon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_48px)] right-[24px] bottom-[24px] left-[24px] flex flex-col items-start justify-start gap-[18px]">
          <Button
            className="relative"
            sx={{ width: 380 }}
            variant="contained"
            color="error"
            href="/wallet-home"
          >
            Yes, Cancel
          </Button>
          <Button
            className="relative"
            sx={{ width: 380 }}
            variant="outlined"
            color="primary"
            href="/make-payment"
          >
            No, Continue
          </Button>
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[28px] right-[28px] w-[24px] h-[24px]"
          to="/make-payment"
        >
          <img
            className="absolute top-[0px] right-[0px] w-[24px] h-[24px]"
            alt=""
            src="../assets/vuesaxlinearclose.svg"
          />
        </Link>
      </div>
    </div>
  );
};

export default DepositFailed;
