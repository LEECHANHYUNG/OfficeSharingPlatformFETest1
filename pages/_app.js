import { Provider } from 'react-redux';
import Script from 'next/script';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import MainHeader from '../components/layout/MainHeader';
import store from '../store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Provider store={store}>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.kakaokey}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
        <MainHeader />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
