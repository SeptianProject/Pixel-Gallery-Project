import React, { useEffect } from "react";
import { supabase } from "../helper/createClient";
import { useNavigate } from "react-router-dom";

const EmailConfirmed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Cek apakah pengguna sudah login dan verifikasi email berhasil
    const checkVerification = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
      } else if (user && user.email_confirmed_at) {
        console.log("User is verified:", user);
        navigate("/login");
      }
    };

    checkVerification();
  }, [navigate]);

  return (
    <div>
      <h1>Verifying your email...</h1>
    </div>
  );
};

export default EmailConfirmed;
