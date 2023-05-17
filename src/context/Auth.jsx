import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useLocalStorage("Auth", false);

  const logout = () => {
    setIsAuth(false);
    toast.success("Successfully logged out !");
  };

  const login = () => {
    setIsAuth(true);
    toast.success("Successfully logged in !");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};
