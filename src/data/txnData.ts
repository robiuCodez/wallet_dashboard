import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { SiBitcoincash } from "react-icons/si";
import { IconType } from "react-icons";

interface ITransactionData {
  Icon: IconType;
  txnTitle: string;
  txnDesc: string;
  status: "pending" | "successful";
}

export const transactionData: ITransactionData[] = [
  {
    Icon: BsArrowUpRight,
    txnTitle: "Sent BTC 28.8",
    txnDesc: "To: 0x9988399....88fhk - Tue 18th April 2022",
    status: "pending",
  },
  {
    Icon: BsArrowDownLeft,
    txnTitle: "Received BTC 19.8",
    txnDesc: "From: 0x332823....hfkdidi8e - Fri 12th Jan 2022",
    status: "successful",
  },
  {
    Icon: FaWallet,
    txnTitle: "You Withdrew NGN 99,000.00",
    txnDesc: "Tue, 18th Aug, 2022",
    status: "successful",
  },
  {
    Icon: BsArrowUpRight,
    txnTitle: "Sent BTC 28.8",
    txnDesc: "To: 0x9988399....88fhk - Tue 18th April 2022",
    status: "pending",
  },
  {
    Icon: BsArrowDownLeft,
    txnTitle: "Received BTC 19.8",
    txnDesc: "From: 0x332823....hfkdidi8e - Fri 12th Jan 2022",
    status: "successful",
  },
  {
    Icon: FaWallet,
    txnTitle: "You Withdrew NGN 99,000.00",
    txnDesc: "Tue, 18th Aug, 2022",
    status: "successful",
  },
  {
    Icon: BsArrowUpRight,
    txnTitle: "Sent BTC 28.8",
    txnDesc: "To: 0x9988399....88fhk - Tue 18th April 2022",
    status: "pending",
  },
  {
    Icon: BsArrowDownLeft,
    txnTitle: "Received BTC 19.8",
    txnDesc: "From: 0x332823....hfkdidi8e - Fri 12th Jan 2022",
    status: "successful",
  },
  {
    Icon: FaWallet,
    txnTitle: "You Withdrew NGN 99,000.00",
    txnDesc: "Tue, 18th Aug, 2022",
    status: "successful",
  },
];
