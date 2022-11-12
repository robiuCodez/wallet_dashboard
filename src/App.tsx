import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login";
import Verified from "./pages/Verified";
import VerifyId from "./pages/VerifyId";
import VerifyKyc from "./pages/VerifyKyc";
import OldVerifyId from "./pages/OldVerifyId";
import MacBookPro14469 from "./pages/MacBookPro14469";
import CreateTxnPin2 from "./pages/CreateTxnPin2";
import CreateTxnPin from "./pages/CreateTxnPin";
import ActivateAccount2 from "./pages/ActivateAccount2";
import ActivateAccount from "./pages/ActivateAccount";
import EnterPhoneNumber from "./pages/EnterPhoneNumber";
import FaEnterOtpNew from "./pages/FaEnterOtpNew";
import FA from "./pages/FA";
import PasswordChanged from "./pages/PasswordChanged";
import CreateSecurePwd from "./pages/CreateSecurePwd";
import SwapTokenSuccess from "./pages/SwapTokenSuccess";
import SwapTokenConfirm from "./pages/SwapTokenConfirm";
import SwapTokens from "./pages/SwapTokens";
import SwapToken from "./pages/SwapToken";
import AssetTxnDetails from "./pages/AssetTxnDetails";
import AssetDetailsToken from "./pages/AssetDetailsToken";
import AssetDetails from "./pages/AssetDetails";
import WalletAssets from "./pages/WalletAssets";
import WithdrawSuccess from "./pages/WithdrawSuccess";
import SendSuccess from "./pages/SendSuccess";
import SendHome from "./pages/SendHome";
import WithdrawHome from "./pages/WithdrawHome";
import ReceiveHome from "./pages/ReceiveHome";
import SendComplete from "./pages/SendComplete";
import SendAmount from "./pages/SendAmount";
import SendWallet from "./pages/SendWallet";
import ReceiveAddrCopied from "./pages/ReceiveAddrCopied";
import ReceiveQrcode from "./pages/ReceiveQrcode";
import ReceiveWallet from "./pages/ReceiveWallet";
import WithdrawEnterOtp from "./pages/WithdrawEnterOtp";
import Withdraw2FA from "./pages/Withdraw2FA";
import WithdrawTxnPin from "./pages/WithdrawTxnPin";
import WithdrawComplete from "./pages/WithdrawComplete";
import WithdrawDestination from "./pages/WithdrawDestination";
import WithdrawAmtFinish from "./pages/WithdrawAmtFinish";
import WithdrawAmount2 from "./pages/WithdrawAmount2";
import WithdrawSelectWallet from "./pages/WithdrawSelectWallet";
import WalletHomeDeposit from "./pages/WalletHomeDeposit";
import NotificationsModal from "./pages/NotificationsModal";
import TxnHistoryModal from "./pages/TxnHistoryModal";
import WalletHome from "./pages/WalletHome";
import DepositComplete from "./pages/DepositComplete";
import DepositFailed from "./pages/DepositFailed";
import TopUpMethod from "./pages/TopUpMethod";
import WalletDepositFinish from "./pages/WalletDepositFinish";
import WalletHomeHideDetails from "./pages/WalletHomeHideDetails";
import WalletHomeVerifyKyc from "./pages/WalletHomeVerifyKyc";
import MakePayment from "./pages/MakePayment";
import P2pMerchants from "./pages/P2pMerchants";
import WalletDepositAmount from "./pages/WalletDepositAmount";
import WalletDeposit from "./pages/WalletDeposit";
import DeleteAccountComplete from "./pages/DeleteAccountComplete";
import DeleteAccountOtp from "./pages/DeleteAccountOtp";
import DeleteAccount2FA from "./pages/DeleteAccount2FA";
import DeleteAccountReason from "./pages/DeleteAccountReason";
import DeleteAccount from "./pages/DeleteAccount";
import FASucces from "./pages/FASucces";
import FAOtp from "./pages/FAOtp";
import FAHome from "./pages/FAHome";
import ForgotPinSuccess from "./pages/ForgotPinSuccess";
import ForgotPinConfirmPin from "./pages/ForgotPinConfirmPin";
import ForgotPinNewPin from "./pages/ForgotPinNewPin";
import ForgotPinOtp from "./pages/ForgotPinOtp";
import ForgotPin from "./pages/ForgotPin";
import TxnPinChanged from "./pages/TxnPinChanged";
import TxnPin1Complete from "./pages/TxnPin1Complete";
import TxnPinConfirm3 from "./pages/TxnPinConfirm3";
import TxnPinChange2 from "./pages/TxnPinChange2";
import TxnPinChange from "./pages/TxnPinChange";
import SettingsTxnPin from "./pages/SettingsTxnPin";
import ResetPasswordSuccessful from "./pages/ResetPasswordSuccessful";
import CreateNewPassword from "./pages/CreateNewPassword";
import ResetPasswordOtp from "./pages/ResetPasswordOtp";
import ResetPassword2FA from "./pages/ResetPassword2FA";
import ResetPassword from "./pages/ResetPassword";
import UpgradeLevel2Complete from "./pages/UpgradeLevel2Complete";
import UpgradeLevel2Verified from "./pages/UpgradeLevel2Verified";
import UpgradeLevel21 from "./pages/UpgradeLevel21";
import Level2InfoVerify from "./pages/Level2InfoVerify";
import Level2GovtVerify from "./pages/Level2GovtVerify";
import UpgradeLevel2 from "./pages/UpgradeLevel2";
import Level1InfoVerify from "./pages/Level1InfoVerify";
import UpgradeLevel1 from "./pages/UpgradeLevel1";
import AccountUpgrade from "./pages/AccountUpgrade";
import LimitsAndUpgrade from "./pages/LimitsAndUpgrade";
import EmailNotifications from "./pages/EmailNotifications";
import BankDetailsSuccess from "./pages/BankDetailsSuccess";
import RemoveBankTxnPin from "./pages/RemoveBankTxnPin";
import ConfirmBankDetails from "./pages/ConfirmBankDetails";
import AddBankDetails from "./pages/AddBankDetails";
import RemoveBank from "./pages/RemoveBank";
import RemoveBankSuccess from "./pages/RemoveBankSuccess";
import AddBank from "./pages/AddBank";
import BankDetails from "./pages/BankDetails";
import SettingsHome from "./pages/SettingsHome";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/group-1022":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/verified":
        title = "";
        metaDescription = "";
        break;
      case "/verify-id":
        title = "";
        metaDescription = "";
        break;
      case "/verifykyc":
        title = "";
        metaDescription = "";
        break;
      case "/oldverifyid":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-14-469":
        title = "";
        metaDescription = "";
        break;
      case "/createtxnpin2":
        title = "";
        metaDescription = "";
        break;
      case "/createtxnpin":
        title = "";
        metaDescription = "";
        break;
      case "/activateaccount2":
        title = "";
        metaDescription = "";
        break;
      case "/activateaccount":
        title = "";
        metaDescription = "";
        break;
      case "/enterphonenumber":
        title = "";
        metaDescription = "";
        break;
      case "/2fa-enter-otp":
        title = "";
        metaDescription = "";
        break;
      case "/2fa":
        title = "";
        metaDescription = "";
        break;
      case "/passwordchanged":
        title = "";
        metaDescription = "";
        break;
      case "/createsecurepwd":
        title = "";
        metaDescription = "";
        break;
      case "/swaptokensuccess":
        title = "";
        metaDescription = "";
        break;
      case "/swaptokenconfirm":
        title = "";
        metaDescription = "";
        break;
      case "/swap-tokens":
        title = "";
        metaDescription = "";
        break;
      case "/swap-token":
        title = "";
        metaDescription = "";
        break;
      case "/asset-txn-details":
        title = "";
        metaDescription = "";
        break;
      case "/asset-details-token":
        title = "";
        metaDescription = "";
        break;
      case "/asset-details":
        title = "";
        metaDescription = "";
        break;
      case "/walletassets":
        title = "";
        metaDescription = "";
        break;
      case "/withdrawsuccess":
        title = "";
        metaDescription = "";
        break;
      case "/sendsuccess":
        title = "";
        metaDescription = "";
        break;
      case "/sendhome":
        title = "";
        metaDescription = "";
        break;
      case "/withdrawhome":
        title = "";
        metaDescription = "";
        break;
      case "/receivehome":
        title = "";
        metaDescription = "";
        break;
      case "/sendcomplete":
        title = "";
        metaDescription = "";
        break;
      case "/send-amount":
        title = "";
        metaDescription = "";
        break;
      case "/send-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/receiveaddrcopied":
        title = "";
        metaDescription = "";
        break;
      case "/receive-qrcode":
        title = "";
        metaDescription = "";
        break;
      case "/receive-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/withdraw-enter-otp":
        title = "";
        metaDescription = "";
        break;
      case "/withdraw2fa":
        title = "";
        metaDescription = "";
        break;
      case "/withdrawtxnpin":
        title = "";
        metaDescription = "";
        break;
      case "/withdrawcomplete":
        title = "";
        metaDescription = "";
        break;
      case "/withdrawdestination":
        title = "";
        metaDescription = "";
        break;
      case "/withdraw-amt-finish":
        title = "";
        metaDescription = "";
        break;
      case "/withdraw-amount2":
        title = "";
        metaDescription = "";
        break;
      case "/withdraw-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/wallethomedeposit":
        title = "";
        metaDescription = "";
        break;
      case "/notifications":
        title = "";
        metaDescription = "";
        break;
      case "/txn-history":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-home":
        title = "";
        metaDescription = "";
        break;
      case "/depositcomplete":
        title = "";
        metaDescription = "";
        break;
      case "/depositfailed":
        title = "";
        metaDescription = "";
        break;
      case "/top-up-method":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-deposit-finish":
        title = "";
        metaDescription = "";
        break;
      case "/wallethomehidedetails":
        title = "";
        metaDescription = "";
        break;
      case "/wallethomeverifykyc":
        title = "";
        metaDescription = "";
        break;
      case "/make-payment":
        title = "";
        metaDescription = "";
        break;
      case "/p2pmerchants":
        title = "";
        metaDescription = "";
        break;
      case "/deposit-amount":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-deposit":
        title = "";
        metaDescription = "";
        break;
      case "/deleteaccountcomplete":
        title = "";
        metaDescription = "";
        break;
      case "/delete-account-otp":
        title = "";
        metaDescription = "";
        break;
      case "/deleteaccount2fa":
        title = "";
        metaDescription = "";
        break;
      case "/deleteaccountreason":
        title = "";
        metaDescription = "";
        break;
      case "/delete-account":
        title = "";
        metaDescription = "";
        break;
      case "/2fasucces":
        title = "";
        metaDescription = "";
        break;
      case "/2fa-otp":
        title = "";
        metaDescription = "";
        break;
      case "/2fahome":
        title = "";
        metaDescription = "";
        break;
      case "/forgotpinsuccess":
        title = "";
        metaDescription = "";
        break;
      case "/forgotpinconfirmpin":
        title = "";
        metaDescription = "";
        break;
      case "/forgotpinnewpin":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-pin-otp":
        title = "";
        metaDescription = "";
        break;
      case "/forgotpin":
        title = "";
        metaDescription = "";
        break;
      case "/txnpinchanged":
        title = "";
        metaDescription = "";
        break;
      case "/txnpin1complete":
        title = "";
        metaDescription = "";
        break;
      case "/txnpinconfirm3":
        title = "";
        metaDescription = "";
        break;
      case "/txnpinchange2":
        title = "";
        metaDescription = "";
        break;
      case "/txn-pin-change":
        title = "";
        metaDescription = "";
        break;
      case "/settings-txn-pin":
        title = "";
        metaDescription = "";
        break;
      case "/resetpasswordsuccessful":
        title = "";
        metaDescription = "";
        break;
      case "/createnewpassword":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password-otp":
        title = "";
        metaDescription = "";
        break;
      case "/resetpassword2fa":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/upgradelevel2complete":
        title = "";
        metaDescription = "";
        break;
      case "/upgrade-level2-verified":
        title = "";
        metaDescription = "";
        break;
      case "/upgradelevel21":
        title = "";
        metaDescription = "";
        break;
      case "/level2infoverify":
        title = "";
        metaDescription = "";
        break;
      case "/level2-govt-verify":
        title = "";
        metaDescription = "";
        break;
      case "/upgrade-level2":
        title = "";
        metaDescription = "";
        break;
      case "/level1infoverify":
        title = "";
        metaDescription = "";
        break;
      case "/upgrade-level1":
        title = "";
        metaDescription = "";
        break;
      case "/accountupgrade":
        title = "";
        metaDescription = "";
        break;
      case "/limits-upgrade":
        title = "";
        metaDescription = "";
        break;
      case "/email-notifications":
        title = "";
        metaDescription = "";
        break;
      case "/bankdetailssuccess":
        title = "";
        metaDescription = "";
        break;
      case "/removebanktxnpin":
        title = "";
        metaDescription = "";
        break;
      case "/confirmbankdetails":
        title = "";
        metaDescription = "";
        break;
      case "/addbankdetails":
        title = "";
        metaDescription = "";
        break;
      case "/remove-bank":
        title = "";
        metaDescription = "";
        break;
      case "/removebanksuccess":
        title = "";
        metaDescription = "";
        break;
      case "/addbank":
        title = "";
        metaDescription = "";
        break;
      case "/bank-details":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />

      <Route path="/verifyemail" element={<VerifyEmail />} />

      <Route path="/login" element={<Login />} />

      <Route path="/verified" element={<Verified />} />

      <Route path="/verify-id" element={<VerifyId />} />

      <Route path="/verifykyc" element={<VerifyKyc />} />

      <Route path="/oldverifyid" element={<OldVerifyId />} />

      <Route path="/macbook-pro-14-469" element={<MacBookPro14469 />} />

      <Route path="/createtxnpin2" element={<CreateTxnPin2 />} />

      <Route path="/createtxnpin" element={<CreateTxnPin />} />

      <Route path="/activateaccount-2" element={<ActivateAccount2 />} />

      <Route path="/activateaccount" element={<ActivateAccount />} />

      <Route path="/enterphonenumber" element={<EnterPhoneNumber />} />

      <Route path="/2fa-enter-otp" element={<FaEnterOtpNew />} />

      <Route path="/2fa" element={<FA />} />

      <Route path="/passwordchanged" element={<PasswordChanged />} />

      <Route path="/createsecurepwd" element={<CreateSecurePwd />} />

      <Route path="/swaptokensuccess" element={<SwapTokenSuccess />} />

      <Route path="/swaptokenconfirm" element={<SwapTokenConfirm />} />

      <Route path="/swap-tokens" element={<SwapTokens />} />

      <Route path="/swap-token" element={<SwapToken />} />

      <Route path="/asset-txn-details" element={<AssetTxnDetails />} />

      <Route path="/asset-details-token" element={<AssetDetailsToken />} />

      <Route path="/asset-details" element={<AssetDetails />} />

      <Route path="/walletassets" element={<WalletAssets />} />

      <Route path="/withdrawsuccess" element={<WithdrawSuccess />} />

      <Route path="/sendsuccess" element={<SendSuccess />} />

      <Route path="/sendhome" element={<SendHome />} />

      <Route path="/withdrawhome" element={<WithdrawHome />} />

      <Route path="/receivehome" element={<ReceiveHome />} />

      <Route path="/sendcomplete" element={<SendComplete />} />

      <Route path="/send-amount" element={<SendAmount />} />

      <Route path="/send-wallet" element={<SendWallet />} />

      <Route path="/receiveaddrcopied" element={<ReceiveAddrCopied />} />

      <Route path="/receive-qrcode" element={<ReceiveQrcode />} />

      <Route path="/receive-wallet" element={<ReceiveWallet />} />

      <Route path="/withdraw-enter-otp" element={<WithdrawEnterOtp />} />

      <Route path="/withdraw2fa" element={<Withdraw2FA />} />

      <Route path="/withdrawtxnpin" element={<WithdrawTxnPin />} />

      <Route path="/withdrawcomplete" element={<WithdrawComplete />} />

      <Route path="/withdrawdestination" element={<WithdrawDestination />} />

      <Route path="/withdraw-amt-finish" element={<WithdrawAmtFinish />} />

      <Route path="/withdraw-amount2" element={<WithdrawAmount2 />} />

      <Route path="/withdraw-wallet" element={<WithdrawSelectWallet />} />

      <Route path="/wallethomedeposit" element={<WalletHomeDeposit />} />

      <Route path="/notifications" element={<NotificationsModal />} />

      <Route path="/txn-history" element={<TxnHistoryModal />} />

      <Route path="/wallet-home" element={<WalletHome />} />

      <Route path="/depositcomplete" element={<DepositComplete />} />

      <Route path="/depositfailed" element={<DepositFailed />} />

      <Route path="/top-up-method" element={<TopUpMethod />} />

      <Route path="/wallet-deposit-finish" element={<WalletDepositFinish />} />

      <Route
        path="/wallethomehidedetails"
        element={<WalletHomeHideDetails />}
      />

      <Route path="/wallethomeverifykyc" element={<WalletHomeVerifyKyc />} />

      <Route path="/make-payment" element={<MakePayment />} />

      <Route path="/p2pmerchants" element={<P2pMerchants />} />

      <Route path="/deposit-amount" element={<WalletDepositAmount />} />

      <Route path="/wallet-deposit" element={<WalletDeposit />} />

      <Route
        path="/deleteaccountcomplete"
        element={<DeleteAccountComplete />}
      />

      <Route path="/delete-account-otp" element={<DeleteAccountOtp />} />

      <Route path="/deleteaccount2fa" element={<DeleteAccount2FA />} />

      <Route path="/deleteaccountreason" element={<DeleteAccountReason />} />

      <Route path="/delete-account" element={<DeleteAccount />} />

      <Route path="/2fasucces" element={<FASucces />} />

      <Route path="/2fa-otp" element={<FAOtp />} />

      <Route path="/2fahome" element={<FAHome />} />

      <Route path="/forgotpinsuccess" element={<ForgotPinSuccess />} />

      <Route path="/forgotpinconfirmpin" element={<ForgotPinConfirmPin />} />

      <Route path="/forgotpinnewpin" element={<ForgotPinNewPin />} />

      <Route path="/forgot-pin-otp" element={<ForgotPinOtp />} />

      <Route path="/forgotpin" element={<ForgotPin />} />

      <Route path="/txnpinchanged" element={<TxnPinChanged />} />

      <Route path="/txnpin1complete" element={<TxnPin1Complete />} />

      <Route path="/txnpinconfirm3" element={<TxnPinConfirm3 />} />

      <Route path="/txnpinchange2" element={<TxnPinChange2 />} />

      <Route path="/txn-pin-change" element={<TxnPinChange />} />

      <Route path="/settings-txn-pin" element={<SettingsTxnPin />} />

      <Route
        path="/resetpasswordsuccessful"
        element={<ResetPasswordSuccessful />}
      />

      <Route path="/createnewpassword" element={<CreateNewPassword />} />

      <Route path="/reset-password-otp" element={<ResetPasswordOtp />} />

      <Route path="/resetpassword2fa" element={<ResetPassword2FA />} />

      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/upgradelevel2complete"
        element={<UpgradeLevel2Complete />}
      />

      <Route
        path="/upgrade-level2-verified"
        element={<UpgradeLevel2Verified />}
      />

      <Route path="/upgradelevel21" element={<UpgradeLevel21 />} />

      <Route path="/level2infoverify" element={<Level2InfoVerify />} />

      <Route path="/level2-govt-verify" element={<Level2GovtVerify />} />

      <Route path="/upgrade-level2" element={<UpgradeLevel2 />} />

      <Route path="/level1infoverify" element={<Level1InfoVerify />} />

      <Route path="/upgrade-level1" element={<UpgradeLevel1 />} />

      <Route path="/accountupgrade" element={<AccountUpgrade />} />

      <Route path="/limits-upgrade" element={<LimitsAndUpgrade />} />

      <Route path="/email-notifications" element={<EmailNotifications />} />

      <Route path="/bankdetailssuccess" element={<BankDetailsSuccess />} />

      <Route path="/removebanktxnpin" element={<RemoveBankTxnPin />} />

      <Route path="/confirmbankdetails" element={<ConfirmBankDetails />} />

      <Route path="/addbankdetails" element={<AddBankDetails />} />

      <Route path="/remove-bank" element={<RemoveBank />} />

      <Route path="/removebanksuccess" element={<RemoveBankSuccess />} />

      <Route path="/addbank" element={<AddBank />} />

      <Route path="/bank-details" element={<BankDetails />} />

      <Route path="/settings" element={<SettingsHome />} />
    </Routes>
  );
}
export default App;
