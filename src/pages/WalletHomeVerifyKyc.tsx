import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const WalletHomeVerifyKyc: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1173px] overflow-hidden text-left text-3xl text-gray-700 font-dm-sans">
      <div className="absolute top-[125px] left-[150px] flex flex-row items-start justify-start gap-[32px]">
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <div className="relative w-[590px] h-[253px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-[14px] bg-white [border:1px_solid_#ededed] box-border w-[590px] h-[253px]" />
            <div className="absolute top-[28px] left-[28px] w-[534px] h-[40px]">
              <div className="absolute top-[2px] left-[498px] rounded-[8px] bg-gray-400 flex flex-row p-[8px] box-border items-start justify-start">
                <img
                  className="relative w-[20px] h-[20px] shrink-0"
                  alt=""
                  src="../assets/vuesaxlineareyeslash8.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[8px]">
                <div className="rounded-[8px] bg-gray-400 flex flex-row p-[8px] box-border items-start justify-start">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0"
                    alt=""
                    src="../assets/vuesaxboldwallet5.svg"
                  />
                </div>
                <div className="relative inline-block">Portfolio Balance</div>
              </div>
            </div>
            <div className="absolute top-[177px] left-[28px] flex flex-row items-start justify-start gap-[14px] text-center text-gray-800">
              <div className="relative w-[124px] h-[48px] shrink-0 text-white">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[8px] [background:linear-gradient(89.2deg,_#2f79f9,_#3daefa)]" />
                <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_42px)] w-[84px] flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[20px] h-[20px] shrink-0"
                    alt=""
                    src="../assets/vuesaxlinearcard15.svg"
                  />
                  <div className="relative font-medium inline-block">
                    Deposit
                  </div>
                </div>
              </div>
              <div className="relative w-[122px] h-[48px] shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[8px] bg-gray-800 opacity-[0.06]" />
                <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_42px)] w-[84px] flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[20px] h-[20px] shrink-0"
                    alt=""
                    src="../assets/vuesaxlinearmoneys8.svg"
                  />
                  <div className="relative font-medium inline-block">
                    Withdraw
                  </div>
                </div>
              </div>
              <div className="relative w-[122px] h-[48px] shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[8px] bg-gray-800 opacity-[0.06]" />
                <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_42px)] w-[84px] flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[9.98px] h-[10px] shrink-0"
                    alt=""
                    src="../assets/vector5.svg"
                  />
                  <div className="relative font-medium inline-block">Send</div>
                </div>
              </div>
              <div className="relative w-[124px] h-[48px] shrink-0">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[8px] bg-gray-800 opacity-[0.06]" />
                <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_42px)] w-[84px] flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-[9.98px] h-[10px] shrink-0"
                    alt=""
                    src="../assets/vector6.svg"
                  />
                  <div className="relative font-medium inline-block">
                    Receive
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[98px] left-[28px] flex flex-row items-center justify-start gap-[12px] text-15xl text-gray-1600">
              <b className="relative inline-block">₦ 14,342.65</b>
              <div className="rounded-[23.58px] bg-green-100 flex flex-row p-[5.502803325653076px_6.2889180183410645px] box-border items-center justify-start text-sm text-white">
                <div className="relative font-medium inline-block">+4.28%</div>
              </div>
            </div>
          </div>
          <div className="relative w-[590px] h-[524px] shrink-0 text-gray-1400">
            <div className="absolute top-[0px] left-[0px] rounded-[15px] bg-white [border:1px_solid_#e8e8e8] box-border w-[590px] h-[524px]" />
            <b className="absolute top-[28px] left-[28px] text-7xl inline-block">
              Transaction History
            </b>
            <div className="absolute top-[31px] left-[511px] text-gray-1200 inline-block opacity-[0.7]">
              View All
            </div>
            <div className="absolute top-[71px] left-[28px] h-[453px] overflow-y-auto flex flex-col items-start justify-start gap-[18px] text-gray-1600">
              <div className="relative w-[534px] h-[72px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
                <div className="absolute top-[16px] left-[16px] w-[255px] h-[40px]">
                  <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative inline-block">
                      <span className="font-medium">{`You received `}</span>
                      <b>0.02454037 BTC</b>
                    </div>
                    <div className="relative text-base text-gray-700 inline-block">
                      Tue, 19th April,2022
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                    alt=""
                    src="../assets/group-434.svg"
                  />
                </div>
              </div>
              <div className="relative w-[534px] h-[72px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
                <div className="absolute top-[16px] left-[16px] w-[209px] h-[40px]">
                  <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative inline-block">
                      <span className="font-medium">{`You withdrew `}</span>
                      <b>NGN 200</b>
                    </div>
                    <div className="relative text-base text-gray-700 inline-block">
                      Tue, 19th April,2022
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                    alt=""
                    src="../assets/group-43348.svg"
                  />
                </div>
              </div>
              <div className="relative w-[534px] h-[72px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
                <div className="absolute top-[16px] left-[16px] w-[209px] h-[40px]">
                  <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative inline-block">
                      <span className="font-medium">{`You withdrew `}</span>
                      <b>NGN 200</b>
                    </div>
                    <div className="relative text-base text-gray-700 inline-block">
                      Tue, 19th April,2022
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                    alt=""
                    src="../assets/group-43348.svg"
                  />
                </div>
              </div>
              <div className="relative w-[534px] h-[72px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
                <div className="absolute top-[16px] left-[16px] w-[255px] h-[40px]">
                  <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative inline-block">
                      <span className="font-medium">{`You received `}</span>
                      <b>0.02454037 BTC</b>
                    </div>
                    <div className="relative text-base text-gray-700 inline-block">
                      Tue, 19th April,2022
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                    alt=""
                    src="../assets/group-434.svg"
                  />
                </div>
              </div>
              <div className="relative w-[534px] h-[72px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
                <div className="absolute top-[16px] left-[16px] w-[255px] h-[40px]">
                  <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative inline-block">
                      <span className="font-medium">{`You received `}</span>
                      <b>0.02454037 BTC</b>
                    </div>
                    <div className="relative text-base text-gray-700 inline-block">
                      Tue, 19th April,2022
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[40px] h-[40px]"
                    alt=""
                    src="../assets/group-434.svg"
                  />
                </div>
              </div>
              <div className="relative w-[534px] h-[72px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
                <div className="absolute top-[16px] left-[16px] w-[255px] h-[40px]">
                  <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative inline-block">
                      <span className="font-medium">{`You received `}</span>
                      <b>0.02454037 BTC</b>
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
              </div>
              <div className="relative w-[534px] h-[72px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
                <div className="absolute top-[16px] left-[16px] w-[255px] h-[40px]">
                  <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative inline-block">
                      <span className="font-medium">{`You received `}</span>
                      <b>0.02454037 BTC</b>
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
              </div>
              <div className="relative w-[534px] h-[72px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
                <div className="absolute top-[16px] left-[16px] w-[255px] h-[40px]">
                  <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative inline-block">
                      <span className="font-medium">{`You received `}</span>
                      <b>0.02454037 BTC</b>
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
              </div>
              <div className="relative w-[534px] h-[72px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-gray-400 w-[534px] h-[72px]" />
                <div className="absolute top-[16px] left-[16px] w-[255px] h-[40px]">
                  <div className="absolute top-[1px] left-[54px] flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative inline-block">
                      <span className="font-medium">{`You received `}</span>
                      <b>0.02454037 BTC</b>
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
              </div>
            </div>
            <div className="absolute top-[68px] left-[581px] border-r-[6px_solid_#cacccf] box-border w-[6px] h-[74px]" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[32px] text-7xl text-gray-1600">
          <div className="rounded-[16px] bg-white [border:1px_solid_#e8e8e8] box-border relative w-[590px] h-[159px] shrink-0 flex flex-col p-[20px_18px] items-start justify-start">
            <div className="relative w-[554px] h-[119px] shrink-0 overflow-hidden">
              <div className="absolute top-[0px] left-[0px] w-[521px] h-[113px]">
                <div className="absolute top-[0px] left-[70px] flex flex-col items-start justify-start gap-[14px]">
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <b className="relative inline-block">
                      Complete your KYC verification
                    </b>
                    <div className="relative text-3xl leading-[24px] text-gray-700 inline-block w-[451px]">
                      Please finish the KYC verification to get the verified
                      badge and carry out more transactions
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[4px] text-center text-3xl text-gray-800">
                    <div className="relative font-medium inline-block">
                      Complete verification
                    </div>
                    <img
                      className="relative w-[18px] h-[18px] shrink-0"
                      alt=""
                      src="../assets/vuesaxlineararrowright14.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[54px] h-[54px]"
                  alt=""
                  src="../assets/group-44330.svg"
                />
              </div>
            </div>
          </div>
          <div className="relative w-[590px] h-[589px] shrink-0 text-gray-1400">
            <div className="absolute top-[0px] left-[0px] rounded-[15px] bg-white [border:1px_solid_#e8e8e8] box-border w-[590px] h-[589px]" />
            <b className="absolute top-[28px] left-[28px] inline-block">
              Assets
            </b>
            <div className="absolute top-[71px] left-[28px] h-[518px] overflow-y-auto flex flex-col items-start justify-start gap-[18px] text-right text-5xl text-gray-1600">
              <div className="relative w-[534px] h-[83px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
                <b className="absolute top-[31px] left-[403.57px] inline-block">
                  NGN 231,000
                </b>
                <div className="absolute top-[22px] left-[24px] w-[96.54px] h-[39.72px] text-left text-6xl">
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
              <div className="relative w-[534px] h-[84px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[84px]" />
                <div className="absolute top-[21px] left-[411.02px] w-[94.08px] h-[42.86px] flex flex-col items-end justify-start gap-[4.18px]">
                  <b className="relative inline-block"> 0.001 CLDX</b>
                  <div className="relative text-lg text-green-200 text-left inline-block">
                    -$232 (3.34%)
                  </div>
                </div>
                <div className="absolute top-[21px] left-[24px] w-[125.54px] h-[42.86px] text-left text-6xl">
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
                      src="../assets/cloudax-icon-b-12@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[534px] h-[84px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[84px]" />
                <div className="absolute top-[20.82px] left-[422.52px] w-[83.62px] h-[42.86px] flex flex-col items-end justify-start gap-[4.18px]">
                  <b className="relative inline-block"> 0.001 BTC</b>
                  <div className="relative text-lg text-green-200 text-left inline-block">
                    -$232 (3.34%)
                  </div>
                </div>
                <div className="absolute top-[21px] left-[24px] w-[115.54px] h-[42.86px] text-left text-6xl text-gray-1700">
                  <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                    <b className="relative inline-block">Bitcoin</b>
                    <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                      $2,906
                    </div>
                  </div>
                  <img
                    className="absolute top-[1.05px] left-[0px] w-[41.81px] h-[41.81px]"
                    alt=""
                    src="../assets/group-44430.svg"
                  />
                </div>
              </div>
              <div className="relative w-[534px] h-[83px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
                <div className="absolute top-[20.44px] left-[424.61px] w-[82.58px] h-[42.86px] flex flex-col items-end justify-start gap-[4.18px]">
                  <b className="relative inline-block"> 0.021 ETH</b>
                  <div className="relative text-lg text-brown-100 text-left inline-block">
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
                    src="../assets/group-44331.svg"
                  />
                </div>
              </div>
              <div className="relative w-[534px] h-[83px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
                <div className="absolute top-[20.44px] left-[424.61px] w-[82.58px] h-[42.86px] flex flex-col items-end justify-start gap-[4.18px]">
                  <b className="relative inline-block"> 0.021 ETH</b>
                  <div className="relative text-lg text-brown-100 text-left inline-block">
                    -$232 (3.34%)
                  </div>
                </div>
                <div className="absolute top-[20px] left-[24px] w-[101.54px] h-[42.18px] text-left text-6xl">
                  <div className="absolute top-[0px] left-[58.54px] flex flex-col items-start justify-start gap-[4.18px]">
                    <b className="relative inline-block">USDT</b>
                    <div className="relative text-lg font-medium text-gray-700 inline-block opacity-[0.7]">
                      $2,906
                    </div>
                  </div>
                  <img
                    className="absolute top-[1px] left-[0px] w-[40px] h-[40px]"
                    alt=""
                    src="../assets/group-44431.svg"
                  />
                </div>
              </div>
              <div className="relative w-[534px] h-[83px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
                <div className="absolute top-[20.44px] left-[424.61px] w-[82.58px] h-[42.86px] flex flex-col items-end justify-start gap-[4.18px]">
                  <b className="relative inline-block"> 0.021 ETH</b>
                  <div className="relative text-lg text-brown-100 text-left inline-block">
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
          <div className="relative w-[590px] h-[188px] shrink-0 text-13xl text-gray-300">
            <div className="absolute top-[0px] left-[0px] rounded-[18.4px] [background:linear-gradient(263.07deg,_#a24de5,_#6a2dec)] w-[590px] h-[188px]" />
            <img
              className="absolute top-[158px] left-[279px] w-[32px] h-[7px]"
              alt=""
              src="../assets/group-23.svg"
            />
            <div className="absolute top-[24px] left-[26.45px] w-[271.09px] h-[128px]">
              <b className="absolute top-[0px] left-[0.04px] tracking-[-0.04em] leading-[34px] inline-block w-[271.05px]">{`Refer friends & earn free crypto`}</b>
              <div className="absolute top-[77px] left-[0.04px] text-base leading-[18.4px] inline-block w-[220.1px]">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Invite your friends to Cloudax and earn
                </p>
                <p className="m-[0]">0.5 CLDX per invite!</p>
              </div>
              <img
                className="absolute top-[123.77px] left-[0px] w-[50.31px] h-[8.47px] opacity-[0.6]"
                alt=""
                src="../assets/line-9.svg"
              />
            </div>
            <img
              className="absolute top-[0px] left-[333.21px] rounded-[18px] w-[256.79px] h-[188px] overflow-hidden"
              alt=""
              src="../assets/frame-7129.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[384px] left-[1353px] border-r-[6px_solid_#cacccf] box-border w-[6px] h-[74px]" />
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
            src="../assets/vuesaxboldnotification27.svg"
          />
          <div className="absolute h-[46.43%] w-[58.06%] top-[0%] right-[0%] bottom-[53.57%] left-[41.94%] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
            <b className="relative inline-block">24</b>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WalletHomeVerifyKyc;
