import { createThirdwebClient, getContract } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

import { defineChain } from "thirdweb";

export const chain = defineChain(11155111);

const contractAddress = "0x3c327A35585C3e10c2280d7217a40578570D01A0";
const contractABI = [
  {
    type: "function",
    name: "count",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decrement",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getCount",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "increment",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export const CONTRACT = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractABI,
});
