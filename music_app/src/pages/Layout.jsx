import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.js"

const Layout = () =>{
    return (
        <>
        <Footer/>
        <Outlet/>
        </>
    )
}
export default Layout;