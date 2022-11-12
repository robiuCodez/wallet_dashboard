import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const SettingsHome: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-left text-5xl text-gray-700 font-dm-sans">
      <div className="absolute top-[130px] left-[129px] flex flex-row items-start justify-start gap-[32px]">
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <div className="relative w-[590px] h-[338px] shrink-0">
            <div className="absolute top-[-28px] left-[-28px] rounded-[15px] bg-white [border:1px_solid_#e8e8e8] box-border w-[590px] h-[388px] hidden" />
            <div className="absolute top-[0px] left-[0px] font-medium inline-block">
              Account
            </div>
            <div className="absolute top-[41px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[24px] text-gray-1600">
              <div className="relative w-[590px] h-[83px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[590px] h-[83px]" />
                <img
                  className="absolute top-[31px] left-[546px] w-[20px] h-[20px]"
                  alt=""
                  src="../assets/vuesaxlineararrowright32.svg"
                />
                <div className="absolute top-[18px] left-[24px] w-[154px] h-[47px]">
                  <div className="absolute top-[13px] left-[68px] inline-block">
                    View Profile
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                    alt=""
                    src="../assets/group-44246.svg"
                  />
                </div>
              </div>
              <Link
                className="cursor-pointer [text-decoration:none] relative w-[590px] h-[83px] shrink-0 text-[inherit]"
                to="/bank-details"
              >
                <div className="absolute top-[0px] left-[0px] w-[590px] h-[83px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[590px] h-[83px]" />
                  <img
                    className="absolute top-[31px] left-[546px] w-[20px] h-[20px]"
                    alt=""
                    src="../assets/vuesaxlineararrowright32.svg"
                  />
                  <div className="absolute top-[18px] left-[24px] w-[158px] h-[47px]">
                    <div className="absolute top-[13px] left-[68px] inline-block">
                      Bank Details
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                      alt=""
                      src="../assets/group-44247.svg"
                    />
                  </div>
                </div>
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative w-[590px] h-[83px] shrink-0 text-[inherit]"
                to="/limits-upgrade"
              >
                <div className="absolute top-[0px] left-[0px] w-[590px] h-[83px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[590px] h-[83px]" />
                  <img
                    className="absolute top-[31px] left-[546px] w-[20px] h-[20px]"
                    alt=""
                    src="../assets/vuesaxlineararrowright32.svg"
                  />
                  <div className="absolute top-[18px] left-[24px] w-[196px] h-[47px]">
                    <div className="absolute top-[13px] left-[68px] inline-block">{`Limits & Upgrade`}</div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                      alt=""
                      src="../assets/group-44248.svg"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative w-[590px] h-[126px] shrink-0">
            <div className="absolute top-[-28px] left-[-28px] rounded-[15px] bg-white [border:1px_solid_#e8e8e8] box-border w-[590px] h-[182px] hidden" />
            <div className="absolute top-[0px] left-[0px] font-medium inline-block">
              Preferences
            </div>
            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[43px] left-[0px] w-[590px] h-[83px] text-gray-1600"
              to="/email-notifications"
            >
              <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[20px]">
                <div className="relative w-[590px] h-[83px] shrink-0">
                  <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[590px] h-[83px]" />
                  <img
                    className="absolute top-[31px] left-[546px] w-[20px] h-[20px]"
                    alt=""
                    src="../assets/vuesaxlineararrowright43.svg"
                  />
                  <div className="absolute top-[18px] left-[24px] w-[206px] h-[47px]">
                    <div className="absolute top-[13px] left-[68px] inline-block">
                      Email Notifications
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                      alt=""
                      src="../assets/group-44249.svg"
                    />
                  </div>
                </div>
                <div className="relative w-[534px] h-[83px] shrink-0 hidden">
                  <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
                  <img
                    className="absolute top-[31px] left-[494px] w-[20px] h-[20px]"
                    alt=""
                    src="../assets/vuesaxlineararrowright43.svg"
                  />
                  <div className="absolute top-[18px] left-[24px] w-[161px] h-[47px]">
                    <div className="absolute top-[13px] left-[68px] font-medium inline-block">
                      Bank Details
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                      alt=""
                      src="../assets/group-44247.svg"
                    />
                  </div>
                </div>
                <div className="relative w-[534px] h-[83px] shrink-0 hidden">
                  <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
                  <img
                    className="absolute top-[31px] left-[494px] w-[20px] h-[20px]"
                    alt=""
                    src="../assets/vuesaxlineararrowright43.svg"
                  />
                  <div className="absolute top-[18px] left-[24px] w-[199px] h-[47px]">
                    <div className="absolute top-[13px] left-[68px] font-medium inline-block">{`Limits & Upgrade`}</div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                      alt=""
                      src="../assets/group-44248.svg"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[230px]">
          <div className="relative w-[590px] h-[445px] shrink-0">
            <div className="absolute top-[-28px] left-[-28px] rounded-[15px] bg-white [border:1px_solid_#e8e8e8] box-border w-[590px] h-[491px] hidden" />
            <div className="absolute top-[0px] left-[0px] font-medium inline-block">
              Security
            </div>
            <div className="absolute top-[41px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[24px] text-gray-1600">
              <Link
                className="cursor-pointer [text-decoration:none] relative w-[590px] h-[83px] shrink-0 text-[inherit]"
                to="/reset-password"
              >
                <div className="absolute top-[0px] left-[0px] w-[590px] h-[83px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[590px] h-[83px]" />
                  <img
                    className="absolute top-[31px] left-[546px] w-[20px] h-[20px]"
                    alt=""
                    src="../assets/vuesaxlineararrowright32.svg"
                  />
                  <div className="absolute top-[18px] left-[24px] w-[184px] h-[47px]">
                    <div className="absolute top-[13px] left-[68px] inline-block">
                      Reset Password
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                      alt=""
                      src="../assets/group-44252.svg"
                    />
                  </div>
                </div>
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative w-[590px] h-[83px] shrink-0 text-[inherit]"
                to="/settings-txn-pin"
              >
                <div className="absolute top-[0px] left-[0px] w-[590px] h-[83px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[590px] h-[83px]" />
                  <img
                    className="absolute top-[31px] left-[546px] w-[20px] h-[20px]"
                    alt=""
                    src="../assets/vuesaxlineararrowright32.svg"
                  />
                  <div className="absolute top-[18px] left-[24px] w-[181px] h-[47px]">
                    <div className="absolute top-[13px] left-[68px] inline-block">
                      Transaction Pin
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                      alt=""
                      src="../assets/group-44253.svg"
                    />
                  </div>
                </div>
              </Link>
              <div className="relative w-[590px] h-[83px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[590px] h-[83px]" />
                <img
                  className="absolute top-[31px] left-[546px] w-[20px] h-[20px]"
                  alt=""
                  src="../assets/vuesaxlineararrowright32.svg"
                />
                <div className="absolute top-[18px] left-[24px] w-[96px] h-[47px]">
                  <div className="absolute top-[13px] left-[68px] inline-block">
                    2FA
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                    alt=""
                    src="../assets/group-44254.svg"
                  />
                </div>
              </div>
              <Link
                className="cursor-pointer [text-decoration:none] relative w-[590px] h-[83px] shrink-0 text-[inherit]"
                to="/delete-account"
              >
                <div className="absolute top-[0px] left-[0px] w-[590px] h-[83px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[590px] h-[83px]" />
                  <img
                    className="absolute top-[31px] left-[546px] w-[20px] h-[20px]"
                    alt=""
                    src="../assets/vuesaxlineararrowright43.svg"
                  />
                  <div className="absolute top-[18px] left-[24px] w-[183px] h-[47px]">
                    <div className="absolute top-[13px] left-[68px] inline-block">
                      Delete Account
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                      alt=""
                      src="../assets/group-44255.svg"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative w-[124px] h-[47px] shrink-0 text-gray-1600">
            <div className="absolute top-[-28px] left-[-28px] rounded-[15px] bg-white [border:1px_solid_#e8e8e8] box-border w-[590px] h-[139px] hidden" />
            <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[20px]">
              <div className="relative w-[124px] h-[47px] shrink-0">
                <div className="absolute top-[-18px] left-[-440px] rounded-[12.54px] bg-gray-400 w-[592px] h-[83px] hidden opacity-[0]" />
                <img
                  className="absolute top-[13px] left-[54px] w-[20px] h-[20px] hidden"
                  alt=""
                  src="../assets/vuesaxlineararrowright43.svg"
                />
                <div className="absolute top-[0px] left-[0px] w-[124px] h-[47px]">
                  <div className="absolute top-[13px] left-[68px] inline-block">
                    Log out
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                    alt=""
                    src="../assets/group-44256.svg"
                  />
                </div>
              </div>
              <div className="relative w-[534px] h-[83px] shrink-0 hidden">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
                <img
                  className="absolute top-[31px] left-[494px] w-[20px] h-[20px]"
                  alt=""
                  src="../assets/vuesaxlineararrowright43.svg"
                />
                <div className="absolute top-[18px] left-[24px] w-[161px] h-[47px]">
                  <div className="absolute top-[13px] left-[68px] font-medium inline-block">
                    Bank Details
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                    alt=""
                    src="../assets/group-44247.svg"
                  />
                </div>
              </div>
              <div className="relative w-[534px] h-[83px] shrink-0 hidden">
                <div className="absolute top-[0px] left-[0px] rounded-[12.54px] bg-gray-400 w-[534px] h-[83px]" />
                <img
                  className="absolute top-[31px] left-[494px] w-[20px] h-[20px]"
                  alt=""
                  src="../assets/vuesaxlineararrowright43.svg"
                />
                <div className="absolute top-[18px] left-[24px] w-[199px] h-[47px]">
                  <div className="absolute top-[13px] left-[68px] font-medium inline-block">{`Limits & Upgrade`}</div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[47px] h-[47px]"
                    alt=""
                    src="../assets/group-44248.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1512px] h-[65px] text-white">
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
            src="../assets/vuesaxboldnotification4.svg"
          />
          <div className="absolute h-[46.43%] w-[58.06%] top-[0%] right-[0%] bottom-[53.57%] left-[41.94%] rounded-[10px] bg-brown-100 flex flex-col p-[1.5px_4px] box-border items-center justify-center">
            <b className="relative inline-block">24</b>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SettingsHome;
