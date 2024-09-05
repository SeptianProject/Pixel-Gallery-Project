import SingleButton from "../components/buttons/SingleButton";
import SharedButton from "../components/buttons/SharedButton";
import { useNavigate } from "react-router-dom";

const SharedProject = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col mx-auto px-14 lg:px-20 lg:max-w-full select-none">
            <div className="text-center mt-20">
                <h1 className="font-extrabold text-darkBlue text-3xl">
                    Only Share With :{" "}
                </h1>
            </div>
            <div className="mt-6 mx-auto max-w-md w-full lg:max-w-4xl">
                <SharedButton />
            </div>
            <div className="mt-10 flex flex-col items-center gap-4 md:w-full md:max-w-xs md:mx-auto">
                <SingleButton
                    onclick={() => navigate("/")}
                    text="Done"
                    txtColor="white"
                    bgColor="hijau"
                    border=""
                    hovBg='white'
                    hovText='hijau'
                    hovBorder='hijau' />
                <SingleButton
                    onclick={() => navigate("/")}
                    text="Go Back"
                    txtColor="hijau"
                    bgColor="transparent"
                    border="hijau"
                    hovBg='hijau'
                    hovText='white'
                />
            </div>
        </div>
    );
};

export default SharedProject;
