import { FunctionComponent } from "react";
import { FormControlLabel, Checkbox, Button } from "@mui/material";
import { Link } from "react-router-dom";

const DeleteAccountReason: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-left text-7xl text-gray-1600 font-dm-sans">
      <div className="absolute top-[125px] left-[449px] rounded-[20px] [border:1px_solid_#e8e8e8] box-border w-[614px] h-[809px] overflow-hidden">
        <div className="absolute top-[40px] left-[40px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative w-[380px] h-[24px] shrink-0">
            <div className="absolute h-full w-[46.05%] top-[0%] right-[53.95%] bottom-[0%] left-[0%] flex flex-row items-center justify-start gap-[14px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../assets/vuesaxlineararrowleft12.svg"
              />
              <b className="relative inline-block opacity-[0]">Bank Details</b>
            </div>
            <div className="absolute h-full w-[6.32%] top-[0%] right-[0%] bottom-[0%] left-[93.68%] opacity-[0] text-xs text-white">
              <img
                className="absolute top-[0px] left-[-3px] w-[30px] h-[30px]"
                alt=""
              />
              <div className="absolute top-[-2px] left-[11px] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
                <b className="relative inline-block">24</b>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[40px] text-center text-11xl">
            <div className="flex flex-col items-center justify-start gap-[18px]">
              <img
                className="relative w-[90px] h-[90px] shrink-0"
                alt=""
                src="../assets/group-44721.svg"
              />
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <b className="relative inline-block">
                  Reason for deleting account
                </b>
                <div className="relative text-3xl leading-[24px] text-gray-700 inline-block w-[340px]">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Why do you want to delete your account?
                  </p>
                  <p className="m-[0]">
                    Deleting the account will remove all your data
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[27px] text-left text-5xl">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative w-[534px] h-[84px] shrink-0">
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
                    <div className="rounded-[18px] bg-gray-400 w-[534px] flex flex-col p-[21px_21px_21px_20px] box-border items-start justify-start">
                      <div className="relative w-[490px] h-[42px] shrink-0">
                        <div className="absolute top-[0px] left-[0px] w-[490px] h-[42px]">
                          <FormControlLabel
                            className="absolute top-[9px] left-[466px]"
                            label=""
                            control={<Checkbox color="primary" size="medium" />}
                          />
                          <div className="absolute top-[0px] left-[0px] w-[122px] h-[42px]">
                            <div className="absolute top-[0px] left-[0px] w-[122px] h-[42px]">
                              <div className="absolute top-[11px] left-[58px] w-[64px] h-[21px]">
                                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[6px]">
                                  <div className="relative w-[64px] h-[21px] shrink-0">
                                    <div className="absolute top-[0px] left-[0px] w-[64px] h-[21px]">
                                      <p className="m-[0] absolute top-[0px] left-[0px] font-medium inline-block">
                                        Reason 1
                                      </p>
                                    </div>
                                  </div>
                                  <div className="relative text-xl leading-[24px] text-gray-700 hidden w-[251px]">
                                    Verify your identity by uploading your BVN
                                  </div>
                                </div>
                              </div>
                              <div className="absolute top-[0px] left-[0px] w-[42px] h-[42px]">
                                <img
                                  className="absolute top-[0px] left-[0px] w-[42px] h-[42px]"
                                  alt=""
                                  src="../assets/ellipse-1515.svg"
                                />
                                <img
                                  className="absolute top-[12px] left-[12px] w-[18px] h-[18px]"
                                  alt=""
                                  src="../assets/vuesaxboldmoneys.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[102px] shrink-0 hidden flex-col items-start justify-start text-8xl">
                  <div className="rounded-[18px] bg-gray-400 w-[534px] h-[102px] shrink-0 flex flex-col p-[21px_21px_21px_20px] box-border items-start justify-start">
                    <div className="relative w-[490px] h-[61.11px] shrink-0">
                      <img
                        className="absolute top-[19.21px] left-[467.23px] w-[22.78px] h-[22.6px]"
                        alt=""
                        src="../assets/vuesaxlineartrash.svg"
                      />
                      <div className="absolute top-[0px] left-[0px] w-[359.32px] h-[61.11px]">
                        <div className="absolute top-[2.26px] left-[72.88px] flex flex-col items-start justify-start gap-[6.85px]">
                          <div className="relative font-medium inline-block">
                            Investor Seed
                          </div>
                          <div className="relative text-4xl leading-[27.39px] text-gray-700 inline-block w-[286.44px]">
                            First Bank ??? 0134****7881
                          </div>
                        </div>
                        <img
                          className="absolute top-[0px] left-[0px] w-[54.66px] h-[54.24px]"
                          alt=""
                          src="../assets/group-44335.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative w-[534px] h-[84px] shrink-0">
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
                    <div className="rounded-[18px] bg-gray-400 w-[534px] flex flex-col p-[21px_21px_21px_20px] box-border items-start justify-start">
                      <div className="relative w-[490px] h-[42px] shrink-0">
                        <div className="absolute top-[0px] left-[0px] w-[490px] h-[42px]">
                          <FormControlLabel
                            className="absolute top-[9px] left-[466px]"
                            label=""
                            control={<Checkbox color="primary" size="medium" />}
                          />
                          <div className="absolute top-[0px] left-[0px] w-[126px] h-[42px]">
                            <div className="absolute top-[11px] left-[58px] w-[68px] h-[21px]">
                              <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[6px]">
                                <p className="m-[0] relative font-medium inline-block">
                                  Reason 2
                                </p>
                                <div className="relative text-xl leading-[24px] text-gray-700 hidden w-[251px]">
                                  Verify your identity by uploading your BVN
                                </div>
                              </div>
                            </div>
                            <img
                              className="absolute top-[0px] left-[0px] w-[42px] h-[42px]"
                              alt=""
                              src="../assets/group-44230.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[102px] shrink-0 hidden flex-col items-start justify-start text-8xl">
                  <div className="rounded-[18px] bg-gray-400 w-[534px] h-[102px] shrink-0 flex flex-col p-[21px_21px_21px_20px] box-border items-start justify-start">
                    <div className="relative w-[490px] h-[61.11px] shrink-0">
                      <img
                        className="absolute top-[19.21px] left-[467.23px] w-[22.78px] h-[22.6px]"
                        alt=""
                        src="../assets/vuesaxlineartrash.svg"
                      />
                      <div className="absolute top-[0px] left-[0px] w-[359.32px] h-[61.11px]">
                        <div className="absolute top-[2.26px] left-[72.88px] flex flex-col items-start justify-start gap-[6.85px]">
                          <div className="relative font-medium inline-block">
                            Investor Seed
                          </div>
                          <div className="relative text-4xl leading-[27.39px] text-gray-700 inline-block w-[286.44px]">
                            First Bank ??? 0134****7881
                          </div>
                        </div>
                        <img
                          className="absolute top-[0px] left-[0px] w-[54.66px] h-[54.24px]"
                          alt=""
                          src="../assets/group-44335.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative w-[534px] h-[84px] shrink-0">
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
                    <div className="rounded-[18px] bg-gray-400 w-[534px] flex flex-col p-[21px_21px_21px_20px] box-border items-start justify-start">
                      <div className="relative w-[490px] h-[42px] shrink-0">
                        <div className="absolute top-[0px] left-[0px] w-[490px] h-[42px]">
                          <FormControlLabel
                            className="absolute top-[9px] left-[466px]"
                            label=""
                            control={<Checkbox color="primary" size="medium" />}
                          />
                          <div className="absolute top-[0px] left-[0px] w-[127px] h-[42px]">
                            <div className="absolute top-[11px] left-[58px] w-[69px] h-[21px]">
                              <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[6px]">
                                <p className="m-[0] relative font-medium inline-block">
                                  Reason 3
                                </p>
                                <div className="relative text-xl leading-[24px] text-gray-700 hidden w-[251px]">
                                  Verify your identity by uploading your BVN
                                </div>
                              </div>
                            </div>
                            <img
                              className="absolute top-[0px] left-[0px] w-[42px] h-[42px]"
                              alt=""
                              src="../assets/group-44230.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[102px] shrink-0 hidden flex-col items-start justify-start text-8xl">
                  <div className="rounded-[18px] bg-gray-400 w-[534px] h-[102px] shrink-0 flex flex-col p-[21px_21px_21px_20px] box-border items-start justify-start">
                    <div className="relative w-[490px] h-[61.11px] shrink-0">
                      <img
                        className="absolute top-[19.21px] left-[467.23px] w-[22.78px] h-[22.6px]"
                        alt=""
                        src="../assets/vuesaxlineartrash.svg"
                      />
                      <div className="absolute top-[0px] left-[0px] w-[359.32px] h-[61.11px]">
                        <div className="absolute top-[2.26px] left-[72.88px] flex flex-col items-start justify-start gap-[6.85px]">
                          <div className="relative font-medium inline-block">
                            Investor Seed
                          </div>
                          <div className="relative text-4xl leading-[27.39px] text-gray-700 inline-block w-[286.44px]">
                            First Bank ??? 0134****7881
                          </div>
                        </div>
                        <img
                          className="absolute top-[0px] left-[0px] w-[54.66px] h-[54.24px]"
                          alt=""
                          src="../assets/group-44335.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="absolute bottom-[40px] left-[calc(50%_-_267px)]"
          sx={{ width: 534 }}
          variant="contained"
          color="primary"
          href="/delete-account-2fa"
        >
          Proceed
        </Button>
        <div className="absolute top-[136px] left-[604px] border-r-[6px_solid_#cacccf] box-border w-[6px] h-[53px] hidden" />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1512px] h-[65px] text-5xl text-white">
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
            src="../assets/vuesaxboldnotification41.svg"
          />
          <div className="absolute h-[46.43%] w-[58.06%] top-[0%] right-[0%] bottom-[53.57%] left-[41.94%] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
            <b className="relative inline-block">24</b>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DeleteAccountReason;
