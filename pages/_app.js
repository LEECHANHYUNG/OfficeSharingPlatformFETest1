import '../styles/globals.css';
import MainHeader from '../components/layout/MainHeader';
import { Provider } from 'react-redux';
import Script from 'next/script';
import store from '../store';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.kakaokey}&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
      />
      <MainHeader />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
