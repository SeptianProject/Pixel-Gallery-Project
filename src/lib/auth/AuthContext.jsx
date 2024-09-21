import { createContext, useEffect, useState } from "react";
import { supabase } from "../helper/createClient";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

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

  const login = async (email, password) => {
    const { data: loginData, error: loginError } =
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

    if (loginError) {
      throw new Error("Login failed: " + loginError.message);
    }

    const userId = loginData.user.id;

    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .single();

    if (profileError) {
      throw new Error("Failed to retrieve profile: " + profileError.message);
    }

    setToken(loginData);
    sessionStorage.setItem("token", JSON.stringify(loginData));
    setRole(profileData.role);

    if (profileData.role) {
      navigate("/home");
    } else {
      navigate("/choose-role");
    }
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
