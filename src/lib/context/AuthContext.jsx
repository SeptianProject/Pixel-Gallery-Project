import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../helper/createClient";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const register = async (
    email,
    password,
    name,
    role,
    entered_as,
    instances
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          displayName: name,
          role: role,
        },
      },
    });

    if (error) throw new Error(error);

    const userId = data.user.id;
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .insert([
        {
          id: userId,
          name: name,
          email: email,
          entered_as: entered_as,
          role: role,
          instances: instances,
        },
      ]);

    if (profileError) throw new Error(profileError);

    return data, profileData;
  };

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error);

    const userId = data.user.id;

    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (profileError) throw new Error(profileError);

    setProfile(profileData);
    return profileData;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
