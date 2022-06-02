import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';

import '@/styles/globals.css';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';
import { parseCookies } from '@/lib/parseCookies';

import Layout from '../components/Layout';

type AppPropsGetInitialProps = AppProps & {
  initialAsideLeftHandler: string;
} & {
  initialAsideRightHandler: string;
} & {
  initialIsAsideRightOpen: string;
};

function MyApp({
  Component,
  pageProps,
  initialAsideLeftHandler,
  initialAsideRightHandler,
  initialIsAsideRightOpen,
}: AppPropsGetInitialProps) {
  return (
    <Layout
      initialAsideLeftHandler={initialAsideLeftHandler}
      initialAsideRightHandler={initialAsideRightHandler}
      initialIsAsideRightOpen={initialIsAsideRightOpen}
    >
      <Component {...pageProps} />
    </Layout>
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
    initialIsAsideRightOpen:
      cookies.isAsideRightOpen != null ? cookies.isAsideRightOpen : 'true',
  };
};

export default MyApp;
