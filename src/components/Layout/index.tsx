import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
    children: string | React.JSX.Element | React.JSX.Element[]
}
const Layout = (props: LayoutProps) => {
    return(
        <>
            <Navbar/>
                {props.children}
            <Footer/>
        </>
    )
}

export default Layout;