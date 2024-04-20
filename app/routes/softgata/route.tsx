import type { MetaFunction } from "@remix-run/node"
import NavBar from "./components/Navbar"
import MainHero from "./components/MainHero"


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
        </main>
    )
}