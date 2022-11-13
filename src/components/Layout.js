import SiteCarousel from "./SiteCarousel"
import LandingFeature from "./LandingFeature"
import LogoBanner from "./LogoBanner"
import Navbar from "./Navbar"
import ContentLayout from "./ContentLayout"
import InitiativesSection from "./InitiativesSection"
import Footer from "./Footer"

const Layout = () => {
    return (
        <>  
            <LogoBanner/>
            <Navbar/>
            <SiteCarousel/>
            <LandingFeature/>
            <ContentLayout/>
            <InitiativesSection/>
            <Footer/>
        </>
    )
}

export default Layout