import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const AssetTxnDetails: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-left text-5xl text-white font-dm-sans">
      <div className="absolute top-[0px] left-[0px] w-[1512px] h-[65px]">
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
            src="../assets/vuesaxboldnotification4.svg"
          />
          <div className="absolute h-[46.43%] w-[58.06%] top-[0%] right-[0%] bottom-[53.57%] left-[41.94%] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
            <b className="relative inline-block">24</b>
          </div>
        </Link>
      </div>
      <div className="absolute top-[125px] left-[150px] flex flex-row items-start justify-start gap-[32px] text-3xl">
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <div className="relative w-[590px] h-[312px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-[15px] [background:linear-gradient(158.34deg,_#5563e7,_#3949e3)] shadow-[0px_12px_22px_rgba(52,_69,_85,_0.03)] w-[590px] h-[312px]" />
            <div className="absolute top-[28px] left-[28px] w-[534px] h-[36px]">
              <div className="absolute top-[0px] left-[498px] rounded-[8px] bg-gray-1800 flex flex-row p-[8px] box-border items-start justify-start">
                <img
                  className="relative w-[20px] h-[20px] shrink-0"
                  alt=""
                  src="../assets/vuesaxlineareyeslash.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[14px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0"
                    alt=""
                    src="../assets/vuesaxlineararrowleft8.svg"
                  />
                  <b className="relative inline-block">BTC Wallet</b>
                </div>
                <div className="rounded-[23.58px] bg-green-100 flex flex-row p-[5.502803325653076px_6.2889180183410645px] box-border items-center justify-start text-sm">
                  <div className="relative font-medium inline-block">
                    +4.28%
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[236px] left-[28px] flex flex-row items-start justify-start gap-[14px] text-center">
              <div className="relative w-[124px] h-[48px] shrink-0 hidden">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[8px] bg-gray-1900" />
                <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_42px)] w-[84px] flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[20px] h-[20px] shrink-0"
                    alt=""
                    src="../assets/vuesaxlinearcard.svg"
                  />
                  <div className="relative font-medium inline-block">
                    Deposit
                  </div>
                </div>
              </div>
              <div className="relative w-[122px] h-[48px] shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[8px] bg-white opacity-[0.06]" />
                <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_42px)] w-[84px] flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[18px] h-[18px] shrink-0"
                    alt=""
                    src="../assets/vuesaxlinearframe2.svg"
                  />
                  <div className="relative font-medium inline-block">Swap</div>
                </div>
              </div>
              <div className="relative w-[122px] h-[48px] shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[8px] bg-white opacity-[0.06]" />
                <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_42px)] w-[84px] flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[9.98px] h-[10px] shrink-0"
                    alt=""
                    src="../assets/vector1.svg"
                  />
                  <div className="relative font-medium inline-block">Send</div>
                </div>
              </div>
              <div className="relative w-[124px] h-[48px] shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[8px] bg-white opacity-[0.06]" />
                <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_42px)] w-[84px] flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[9.98px] h-[10px] shrink-0"
                    alt=""
                    src="../assets/vector2.svg"
                  />
                  <div className="relative font-medium inline-block">
                    Receive
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[104px] left-[28px] flex flex-col items-start justify-center gap-[14px] text-17xl text-pink">
              <b className="relative inline-block">
                <span>{`BTC `}</span>
                <span className="text-white">15.43</span>
              </b>
              <div className="relative text-9xl font-medium text-white inline-block opacity-[0.9]">
                ₦ 144,000,342.65
              </div>
            </div>
          </div>
          <div className="rounded-[15px] bg-white [border:1px_solid_#e8e8e8] box-border relative w-[590px] h-[465px] shrink-0 flex flex-col p-[20px] items-start justify-start gap-[19px] text-9xl text-gray-1500">
            <b className="relative leading-[28px] inline-block z-[0]">
              BTC Chart
            </b>
            <div className="flex-1 self-stretch relative z-[1] text-right text-base text-gray-600">
              <div className="absolute top-[33.68px] left-[0px] w-[550px] h-[24.95px] flex flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[20px] inline-block">
                  1,000.00
                </div>
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[1px]"
                  alt=""
                  src="../assets/vector-66.svg"
                />
              </div>
              <div className="absolute top-[93.55px] left-[0px] w-[550px] h-[24.95px] flex flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[20px] flex items-center w-[47px] h-[20px] shrink-0">
                  800.00
                </div>
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[1px]"
                  alt=""
                  src="../assets/vector-65.svg"
                />
              </div>
              <div className="absolute top-[153.44px] left-[0px] w-[550px] h-[24.95px] flex flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[20px] flex items-center w-[47px] h-[20px] shrink-0">
                  600.00
                </div>
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[1px]"
                  alt=""
                  src="../assets/vector-64.svg"
                />
              </div>
              <div className="absolute top-[213.31px] left-[0px] w-[550px] h-[24.95px] flex flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[20px] flex items-center w-[47px] shrink-0">
                  400.00
                </div>
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[1px]"
                  alt=""
                  src="../assets/vector-63.svg"
                />
              </div>
              <div className="absolute top-[273.2px] left-[0px] w-[550px] h-[24.95px] flex flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[20px] flex items-center w-[47px] shrink-0">
                  200.00
                </div>
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[1px]"
                  alt=""
                  src="../assets/vector-61.svg"
                />
              </div>
              <div className="absolute top-[333.07px] left-[0px] w-[550px] h-[24.95px] flex flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[20px] flex items-center w-[47px] shrink-0">
                  0
                </div>
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[1px]"
                  alt=""
                  src="../assets/vector-62.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[550px] h-[24.95px] flex flex-row items-center justify-between">
                <div className="relative leading-[20px] flex items-center w-[47px] h-[20px] shrink-0">
                  unit
                </div>
                <div className="flex flex-row items-center justify-end text-left text-gray-1500 font-montserrat">
                  <div className="hidden flex-row items-center justify-end gap-[4px]">
                    <div className="relative rounded-[100px] bg-indigo-200 w-[12px] h-[12px] shrink-0" />
                    <div className="relative leading-[20px] inline-block">
                      图例
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[353.05px] left-[52.79px] w-[497.21px] h-[24.95px] flex flex-row items-center justify-center text-center">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">1</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">2</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">3</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">4</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">5</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">6</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">7</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">8</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">9</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">10</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">11</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative leading-[20px] inline-block">12</div>
                </div>
              </div>
              <img
                className="absolute top-[92.04px] left-[73.04px] w-[455.92px] h-[186.92px]"
                alt=""
                src="../assets/vector-14.svg"
              />
            </div>
            <div className="absolute m-[0_!important] top-[176px] left-[367px] w-[80.37px] h-[236px] shrink-0 z-[2] text-2xl text-gray-700 font-poppins">
              <img
                className="absolute top-[-0.49px] left-[13.51px] w-[2px] h-[236.98px]"
                alt=""
                src="../assets/path-4.svg"
              />
              <div className="absolute h-[13.86%] w-full top-[3.81%] right-[0%] bottom-[82.32%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[14.21px] [background:linear-gradient(99.84deg,_#f6f5ff,_rgba(255,_255,_255,_0.83))] shadow-[0px_16.661197662353516px_34.3px_rgba(255,_57,_223,_0.15)] [backdrop-filter:blur(14.7px)]" />
                <div className="absolute top-[8px] left-[11px] flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative w-[8px] h-[8px] shrink-0"
                    alt=""
                    src="../assets/oval-6.svg"
                  />
                  <div className="relative font-medium inline-block">
                    ₦7.357
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute m-[0_!important] top-[245px] left-[357px] w-[46.36px] h-[47.68px] shrink-0 z-[3]"
              alt=""
              src="../assets/group-994.svg"
            />
          </div>
        </div>
        <div className="relative w-[590px] h-[809px] shrink-0 text-7xl text-gray-1400">
          <div className="absolute top-[0px] left-[0px] rounded-[15px] bg-white [border:1px_solid_#e8e8e8] box-border w-[590px] h-[809px]" />
          <b className="absolute top-[28px] left-[28px] inline-block">
            Transaction History
          </b>
          <img
            className="absolute top-[28px] left-[538px] w-[24px] h-[24px]"
            alt=""
            src="../assets/vuesaxlinearsetting4.svg"
          />
          <div className="absolute top-[71px] left-[28px] h-[737px] overflow-y-auto flex flex-col items-start justify-start gap-[18px] text-3xl text-gray-1600">
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[320px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">Sent</span>
                    <b> BTC 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    To: 0x98cbnf78s.......f0sdf • Tue, 19th April, 2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-433.svg"
                />
              </div>
              <div className="absolute top-[20px] left-[449px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-orange">
                <div className="relative inline-block">Pending</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[336px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">{`Received `}</span>
                    <b>BTC 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    From: 0x98cbnf78s.......f0sdf • Tue, 19th April, 2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-434.svg"
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[270px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">Swaped</span>
                    <b> ₦256,000</b>
                    <span className="font-medium"> for</span>
                    <b> CLDX 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    Tue, 19th April,2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-4331.svg"
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[311px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">{`Received `}</span>
                    <b>BTC 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    From: 0x98cbnf78s.......f0sdf • 19th April, 2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-434.svg"
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[270px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">Swaped</span>
                    <b> ₦256,000</b>
                    <span className="font-medium"> for</span>
                    <b> CLDX 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    Tue, 19th April,2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-4332.svg"
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[311px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">{`Received `}</span>
                    <b>BTC 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    From: 0x98cbnf78s.......f0sdf • 19th April, 2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-434.svg"
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[311px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">{`Received `}</span>
                    <b>BTC 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    From: 0x98cbnf78s.......f0sdf • 19th April, 2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-434.svg"
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[270px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">Swaped</span>
                    <b> ₦256,000</b>
                    <span className="font-medium"> for</span>
                    <b> CLDX 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    Tue, 19th April,2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-4332.svg"
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[270px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">Swaped</span>
                    <b> ₦256,000</b>
                    <span className="font-medium"> for</span>
                    <b> CLDX 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    Tue, 19th April,2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                  src="../assets/group-4334.svg"
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[270px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">Swaped</span>
                    <b> ₦256,000</b>
                    <span className="font-medium"> for</span>
                    <b> CLDX 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    Tue, 19th April,2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[270px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">Swaped</span>
                    <b> ₦256,000</b>
                    <span className="font-medium"> for</span>
                    <b> CLDX 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    Tue, 19th April,2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[270px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">Swaped</span>
                    <b> ₦256,000</b>
                    <span className="font-medium"> for</span>
                    <b> CLDX 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    Tue, 19th April,2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[270px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">Swaped</span>
                    <b> ₦256,000</b>
                    <span className="font-medium"> for</span>
                    <b> CLDX 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    Tue, 19th April,2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
            <div className="relative w-[534px] h-[72px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
              <div className="absolute top-[16px] left-[17px] w-[270px] h-[40px]">
                <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative inline-block">
                    <span className="font-medium">Swaped</span>
                    <b> ₦256,000</b>
                    <span className="font-medium"> for</span>
                    <b> CLDX 26.6</b>
                  </div>
                  <div className="relative text-base text-gray-700 inline-block">
                    Tue, 19th April,2022
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                  alt=""
                />
              </div>
              <div className="absolute top-[20px] left-[434px] rounded-[6px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-center text-base text-green-100">
                <div className="relative inline-block">Successful</div>
              </div>
            </div>
          </div>
          <div className="absolute top-[68px] left-[581px] border-r-[6px_solid_#cacccf] box-border w-[6px] h-[74px]" />
        </div>
      </div>
      <div className="absolute top-[215px] left-[1353px] border-r-[6px_solid_#cacccf] box-border w-[6px] h-[74px]" />
      <div className="absolute top-[0px] left-[0px] bg-black w-[1512px] h-[982px] opacity-[0.4]" />
      <div className="absolute h-[70.37%] top-[12.73%] bottom-[16.9%] left-[542px] w-[436px] text-7xl text-gray-1600">
        <div className="absolute h-full top-[0%] bottom-[0%] left-[0px] rounded-[24px] bg-white w-[436px]" />
        <div className="absolute top-[28px] left-[28px] flex flex-col items-start justify-start gap-[18px]">
          <div className="flex flex-col items-center justify-start gap-[4px] z-[0]">
            <b className="relative inline-block">Bitcoin Received</b>
            <div className="relative text-5xl font-medium text-gray-700 inline-block">
              ID: EDIFM6799QD9
            </div>
          </div>
          <div className="rounded-[16px] bg-gray-400 w-[380px] flex flex-col p-[30px_24px] box-border items-start justify-start z-[1] text-5xl">
            <div className="flex flex-col items-center justify-start gap-[28px]">
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0 hidden"
                  alt=""
                  src="../assets/vuesaxlinearcard1.svg"
                />
                <div className="relative font-medium inline-block">
                  Transaction details
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[18px] text-base text-gray-1400">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[170%] inline-block mix-blend-normal">
                    Transaction date
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[9px] text-3xl text-gray-1600">
                    <div className="relative leading-[170%] font-medium inline-block mix-blend-normal">
                      2022-04-30, 14:38:59
                    </div>
                    <img
                      className="relative w-[20px] h-[20px] shrink-0 hidden"
                      alt=""
                      src="../assets/vuesaxlineardocumentcopy2.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[170%] inline-block mix-blend-normal">
                    BTC Amount
                  </div>
                  <b className="relative text-3xl leading-[170%] inline-block text-gray-1600 mix-blend-normal">
                    0.02454037 BTC
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[170%] inline-block mix-blend-normal">
                    USD Amount
                  </div>
                  <b className="relative text-3xl leading-[170%] inline-block text-gray-1600 mix-blend-normal">
                    $900.76
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[170%] inline-block mix-blend-normal">
                    Wallet Address
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[9px] text-3xl text-gray-1600">
                    <b className="relative leading-[170%] inline-block mix-blend-normal">
                      18WmMsAsSsrPHo9VNEupecZ1xH8gPzygWi
                    </b>
                    <img
                      className="relative w-[20px] h-[20px] shrink-0"
                      alt=""
                      src="../assets/vuesaxlineardocumentcopy3.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[170%] inline-block mix-blend-normal">
                    Status
                  </div>
                  <div className="relative text-3xl leading-[170%] font-medium text-green-200 inline-block mix-blend-normal">
                    Successful
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[170%] inline-block mix-blend-normal">
                    Rate
                  </div>
                  <b className="relative text-3xl leading-[170%] inline-block text-gray-1600 mix-blend-normal">
                    36705.13000
                  </b>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] absolute m-[0_!important] h-[4.34%] top-[0%] right-[0px] bottom-[95.66%] w-[24px] z-[2]"
            to="/asset-details"
          >
            <img
              className="absolute h-full top-[0%] right-[0px] bottom-[0%] max-h-full w-[24px]"
              alt=""
              src="../assets/vuesaxlinearclose.svg"
            />
          </Link>
        </div>
        <div className="absolute w-[calc(100%_-_56px)] right-[28px] bottom-[28px] left-[28px] h-[54px] text-center text-5xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[10px]" />
          <div className="absolute h-[38.89%] w-[36.84%] top-[29.63%] right-[31.58%] bottom-[31.48%] left-[31.58%] font-medium [background:linear-gradient(89.2deg,_#2f79f9,_#3daefa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
            View in Blockchain
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetTxnDetails;
