import { useRouter } from 'next/router';
import { useEffect } from 'react'; 
import { getFirebaseAuth } from '/config/fireBaseAuthContext';


const withAuthRedirect = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { user, loading } = getFirebaseAuth();
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
