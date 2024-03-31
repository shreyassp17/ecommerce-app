import { Outlet } from "react-router"
import Header from "../components/Header"
import Banner from "../components/Banner"
import PopularSearches from "../components/PopularSearches"
import Footer from "../components/Footer"

export default function AppLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Banner />
            <PopularSearches />
            <Footer />
        </>
    )
}
