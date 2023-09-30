import ConnectionDropdown from '@/components/connection-dropdown';
import Image from 'next/image';
import React from 'react';
import { useAccount } from 'wagmi';
import PropTypes from 'prop-types';
import { useBalance } from 'wagmi';
import { truncateString } from '@/utils/commonFunctionality';
import { useWalletConnection } from '@/Hooks';
import { LoadingSpinner } from '@/common-components';

const ConnectWallet = () => {
  //  import Hooks from  custom Hooks
  const { isConnected, isConnecting, disconnect, connect } = useWalletConnection();
  const { address } = useAccount();

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="font-extrabold text-5xl text-center mt-12">
          {' '}
          Welcome to <span className="text-[#f213a4]"> Connect Wallet </span>{' '}
        </h1>

        <div className="mt-3 mx-auto w-72">
          <ConnectionDropdown connect={connect} isConnected={isConnected} disconnect={disconnect} address={address}>
            <ConnectWalletState
              isConnected={isConnected}
              isConnecting={isConnecting}
              disconnect={disconnect}
              connect={connect}
            />
          </ConnectionDropdown>
        </div>
      </div>
    </>
  );
};

export default ConnectWallet;

//  for connection  text state
const ConnectWalletState = ({ isConnected, isConnecting }) => {
  const { address } = useAccount();
  const { data, isLoading } = useBalance({ address });

  return (
    <>
      {isConnected ? (
        <div>
          {isLoading ? (
            <h6 className="text-sm font-semibold capitalize"> Please Wait... </h6>
          ) : (
            <h6
              className="text-sm
           font-semibold"
            >
              {' '}
              {Number(data?.formatted)?.toFixed(4)} {data?.symbol}{' '}
            </h6>
          )}

          <div className="flex">
            <span
              className="text-sm
          "
            >
              {' '}
              {truncateString(address, 7)}{' '}
            </span>
            <Image
              priority
              src="/assets/metamask.svg"
              height={20}
              width={20}
              alt="Follow us on Twitter"
              className="ml-2"
            />
            <div className="ml-1">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex">
          <span className="text-sm  font-semibold">
            {isConnecting ? (
              <div
                className="flex
              "
              >
                <LoadingSpinner />
                <span className="ml-2 capitalize"> Please wait... </span>
              </div>
            ) : (
              'Connect Wallet'
            )}{' '}
          </span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className="w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            />
          </svg>
        </div>
      )}
    </>
  );
};

//  propTypes
ConnectWalletState.propTypes = {
  isConnected: PropTypes.bool,
  isConnecting: PropTypes.bool,
};
