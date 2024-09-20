import { useNavigate } from "react-router-dom";
import RadioButton from "../../components/buttons/RadioButton";
import SingleButton from "../../components/buttons/SingleButton";
import {
  BounceInRight,
  BounceInTop,
} from "../../components/animations/BounceAnimate";
import { useState } from "react";
import { supabase } from "../../lib/helper/createClient";

const ChooseRole = () => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const updateRole = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { error } = await supabase
          .from("profiles")
          .update({ role: role }) //update Role di table profiles
          .eq("id", user.id); //gunakan ID user yang sedang login

        if (error) {
          console.error("Error updating role: ", error);
        } else {
          console.log("Role updated succesfully");
          navigate("/welcome");
        }
      } else {
        console.error("No user found!");
      }
    } catch (error) {
      console.error("Error fetching user or updating role:", error);
    }
  };

  return (
    <div>
      <div
        className="max-w-7xl w-full md:min-h-screen gap-y-40 
            static lg:absolute -top-10 flex items-center justify-center overflow-hidden"
      >
        <div className="flex flex-col my-24 lg:m-0 items-center gap-y-12">
          <BounceInRight>
            <div>
              <h1 className="font-bold text-dark text-center text-3xl md:text-5xl tracking-wide">
                Choose your role in Pixel
              </h1>
            </div>
          </BounceInRight>
          <div>
            <RadioButton onSelectRadio={handleRoleSelect} />
          </div>
          <div className="w-full px-10 md:px-40 lg:px-0 lg:w-auto">
            <BounceInTop delayVal={3}>
              <SingleButton
                onclick={() => updateRole}
                txtColor="white"
                bgColor="hijau"
                text="Submit"
              />
            </BounceInTop>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute right-0 top-5">
          <div className="bg-hijau w-[125px] h-14"></div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
