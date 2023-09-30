import React, { useState } from 'react';
import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SwitchDropdown from '../switch-dropdown';
import PropTypes from 'prop-types';
import { LoadingSpinner } from '@/common-components';

const ConnectedDropdown = ({ disconnect, address }) => {
  const [textCopy, setCopy] = useState(false);
  const [Loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isHidden, setHidden] = useState(false);

  const isSwitchLoader = (val) => {
    setLoading(val);
  };

  // For Copy
  const addressCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, [1000]);
  };

  //  switch Accounts

  const switchAccounts = async (e) => {
    e.stopPropagation();
    const { ethereum } = window;
    await ethereum.request({
      method: 'wallet_requestPermissions',
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
  };

  return (
    <>
      <li onClick={() => addressCopy()}>
        <a
          className=" flex flex-auto
      dropdown-item
      text-base
      font-semibold
      py-2
      px-4
      w-full
      whitespace-nowrap
      bg-transparent
      text-white
      hover:bg-zinc-500
    "
        >
          <Image
            priority
            src={`${textCopy ? '/assets/Check 1.svg' : '/assets/Copy.svg'}`}
            height={18}
            width={18}
            alt="Follow us on Twitter"
          />

          <CopyToClipboard text={address} onCopy={() => addressCopy()}>
            <span className="ml-2 mt-1"> Copy address </span>
          </CopyToClipboard>
        </a>
      </li>

      <li>
        <a
          className=" flex 
             items-center
      dropdown-item
      text-lg
      font-semibold
      py-2
      px-4
       w-full
      whitespace-nowrap
      bg-transparent
      text-white
      hover:bg-zinc-500
    "
        >
          {Loading ? (
            <div className="">
              <LoadingSpinner />
            </div>
          ) : (
            <Image priority src="/assets/WiFi.svg" height={18} width={18} alt="Follow us on Twitter" />
          )}

          <SwitchDropdown isSwitchLoader={isSwitchLoader} />
        </a>
      </li>

      <li onClick={(e) => switchAccounts(e)}>
        <a
          className="  
      dropdown-item
      text-base
      font-semibold
      py-2
      px-4
    w-full
      whitespace-nowrap
      bg-transparent
      text-white
      hover:bg-zinc-500
      hidden
      lg:flex
    "
        >
          <Image priority src="/assets/Switch Account.svg" height={16} width={16} alt="Follow us on Twitter" />
          <span className="ml-2 mt-1"> Switch Account </span>
        </a>
      </li>

      <li onClick={() => disconnect()}>
        <a
          className=" flex flex-auto
      dropdown-item
      text-base
      font-semibold
      py-2
      px-4
      w-full
      whitespace-nowrap
      bg-transparent
      text-white
      hover:bg-zinc-500
    "
        >
          <Image
            priority
            src="/assets/Disconnect.svg"
            height={18}
            width={18}
            alt="Follow us on Twitter"
            className="mt-1"
          />
          <span className="ml-2 mt-1 ">Disconnect </span>
        </a>
      </li>
    </>
  );
};

// defind propTypes
ConnectedDropdown.propTypes = {
  disconnect: PropTypes.func,
  address: PropTypes.string,
};

export default ConnectedDropdown;
