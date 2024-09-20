import { Routes, Route, useLocation } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import HomePage from "./HomePage";
import ProjectPage from "./projects/ProjectPage";
import TaskPage from "./tasks/TaskPage";
import SharedProject from "./SharedPage";
import DashboardPage from "./dashboard/DashboardPage";
import DetailProject from "./projects/DetailProject";
import FormProjectPage from "./form/FormProjectPage";
import ResultSearchPage from "./ResultSearchPage";
import { BounceInBottom } from "../components/animations/BounceAnimate";
import Navbar from "../components/Navbar";
import RegisterPage from "./auth/RegisterPage";
import ChooseRole from "./auth/ChooseRole";
import Footer from "../components/Footer";
import DetailTask from "./tasks/DetailTask";
import { assets } from "../assets/assets";
import ScrollToTop from "../components/constant/ScrollToTop";
import FormTaskPage from "./form/FormTaskPage";
import ProfilePage from "./dashboard/ProfilePage";
import DashboardAdminPage from "./dashboard/DashboardAdminPage";
import LoginPage from "./auth/LoginPage";
import GifComponent from "../components/GifComponent";
import EmailConfirmed from "../lib/auth/EmailConfirmed";
import { AuthContext } from "../lib/auth/AuthContext";
import { useContext } from "react";
import ProtectedRoute from "../lib/function/ProtectedRoute";

const Page = () => {
  const { token, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <>Loading....</>;
  }

  const hideNavbar =
    location.pathname === "/register" ||
    location.pathname === "/login" ||
    location.pathname === "/project/share" ||
    location.pathname === "/welcome" ||
    location.pathname === "/upload-project" ||
    location.pathname === "/upload-task" ||
    location.pathname === "/project/detail" ||
    location.pathname === "/task/detail" ||
    location.pathname === "/email-confirmed" ||
    location.pathname === "/choose-role" ||
    location.pathname === "/animate";

  const hideFooter =
    location.pathname === "/register" ||
    location.pathname === "/login" ||
    location.pathname === "/welcome" ||
    location.pathname === "/email-confirmed" ||
    location.pathname === "/upload-project" ||
    location.pathname === "/upload-task" ||
    location.pathname === "/choose-role" ||
    location.pathname === "/animate";

  return (
    <>
      <div className="bg-white container mx-auto w-full max-w-7xl scroll-smooth selection:text-white selection:bg-teal-700">
        {!hideNavbar && (
          <BounceInBottom>
            <Navbar />
          </BounceInBottom>
        )}
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/email-confirmed" element={<EmailConfirmed />} />
          <Route path="/choose-role" element={<ChooseRole />} />
          <Route
            path="/welcome"
            element={
              <GifComponent
                title="Hello Nasyfa, Welcome to Pixel"
                subtitle="Hang in there, your account is getting set up!"
                gif={assets.firstGif}
              />
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/task/detail" element={<DetailTask />} />
          <Route path="/search/:query" element={<ResultSearchPage />} />
          <Route path="/project/upload" element={<FormProjectPage />} />
          <Route path="/project/update" element={<FormProjectPage />} />
          <Route path="/project/share" element={<SharedProject />} />
          <Route path="/project/detail" element={<DetailProject />} />
          <Route
            path="/upload-project"
            element={
              <GifComponent
                title="Your project is being uploaded"
                subtitle="It'll be ready shortly-just a moment more!"
                gif={assets.secondGif}
              />
            }
          />
          <Route path="/task/upload" element={<FormTaskPage />} />
          <Route
            path="/upload-task"
            element={
              <GifComponent
                title="Your Task is being uploaded"
                subtitle="The upload process will be ready - just a moment!"
                gif={assets.secondGif}
              />
            }
          />
          {token ? <Route path="/dashboard" element={<DashboardPage />} /> : ""}

          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute token={token} allowedRoles={["SuperVisor"]}>
                <DashboardAdminPage />
              </ProtectedRoute>
            }
          />
          <Route path="/profile/edit" element={<ProfilePage />} />
        </Routes>
        {!hideFooter && (
          <div className="mx-auto px-14 md:pr-8 lg:px-20 lg:mx-auto lg:max-w-full">
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
