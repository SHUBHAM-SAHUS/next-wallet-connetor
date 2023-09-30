import WagmiProvider from '@/context/WagmiProvider';
import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  const [renderComponent, setRenderComponent] = useState(false);
  useEffect(() => {
    setRenderComponent(true);
    require('tw-elements');
  }, []);
  if (renderComponent) {
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="This app for wallet connection" />
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
        {/* import WagmiProvider */}
        <WagmiProvider>
          <Component {...pageProps} />
        </WagmiProvider>
      </>
    );
  } else {
    return null;
  }
}

// defind propTypes
App.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.node,
};
