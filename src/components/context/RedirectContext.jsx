import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const RedirectContext = createContext();


export const RedirectProvider = ({ children }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [redirect, setRedirect] = useState(false);

    const handleRedirect = () => {
        if (location.pathname === '/') {
            setRedirect(true)
            if (redirect) {
                navigate('/register')
            }
        }
    }

    useEffect(() => {
        handleRedirect()
    })

    return (
        <RedirectContext.Provider value={handleRedirect}>
            {children}
        </RedirectContext.Provider>
    )
}
