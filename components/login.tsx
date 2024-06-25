import { ConnectButton } from "thirdweb/react";
import { chain, client } from "../utils/constants";

const Login: React.FC = () => {
  return (
    <div>
      <ConnectButton client={client} chain={chain} />
    </div>
  );
};

export default Login;
