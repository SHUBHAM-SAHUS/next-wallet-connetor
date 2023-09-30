import { useEffect, useContext } from 'react';
import { useSwitchNetwork, useNetwork } from 'wagmi';
import PropTypes from 'prop-types';
import { SomeChain } from '@/context/WagmiProvider';

const SwitchDropdown = ({ isSwitchLoader }) => {
  const { isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();
  const chains = useContext(SomeChain);

  useEffect(() => {
    isSwitchLoader(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="dropup relative">
            <button
              className="
    dropdown-toggle
    px-4
     ml-2
     border-gray-300
      border-solid
      border
       py-2
    bg-transparent
    text-white
    font-bold
    text-sm
   leading-tight
  rounded
    shadow-md
    hover:bg-transparent hover:shadow-lg
    focus:bg-transparent focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-transparent active:shadow-lg active:text-white
    transition
    duration-150
    ease-in-out
    flex
    items-center
    whitespace-nowrap
  "
              type="button"
              id="dropdownMenuButton1u"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {chain?.name}
              {/* Switch Network */}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-up"
                className="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                />
              </svg>
            </button>
            <ul
              className="
    dropdown-menu
    min-w-max
    absolute
     border-2
     border-white
  bg-zinc-700
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    
  "
              aria-labelledby="dropdownMenuButton1u"
            >
              {chains.map((x) => (
                <li key={x.id}>
                  <button
                    disabled={!switchNetwork || x.id === chain?.id}
                    onClick={() => switchNetwork?.(x.id)}
                    key={x?.id}
                    className="
        dropdown-item
        text-base
        font-semibold
        py-2
        px-4
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-white
       hover:bg-blue-400
      "
                  >
                    {x.name}
                    {isLoading && pendingChainId === x.id && ' (switching)'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
// propTypes
SwitchDropdown.propTypes = {
  isSwitchLoader: PropTypes.func,
};

export default SwitchDropdown;
