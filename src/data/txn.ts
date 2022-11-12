import { FaWallet } from "react-icons/fa";
import { SiBitcoincash } from "react-icons/si";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { IconType } from "react-icons";

interface ITxnType {
  txn: string;
  Icon: IconType;
}

export const transactionTypes: ITxnType[] = [
  {
    txn: "Deposit",
    Icon: FaWallet,
  },
  {
    txn: "Withdraw",
    Icon: SiBitcoincash,
  },
  {
    txn: "Receive",
    Icon: BsArrowDownLeft,
  },
  {
    txn: "Send",
    Icon: BsArrowUpRight,
  },
];
