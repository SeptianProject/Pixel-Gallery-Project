import { Routes, Route, useLocation } from "react-router-dom"
import NotFoundPage from "./NotFoundPage"
import HomePage from "./HomePage"
import ProjectPage from "./project/ProjectPage"
import TaskPage from "./TaskPage"
import SharedProject from "./SharedPage"
import DashboardUser from "./dashboard/DashboardPage"
import DetailProject from "./project/DetailProject"
import FormProjectPage from "./form/FormProjectPage"
import ResultSearchPage from "./ResultSearchPage"
import { BounceInBottom } from "../components/animations/BounceAnimate"
import Navbar from "../components/Navbar"
import RegisterPage from "./auth/RegisterPage"
import ChooseRole from "./ChooseRole"
import Footer from "../components/Footer"
import GifAnimation from "./gif/GifAnimation"

const Page = () => {
    const location = useLocation()

    const hideNavbar = location.pathname === '/project/share' || location.pathname === '/project/detail' || location.pathname === '/register' || location.pathname === '/choose-role' || location.pathname === '/animate'

    const hideFooter = location.pathname === '/register' || location.pathname === '/choose-role' || location.pathname === '/animate'

    return (
        <>
            <div className="bg-white container mx-auto w-full max-w-7xl scroll-smooth selection:text-white selection:bg-teal-700">
                {!hideNavbar &&
                    <BounceInBottom delayVal={0.3}>
                        <Navbar />
                    </BounceInBottom>
                }
                <Routes>
                    <Route path='*' element={<NotFoundPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/choose-role' element={<ChooseRole />} />
                    <Route path='/animate' element={<GifAnimation />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path='/project' element={<ProjectPage />} />
                    <Route path='/task' element={<TaskPage />} />
                    <Route path='/search' element={<ResultSearchPage />} />
                    <Route path='/project/form' element={<FormProjectPage />} />
                    <Route path="/project/share" element={<SharedProject />} />
                    <Route path="/dashboard" element={<DashboardUser />} />
                    <Route path="/project/detail" element={<DetailProject />} />
                </Routes>
                {
                    !hideFooter &&
                    <div className="mx-auto px-14 md:pr-8 lg:px-20 lg:mx-auto lg:max-w-full">
                        <Footer />
                    </div>
                }
            </div>
        </>
    )
}

export default Page