import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.js"
import Header from "../components/Header.js"



const Layout = () =>{
    return (
        <>
        <Header />
        <Footer/>
        <Outlet/>
        </>
    )
}
export default Layout;