import { ChakraProvider } from '@chakra-ui/react';
import { FirebaseAuthProvider } from 'config/firebaseAuthContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <FirebaseAuthProvider>
        <Component {...pageProps} />
      </FirebaseAuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
