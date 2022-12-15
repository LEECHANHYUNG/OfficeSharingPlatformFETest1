import { Provider } from 'react-redux';
import Script from 'next/script';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import MainHeader from '../components/layout/MainHeader';
import store from '../store';
import { useState } from 'react';
import RefreshTokenHandler from '../components/auth/RefreshTokenHandler';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [interval, setInterval] = useState(0);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={interval}>
      <Provider store={store}>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.kakaokey}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
        <MainHeader />
        <Component {...pageProps} />
        <RefreshTokenHandler setInterval={setInterval} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
