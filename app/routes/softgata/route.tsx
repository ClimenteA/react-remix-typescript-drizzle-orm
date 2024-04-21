import type { MetaFunction } from "@remix-run/node"
import NavBar from "./components/Navbar"
import MainHero from "./components/MainHero"
import ServiceCards from "./components/ServiceCards"
import ServiceDetails from "./components/ServiceDetails"
import Steps from "./components/Steps"


export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - On-demand Web Applications and IT Consulting" },
        { name: "description", content: "SOFTGATA - On-demand Web Applications and IT Consulting" },
    ]
}


export default function SoftgataLanding() {
    return (
        <main className="container">
            <NavBar />
            <MainHero />
            <ServiceCards />
            <ServiceDetails />
            <Steps />
        </main>
    )
}