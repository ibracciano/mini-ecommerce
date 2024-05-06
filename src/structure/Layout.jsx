import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

import { useState } from "react"



const Layout = () => {
    const [isDarkMode, setDarkMode] = useState(false);


    // console.log(theme);
    function toggleDarkMode() {

        setDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }

    // useEffect(() => {

    // }, [third])

    return (
        <>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout