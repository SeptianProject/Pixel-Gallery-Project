import { useContext, useState } from "react";
import { formFieldLogin } from "../../assets/assets";
import AuthComponent from "../../components/AuthComponent";
import GreenRectangle from "../../components/GreenRectangle";
import { handleChange } from "../../lib/function/FormHandle";
import { AuthContext } from "../../lib/context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogIn(e) {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
    } catch (error) {
      setErrorMessage(error.message);
      alert(errorMessage);
    }
  }

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
