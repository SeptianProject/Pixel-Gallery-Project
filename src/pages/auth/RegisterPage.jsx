import { formFieldRegis } from "../../assets/assets";
import { BounceInBottom } from "../../components/animations/BounceAnimate";
import AuthComponent from "../../components/AuthComponent";
import GreenRectangle from "../../components/GreenRectangle";
import { useState } from "react";
import { supabase } from "../../lib/helper/createClient";
import { useNavigate } from "react-router-dom";
import { handleChange } from "../../lib/function/FormHandle";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    avatar_url: "",
    name: "",
    email: "",
    password: "",
    entered_as: "Interns",
    instances: "",
    role: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  console.log(formData);
  const handleRegister = async (e) => {
    e.preventDefault();

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          displayName: formData.name,
        },
      },
    });

    if (authError) {
      if (authError.status === 429) {
        setError("To many requests. Please try again later.");
      } else {
        setError(authError.message);
      }
      return;
    }

    // Setelah user terdaftar, masukkan data ke tabel profiles
    const userId = authData.user.id;
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .insert([
        {
          id: userId,
          name: formData.name,
          avatar_url: formData.avatar_url,
          entered_as: formData.entered_as,
          role: formData.role,
          instances: formData.instances,
        },
      ]);
    if (profileError) {
      setError(profileError.message);
    } else {
      alert("check your email for verification");
      setError(null);
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="relative min-h-screen max-w-full flex justify-center items-center overflow-hidden">
        <AuthComponent
          RegPosition=""
          formData={formFieldRegis}
          Data={formData}
          changeHandler={(e) => handleChange(e, setFormData)}
          title="Create an Account."
          description={
            <BounceInBottom delayVal={1}>
              <div className="mx-auto md:m-0 max-w-[280px] transition-all duration-500 ease-in-out text-center md:text-start">
                <p className="font-normal md:font-medium text-dark text-sm">
                  By clicking the{" "}
                  <span className="font-bold text-hijau cursor-pointer">
                    Register
                  </span>{" "}
                  button, you agree to our terms and conditions.
                </p>
              </div>
            </BounceInBottom>
          }
          textBtn="Register"
          buttonFunction={handleRegister}
          pathName="/login"
          textQuest="Already Have an Account?"
          textLink="Login"
        />
      </div>
      <GreenRectangle />
    </div>
  );
};

export default RegisterPage;
