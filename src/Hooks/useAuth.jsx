import { useContext } from "react";
import { authContext } from "../components/Authentication/AuthProvider";

const useAuth = () => {
    const auth = useContext(authContext);
    return auth;
};

export default useAuth;