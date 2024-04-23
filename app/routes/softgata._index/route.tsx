import type { MetaFunction } from "@remix-run/node"
import MainHero from "./components/MainHero"
import ServiceCards from "./components/ServiceCards"
import ServiceDetails from "./components/ServiceDetails"
import Steps from "./components/Steps"
import Blog from "./components/Blog"
import NavBar from "~/common/softgata-components/Navbar"
import Contact from "~/common/softgata-components/Contact"
import Footer from "~/common/softgata-components/Footer"

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