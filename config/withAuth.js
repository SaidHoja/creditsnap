import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from 'config/firebase';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        } else {
          router.push('/login');
        }
      });

      return () => {
        unsubscribe();
      };
    }, []);
    return user ? <WrappedComponent {...props} /> : null;
  };

  return WithAuth;
};

export default withAuth;
