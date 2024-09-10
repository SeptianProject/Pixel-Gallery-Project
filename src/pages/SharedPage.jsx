import SingleButton from "../components/buttons/SingleButton";
import SharedButton from "../components/buttons/SharedButton";
import { BounceInLeft, BounceInRight } from "../components/animations/BounceAnimate";
import { useNavigate } from "react-router-dom";

const SharedProject = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col mx-auto px-14 lg:px-20 lg:max-w-full select-none">
            <div className="text-center mt-20">
                <BounceInRight>
                    <h1 className="font-extrabold text-darkBlue text-3xl">
                        Only Share With :
                    </h1>
                </BounceInRight>
            </div>
            <div className="mt-10 mx-auto max-w-md w-full lg:max-w-4xl">
                <SharedButton />
            </div>
            <div className="my-14 grid gird-cols-2 items-center gap-3 md:w-full md:max-w-xs md:mx-auto">
                <BounceInRight delayVal={2.5}>
                    <SingleButton
                        onclick={() => navigate("/home")}
                        text="Done"
                        txtColor="white"
                        bgColor="hijau"
                    />
                </BounceInRight>
                <BounceInLeft delayVal={2.5}>
                    <SingleButton
                        onclick={() => navigate("/home")}
                        text="Go Back"
                        txtColor="hijau"
                        bgColor="transparent"
                        border="hijau"
                        hovBg='hijau'
                        hovText='white'
                    />
                </BounceInLeft>
            </div>
        </div>
    );
};

export default SharedProject;
