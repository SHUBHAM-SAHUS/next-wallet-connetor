import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

//  Wallet list
const WalletList = ({ connect, onClosePopup }) => {
  //  for check wallet connetion
  const isConnectWallet = async (e) => {
    e.stopPropagation();
    if (isMobile) {
      const { ethereum } = window;
      if (ethereum) {
        connect();
        onClosePopup();
      } else {
        // for  small devices metamask Re-direction
        // window.location.href = `${process.env.NEXT_PUBLIC_METAMASK_DEEP_LINK_FOR_MOBILE}`;
        // connect();
        onClosePopup();
      }
    } else {
      connect();
      onClosePopup();
    }
  };

  return (
    <>
      <li onClick={(e) => isConnectWallet(e)}>
        <a
          className=" flex flex-auto
      dropdown-item
      text-lg
      font-semibold
      py-1
      px-3
      w-full
      whitespace-nowrap
      bg-transparent
      text-white
      hover:bg-zinc-500
    "
        >
          <Image
            priority
            src="/assets/metamask.svg"
            height={22}
            width={22}
            alt="Follow us on Twitter"
            className="ml-2"
          />
          <span className="ml-2 mt-1 text-base font-semibold ">MetaMask </span>
        </a>
      </li>
    </>
  );
};
// propTypes
WalletList.propTypes = {
  connect: PropTypes.func,
  onClosePopup: PropTypes.func,
};

export default WalletList;
