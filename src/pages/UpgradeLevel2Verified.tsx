import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const UpgradeLevel2Verified: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-center text-11xl text-gray-1600 font-dm-sans">
      <div className="absolute top-[125px] left-[480px] rounded-[20px] bg-white [border:1px_solid_#e8e8e8] box-border w-[552px] h-[717px]">
        <div className="absolute top-[88px] left-[86px] flex flex-col items-center justify-start gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[40px]">
            <div className="flex flex-col items-center justify-start gap-[18px]">
              <img
                className="relative w-[90px] h-[90px] shrink-0"
                alt=""
                src="../assets/group-44737.svg"
              />
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <b className="relative inline-block">Level 2</b>
                <div className="relative text-3xl leading-[24px] text-gray-700 inline-block w-[321px]">
                  Upgrade your account by adding details of your preferred legal
                  ID and taking a selfie
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] text-left text-5xl">
              <div className="rounded-[16px] bg-white hidden flex-col p-[18px] box-border items-start justify-start">
                <div className="relative w-[344px] h-[77px] shrink-0">
                  <img
                    className="absolute top-[29px] left-[324px] w-[20px] h-[20px]"
                    alt=""
                    src="../assets/vuesaxlineararrowright32.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] w-[315px] h-[77px]">
                    <div className="absolute top-[2px] left-[64px] flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative font-medium inline-block">
                        Bank Verification Number
                      </div>
                      <div className="relative text-xl leading-[24px] text-gray-700 inline-block w-[251px]">
                        Verify your identity by uploading your BVN
                      </div>
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[48px] h-[48px]"
                      alt=""
                      src="../assets/group-4452.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-[16px] bg-gray-400 w-[380px] flex flex-col p-[18px] box-border items-start justify-start relative gap-[10px]">
                <div className="relative w-[270px] h-[69px] shrink-0 z-[0]">
                  <div className="absolute top-[2px] left-[58px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative font-medium inline-block">
                      Government ID verification
                    </div>
                    <div className="relative text-base leading-[20px] text-gray-700 inline-block w-[212px]">
                      <p className="[margin-block-start:0] [margin-block-end:0px]">{`Upload details of your ID to continue `}</p>
                      <p className="m-[0]">verification</p>
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                    alt=""
                    src="../assets/group-44436.svg"
                  />
                </div>
                <img
                  className="absolute m-[0_!important] top-[18px] left-[326px] w-[40px] h-[40px] shrink-0 z-[1]"
                  alt=""
                  src="../assets/group-443.svg"
                />
              </div>
              <div className="rounded-[16px] bg-gray-400 w-[380px] flex flex-col p-[18px] box-border items-start justify-start relative gap-[10px] text-7xl">
                <div className="relative w-[275px] h-[69px] shrink-0 z-[0]">
                  <div className="absolute top-[0px] left-[0px] w-[275px] h-[69px]">
                    <div className="absolute top-[2px] left-[58px] flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative font-medium inline-block">
                        Take a Selfie
                      </div>
                      <div className="relative text-base leading-[20px] text-gray-700 inline-block w-[217px]">
                        To confirm your identity, we will take your selfie
                      </div>
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                      alt=""
                      src="../assets/group-4441.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute m-[0_!important] top-[18px] left-[326px] w-[40px] h-[40px] shrink-0 z-[1]"
                  alt=""
                  src="../assets/group-443.svg"
                />
              </div>
            </div>
          </div>
          <div className="relative w-[380px] h-[54px] shrink-0 hidden text-5xl text-white">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[10px] [background:linear-gradient(89.2deg,_#2f79f9,_#3daefa)]" />
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_35px)] font-medium inline-block">
              Continue
            </div>
          </div>
          <Button
            className="relative"
            sx={{ width: 380 }}
            variant="contained"
            color="primary"
            href="/upgrade-level2-complete"
          >
            Finish
          </Button>
        </div>
        <div className="absolute top-[40px] left-[40px] w-[380px] h-[24px] text-left text-7xl">
          <div className="absolute h-full w-[46.05%] top-[0%] right-[53.95%] bottom-[0%] left-[0%] flex flex-row items-center justify-start gap-[14px] opacity-[0]">
            <img className="relative w-[24px] h-[24px] shrink-0" alt="" />
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
            src="../assets/vuesaxboldnotification8.svg"
          />
          <div className="absolute h-[46.43%] w-[58.06%] top-[0%] right-[0%] bottom-[53.57%] left-[41.94%] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
            <b className="relative inline-block">24</b>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UpgradeLevel2Verified;
