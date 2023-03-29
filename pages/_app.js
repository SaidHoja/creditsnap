import { ChakraProvider } from '@chakra-ui/react';
import { FirebaseAuthProvider } from '/config/fireBaseAuthContext';
import '../styles/globals.css';
import { userAgent } from 'next/server';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <FirebaseAuthProvider >
        <Component {...pageProps} />
      </FirebaseAuthProvider>
    </ChakraProvider>
  )
}

export default MyApp;
