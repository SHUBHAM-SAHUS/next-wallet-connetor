import { InjectedConnector } from '@wagmi/core';
import { useConnect, useDisconnect, useAccount } from 'wagmi';
const useWalletConnection = () => {
  const { isConnected, isConnecting } = useAccount();

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { disconnect } = useDisconnect();

  return {
    isConnected,
    isConnecting,
    disconnect,
    connect,
  };
};

export default useWalletConnection;
