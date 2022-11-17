import '../styles/globals.css';
import MainHeader from '../components/layout/MainHeader';
import { Fragment } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.kakaokey}&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
      />
      <MainHeader />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
