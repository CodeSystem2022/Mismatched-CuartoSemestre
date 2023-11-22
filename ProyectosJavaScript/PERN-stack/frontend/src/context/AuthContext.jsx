import { createContext, useContext, useState, useEffect } from "react";
import axios from '../api/axios';
import Cookie from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context){
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  const signin = async (data) => {
    try {
      const res = await axios.post("/signin", data);
        setUser(res.data);
        setIsAuth(true);
      return res.data;

    } catch (error) {
      console.log(error);
      if(Array.isArray(error.response.data)){
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const signup = async (data) => {
    try {
      const res = await axios.post("/signup", data);
        setUser(res.data);
        setIsAuth(true);
      return res.data;

    } catch (error) {
      console.log(error);
      if(Array.isArray(error.response.data)){
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }

  };

  const signout = async (data) => {
    const res = await axios.post("/signout");
    setUser(null);
    setIsAuth(null);

    return res.data;
  }

  useEffect(() => {
    setLoading(true);
    if (Cookie.get("token")) {
      axios.get("/profile").then((res) => {
        setUser(res.data);
        setIsAuth(true);
        setLoading(false);
      }).catch((error) => {
        setUser(null);
        setIsAuth(false);
        setLoading(false);
      })
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrors(null);
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        setUser,
        signup,
        signin,
        signout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
