import type { MetaFunction } from "@remix-run/node"
import MainHero from "../../components/softgata/MainHero"
import ServiceCards from "../../components/softgata/ServiceCards"
import ServiceDetails from "../../components/softgata/ServiceDetails"
import Steps from "../../components/softgata/Steps"
import Blog from "../../components/softgata/Blog"
import NavBar from "../../components/softgata/Navbar"
import Contact from "../../components/softgata/Contact"
import Footer from "../../components/softgata/Footer"


export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - On-demand Web Applications and IT Consulting" },
        { name: "description", content: "SOFTGATA - On-demand Web Applications and IT Consulting" },
    ]
}


export default function SoftgataLanding() {
    return (
        <main className="container-fluid">
            <NavBar />
            <MainHero />
            <ServiceCards />
            <ServiceDetails />
            <Steps />
            <Blog />
            <Contact />
            <Footer />
        </main>
    )
}