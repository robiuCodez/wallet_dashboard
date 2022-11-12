import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const SwapToken: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-left text-7xl text-gray-1600 font-dm-sans">
      <div className="absolute top-[125px] left-[449px] rounded-[20px] [border:1px_solid_#e8e8e8] box-border w-[614px] h-[676px] overflow-hidden">
        <div className="absolute top-[40px] left-[40px] flex flex-col items-start justify-start gap-[27px]">
          <div className="relative w-[380px] h-[24px] shrink-0">
            <div className="absolute h-full w-[46.05%] top-[0%] right-[53.95%] bottom-[0%] left-[0%] flex flex-row items-center justify-start gap-[14px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../assets/vuesaxlineararrowleft4.svg"
              />
              <b className="relative inline-block">Swap</b>
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
          <div className="relative text-5xl font-medium inline-block">
            Swap BTC for
          </div>
          <div className="h-[909px] shrink-0 overflow-y-auto flex flex-col items-start justify-start gap-[20px] text-3xl text-gray-800">
            <div className="relative w-[534px] h-[83px] shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
              <div className="absolute top-[25px] left-[445px] rounded-[8px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-start">
                <div className="relative font-medium inline-block">TRC20</div>
              </div>
              <div className="absolute top-[22px] left-[24px] w-[96.54px] h-[39.72px] text-6xl text-gray-1600">
                <b className="absolute top-[8.36px] left-[58.54px] inline-block">
                  NGN
                </b>
                <div className="absolute top-[0px] left-[0px] w-[41.81px] h-[39.72px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[25.28px] w-[41.81px] h-[39.72px] overflow-hidden flex flex-row items-start justify-start">
                    <div className="relative bg-green-300 w-[12.64px] h-[39.72px] shrink-0" />
                    <div className="relative bg-white w-[15.35px] h-[39.72px] shrink-0" />
                    <div className="relative bg-green-300 w-[14.63px] h-[39.72px] shrink-0" />
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="cursor-pointer [text-decoration:none] relative w-[534px] h-[84px] shrink-0 text-[inherit]"
              to="/swap-tokens"
            >
              <div className="absolute top-[0px] left-[0px] w-[534px] h-[84px]">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[84px]" />
                <div className="absolute top-[25px] left-[445px] rounded-[8px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-start">
                  <div className="relative font-medium inline-block">TRC20</div>
                </div>
                <div className="absolute top-[21px] left-[24px] w-[125.54px] h-[42.86px] text-6xl text-gray-1600">
                  <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                    <b className="relative inline-block">Cloudax</b>
                    <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                      $2,906
                    </div>
                  </div>
                  <div className="absolute top-[1.05px] left-[0px] w-[41.81px] h-[41.81px]">
                    <img
                      className="absolute top-[0px] left-[0px] w-[41.81px] h-[41.81px] opacity-[0.7]"
                      alt=""
                      src="../assets/ellipse-15.svg"
                    />
                    <img
                      className="absolute top-[12.54px] left-[8.36px] w-[24.53px] h-[16.72px] object-cover"
                      alt=""
                      src="../assets/cloudax-icon-b-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </Link>
            <div className="relative w-[534px] h-[84px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[84px]" />
              <div className="absolute top-[25px] left-[445px] rounded-[8px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-start">
                <div className="relative font-medium inline-block">TRC20</div>
              </div>
              <div className="absolute top-[21px] left-[24px] w-[115.54px] h-[42.86px] text-6xl text-gray-1700">
                <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                  <b className="relative inline-block">Bitcoin</b>
                  <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                    $2,906
                  </div>
                </div>
                <img
                  className="absolute top-[1.05px] left-[0px] w-[41.81px] h-[41.81px]"
                  alt=""
                  src="../assets/group-4443.svg"
                />
              </div>
            </div>
            <div className="relative w-[534px] h-[83px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
              <div className="absolute top-[25px] left-[445px] rounded-[8px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-start">
                <div className="relative font-medium inline-block">TRC20</div>
              </div>
              <div className="absolute top-[20px] left-[24px] w-[138.54px] h-[42.86px] text-6xl text-gray-1600">
                <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                  <b className="relative inline-block">Ethereum</b>
                  <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                    $2,906
                  </div>
                </div>
                <img
                  className="absolute top-[1.05px] left-[0px] w-[41.81px] h-[41.81px]"
                  alt=""
                  src="../assets/group-4433.svg"
                />
              </div>
            </div>
            <div className="relative w-[534px] h-[83px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
              <div className="absolute top-[25px] left-[445px] rounded-[8px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-start">
                <div className="relative font-medium inline-block">TRC20</div>
              </div>
              <div className="absolute top-[20px] left-[24px] w-[101.54px] h-[42.18px] text-6xl text-gray-1600">
                <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                  <b className="relative inline-block">USDT</b>
                  <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                    $2,906
                  </div>
                </div>
                <img
                  className="absolute top-[1px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-4444.svg"
                />
              </div>
            </div>
            <div className="relative w-[534px] h-[83px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
              <div className="absolute top-[25px] left-[445px] rounded-[8px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-start">
                <div className="relative font-medium inline-block">TRC20</div>
              </div>
              <div className="absolute top-[20px] left-[24px] w-[100.54px] h-[42.18px] text-6xl text-gray-1600">
                <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                  <b className="relative inline-block">Dash</b>
                  <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                    $2,906
                  </div>
                </div>
                <img
                  className="absolute top-[1px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-4445.svg"
                />
              </div>
            </div>
            <div className="relative w-[534px] h-[83px] shrink-0 hidden text-right text-5xl text-gray-1600">
              <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
              <div className="absolute top-[20.44px] left-[424.61px] w-[82.58px] h-[42.86px] flex flex-col items-end justify-start gap-[4.18px]">
                <b className="relative inline-block"> 0.021 ETH</b>
                <div className="relative text-lg text-green-200 text-left inline-block">
                  -$232 (3.34%)
                </div>
              </div>
              <div className="absolute top-[20px] left-[24px] w-[138.54px] h-[42.86px] text-left text-6xl">
                <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                  <b className="relative inline-block">Ethereum</b>
                  <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                    $2,906
                  </div>
                </div>
                <img
                  className="absolute top-[1.05px] left-[0px] w-[41.81px] h-[41.81px]"
                  alt=""
                />
              </div>
            </div>
            <div className="relative w-[534px] h-[83px] shrink-0 hidden text-right text-5xl text-gray-1600">
              <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
              <div className="absolute top-[20.44px] left-[424.61px] w-[82.58px] h-[42.86px] flex flex-col items-end justify-start gap-[4.18px]">
                <b className="relative inline-block"> 0.021 ETH</b>
                <div className="relative text-lg text-green-200 text-left inline-block">
                  -$232 (3.34%)
                </div>
              </div>
              <div className="absolute top-[20px] left-[24px] w-[138.54px] h-[42.86px] text-left text-6xl">
                <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                  <b className="relative inline-block">Ethereum</b>
                  <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                    $2,906
                  </div>
                </div>
                <img
                  className="absolute top-[1.05px] left-[0px] w-[41.81px] h-[41.81px]"
                  alt=""
                />
              </div>
            </div>
            <div className="relative w-[534px] h-[83px] shrink-0 hidden text-right text-5xl text-gray-1600">
              <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
              <div className="absolute top-[20.44px] left-[424.61px] w-[82.58px] h-[42.86px] flex flex-col items-end justify-start gap-[4.18px]">
                <b className="relative inline-block"> 0.021 ETH</b>
                <div className="relative text-lg text-green-200 text-left inline-block">
                  -$232 (3.34%)
                </div>
              </div>
              <div className="absolute top-[20px] left-[24px] w-[138.54px] h-[42.86px] text-left text-6xl">
                <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                  <b className="relative inline-block">Ethereum</b>
                  <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                    $2,906
                  </div>
                </div>
                <img
                  className="absolute top-[1.05px] left-[0px] w-[41.81px] h-[41.81px]"
                  alt=""
                />
              </div>
            </div>
            <div className="relative w-[534px] h-[83px] shrink-0 hidden text-right text-5xl text-gray-1600">
              <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
              <div className="absolute top-[20.44px] left-[424.61px] w-[82.58px] h-[42.86px] flex flex-col items-end justify-start gap-[4.18px]">
                <b className="relative inline-block"> 0.021 ETH</b>
                <div className="relative text-lg text-green-200 text-left inline-block">
                  -$232 (3.34%)
                </div>
              </div>
              <div className="absolute top-[20px] left-[24px] w-[138.54px] h-[42.86px] text-left text-6xl">
                <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                  <b className="relative inline-block">Ethereum</b>
                  <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                    $2,906
                  </div>
                </div>
                <img
                  className="absolute top-[1.05px] left-[0px] w-[41.81px] h-[41.81px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
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
            src="../assets/vuesaxboldnotification.svg"
          />
          <div className="absolute h-[46.43%] w-[58.06%] top-[0%] right-[0%] bottom-[53.57%] left-[41.94%] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
            <b className="relative inline-block">24</b>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SwapToken;
