import { IconType } from "react-icons";
import { GrBitcoin } from "react-icons/gr";

interface IAsset {
    Icon: IconType
    name: string
    price: string
    percent: number
}

export const assets: IAsset[] = [
  {
    Icon: GrBitcoin,
    name: "Bitcoin",
    price: "NGN 12.00",
    percent: 120,
  },
  {
    Icon: GrBitcoin,
    name: "Bitcoin",
    price: "NGN 12.00",
    percent: 120,
  },
  {
    Icon: GrBitcoin,
    name: "Bitcoin",
    price: "NGN 12.00",
    percent: 120,
  },
];
