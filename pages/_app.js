import Head from 'next/head';
import { useRouter } from 'next/router';

import { ApolloProvider } from '@apollo/client';
import client from '../graphql';

import Navbar from '../components/Navbar';

import '../styles/globals.css';

function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const notNavbar = ['/'];

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Rick And Morty</title>
        <meta
          name="description"
          content="Rick and morty SPA using Next.js, and Graphql."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {notNavbar.includes(pathname) ? undefined : <Navbar />}
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
