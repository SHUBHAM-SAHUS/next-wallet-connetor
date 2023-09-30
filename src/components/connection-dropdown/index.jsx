import React, { useState } from 'react';
import WalletList from '../wallet-list';
import ConnectedDropdown from '../connected-dropdown';
import PropTypes from 'prop-types';
import { useDetectClickOutside } from 'react-detect-click-outside';
const ConnectionDropdown = ({ connect, children, disconnect, isConnected, address }) => {
  const [isPopupOpen, setOpenPopup] = useState(false);

  // for Hide dopdown
  const hidePopup = () => {
    setOpenPopup(false);
  };
  //  refrence for outside click
  const ref = useDetectClickOutside({ onTriggered: hidePopup });

  return (
    <>
      <div className="flex space-x-2 justify-center items-end min-w-full" ref={ref}>
        <div className="dropdown relative">
          <button
            className="
  dropdown-toggle border-inherit  
   px-16 py-3  bg-black text-white font-bold text-base leading-snug uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-zinc-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-bl-800 active:shadow-lg transition duration-150 ease-in-out
  flex
  items-center
  whitespace-nowrap 
"
            type="button"
            id="dropdownMenuLargeButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => setOpenPopup(!isPopupOpen)}
          >
            {children}
          </button>

          <ul
            className={`
                dropdown-menu
                w-full
                absolute
                bg-black
                text-base
                z-50
                float-left
                py-1
                list-none
                text-left
                rounded-lg
                shadow-lg
               mt-1
                bg-clip-padding
                border-none
                cursor-pointer
                dropdown-list
 ${isPopupOpen ? '' : 'hidden'}
   `}
            aria-labelledby="dropdownMenuLargeButton"
          >
            {isConnected ? (
              //  after connect
              <ConnectedDropdown disconnect={disconnect} address={address} onClosePopup={() => setOpenPopup(false)} />
            ) : isPopupOpen ? (
              // before connect
              <WalletList connect={connect} onClosePopup={() => setOpenPopup(false)} isConnected={isConnected} />
            ) : (
              ''
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
//  defind PropTypes
ConnectionDropdown.propTypes = {
  connect: PropTypes.func,
  children: PropTypes.node,
  disconnect: PropTypes.func,
  isConnected: PropTypes.bool,
  address: PropTypes.string,
};

export default ConnectionDropdown;
