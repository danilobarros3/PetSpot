import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { signedIn } = useContext(AuthContext);

  console.log('User signed in:', signedIn);
  return signedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
