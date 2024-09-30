import { createContext, useEffect, useState } from "react";
import { supabase } from "../helper/createClient";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const fetchUserProfile = async (userId) => {
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (profileError) {
      console.error("Failed to retrieve profile:", profileError.message);
    } else {
      setUser(profileData);
      setRole(profileData.role);
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      const parsedToken = JSON.parse(storedToken);
      setToken(parsedToken);
      setUser(parsedToken?.user);
      // Simpan role dari token atau fetch role dari backend
      setRole(parsedToken?.user?.role);
      fetchUserProfile(parsedToken?.user?.id);
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
      .select("*")
      .eq("id", userId)
      .single();

    if (profileError) {
      throw new Error("Failed to retrieve profile: " + profileError.message);
    }

    setToken(loginData);
    setUser(profileData);
    sessionStorage.setItem(
      "token",
      JSON.stringify({ loginData, user: profileData })
    );

    if (profileData.role) {
      navigate("/welcome");
    } else {
      navigate("/choose-role");
    }
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    setUser(null);
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, role, login, logout, loading, fetchUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
