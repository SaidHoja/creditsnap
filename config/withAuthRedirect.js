import { useRouter } from 'next/router';
import { useEffect } from 'react'; 
import { getAuth } from '/config/firebaseAuthContext';

const withAuthRedirect = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { user, loading } = getAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [user, loading, router]);

    return <WrappedComponent {...props} />;
  };

  Wrapper.displayName = `withAuthRedirect(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return Wrapper;
};

export default withAuthRedirect;
