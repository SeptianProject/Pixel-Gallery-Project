import { Routes, Route, useLocation } from "react-router-dom"
import NotFoundPage from "./NotFoundPage"
import HomePage from "./HomePage"
import ProjectPage from "./projects/ProjectPage"
import TaskPage from "./tasks/TaskPage"
import SharedProject from "./SharedPage"
import DashboardUser from "./dashboard/DashboardPage"
import DetailProject from "./projects/DetailProject"
import FormProjectPage from "./form/FormProjectPage"
import ResultSearchPage from "./ResultSearchPage"
import { BounceInBottom } from "../components/animations/BounceAnimate"
import Navbar from "../components/Navbar"
import RegisterPage from "./auth/RegisterPage"
import ChooseRole from "./auth/ChooseRole"
import Footer from "../components/Footer"
import Profile from "./Profile"
import DetailTask from "./tasks/DetailTask"
import GifComponent from "../components/gifComponent"
import { assets } from "../assets/assets"

const Page = () => {
    const location = useLocation()

    const hideNavbar = location.pathname === '/project/share' || location.pathname === '/-' || location.pathname === '/project/detail' || location.pathname === '/task/detail' || location.pathname === '/' || location.pathname === '/choose-role' || location.pathname === '/animate'

    const hideFooter = location.pathname === '/' || location.pathname === '/-' || location.pathname === '/choose-role' || location.pathname === '/animate'

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
                    <Route path='/' element={<RegisterPage />} />
                    <Route path='/choose-role' element={<ChooseRole />} />
                    <Route path='/-'
                        element={<GifComponent
                            title='Hello Nasyfa, Welcome to Pixel'
                            subtitle='Hang in there, your account is getting set up!'
                            gif={assets.firstGif}
                        />}
                    />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/project' element={<ProjectPage />} />
                    <Route path='/task' element={<TaskPage />} />
                    <Route path='/task/detail' element={<DetailTask />} />
                    <Route path='/search/:query' element={<ResultSearchPage />} />
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