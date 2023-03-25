import { useEffect } from 'react';
import withAuth from 'config/withAuth';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  const AuthComponent = withAuth(Component);
  return <Component {...pageProps} />;
}

export default MyApp;
