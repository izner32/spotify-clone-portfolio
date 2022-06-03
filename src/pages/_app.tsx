import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@/styles/globals.css';

import { parseCookies } from '@/lib/parseCookies';

import Layout from '../components/Layout';
import { persistor, store } from '../redux/store';

type AppPropsGetInitialProps = AppProps & {
  initialAsideLeftHandler: string;
} & {
  initialAsideRightHandler: string;
};

function MyApp({
  Component,
  pageProps,
  initialAsideLeftHandler,
  initialAsideRightHandler,
}: AppPropsGetInitialProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout
          initialAsideLeftHandler={initialAsideLeftHandler}
          initialAsideRightHandler={initialAsideRightHandler}
        >
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const pageProps = App.getInitialProps(appContext);
  const { req } = appContext.ctx;
  const cookies = parseCookies(req);

  return {
    ...pageProps,
    initialAsideLeftHandler:
      cookies.asideLeftHandler != null
        ? cookies.asideLeftHandler
        : JSON.stringify({ x: 0, y: 0, width: 0, height: 0 }),
    initialAsideRightHandler:
      cookies.asideRightHandler != null
        ? cookies.asideRightHandler
        : JSON.stringify({ x: 0, y: 0, width: 0, height: 0 }),
  };
};

export default MyApp;
