import { createThirdwebClient } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

import { defineChain } from "thirdweb";

export const chain = defineChain(11155111);
