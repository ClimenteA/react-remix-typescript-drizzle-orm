import NavBar from "../softgata._index/components/Navbar"
import Contact from "../softgata._index/components/Contact"
import Footer from "../softgata._index/components/Footer"
import type { MetaFunction } from "@remix-run/node"


export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - Contact us" },
        { name: "description", content: "SOFTGATA - Contact us for web Applications and IT consulting" },
    ]
}

export default function ContactPage() {
    return (
        <main className="container-fluid">
            <NavBar />
            <Contact />
            <Footer />
        </main>
    )
}