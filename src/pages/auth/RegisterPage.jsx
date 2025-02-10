import { formFieldRegis } from "../../assets/assets";
import { BounceInBottom } from "../../components/animations/BounceAnimate";
import AuthComponent from "../../components/AuthComponent";
import GreenRectangle from "../../components/GreenRectangle";
import { useState } from "react";
import { supabase } from "../../lib/helper/createClient";
import { useNavigate } from "react-router-dom";
import { handleChange } from "../../lib/function/FormHandle";
import { useAuth } from "../../lib/context/AuthContext";

const RegisterPage = () => {
  const { register } = useAuth();
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await register(
        formData.email,
        formData.password,
        formData.name,
        formData.role,
        formData.entered_as,
        formData.instances
      );
      console.log(response);
      alert("check your email for verification");
      setError(null);
      navigate("/login");
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
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
