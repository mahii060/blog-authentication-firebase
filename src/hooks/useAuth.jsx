import { useContext } from 'react';
import { AuthContext } from '../utils';

const useAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default useAuth;