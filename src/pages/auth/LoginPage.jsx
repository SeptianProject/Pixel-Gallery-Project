import { useContext, useState } from "react";
import { formFieldLogin } from "../../assets/assets";
import AuthComponent from "../../components/AuthComponent";
import GreenRectangle from "../../components/GreenRectangle";
import { handleChange } from "../../lib/function/FormHandle";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/helper/createClient";
import { AuthContext } from "../../lib/auth/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  async function handleLogIn(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      login(data);
      console.log(data);
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  }

  console.log(formData);

  return (
    <div>
      <div className="relative min-h-screen max-w-full flex justify-center items-center overflow-hidden">
        <AuthComponent
          LogPosition="-mt-20"
          formData={formFieldLogin}
          changeHandler={(e) => handleChange(e, setFormData)}
          Data={formData}
          title="Welcome Back!"
          textBtn="Login"
          buttonFunction={handleLogIn}
          pathName="/register"
          textQuest="Don't Have Account?"
          textLink="Register"
        />
      </div>
      <GreenRectangle />
    </div>
  );
};

export default LoginPage;
