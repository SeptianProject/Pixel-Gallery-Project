import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      const parsedToken = JSON.parse(storedToken);
      setToken(parsedToken);
      // Simpan role dari token atau fetch role dari backend
      setRole(parsedToken?.user?.role);
    }
    setLoading(false);
  }, []);

  const login = (data) => {
    setToken(data);
    sessionStorage.setItem("token", JSON.stringify(data));
    setRole(data.user.role); //Simpan role saat login
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
