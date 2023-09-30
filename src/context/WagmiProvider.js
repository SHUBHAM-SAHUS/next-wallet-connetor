import React from 'react';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, polygonMumbai, goerli } from 'wagmi/chains';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

export const SomeChain = createContext(null);
const infurakey = process.env.NEXT_PUBLIC_INFURA_ID.toString();

const WagmiProvider = ({ children }) => {
  // Wagmi client
  const { chains, provider } = configureChains(
    [polygon, polygonMumbai, mainnet, goerli],
    [infuraProvider({ apiKey: infurakey }), publicProvider()],
  );

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),

      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
    ],
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <SomeChain.Provider value={chains}>{children}</SomeChain.Provider>
    </WagmiConfig>
  );
};

WagmiProvider.propTypes = {
  children: PropTypes.node,
};

export default WagmiProvider;
