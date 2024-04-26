import invariant from "tiny-invariant"
import { useActionData } from "@remix-run/react"
import type { MetaFunction } from "@remix-run/node"
import type { ActionFunctionArgs } from "@remix-run/node"

import MainHero from "../components/softgata/MainHero"
import ServiceCards from "../components/softgata/ServiceCards"
import ServiceDetails from "../components/softgata/ServiceDetails"
import Steps from "../components/softgata/Steps"
import Blog from "../components/softgata/Blog"
import NavBar from "../components/softgata/Navbar"
import Contact from "../components/softgata/Contact"
import Footer from "../components/softgata/Footer"

import saveMessage from "~/backend.server/operations/softgata/softgata"


export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - On-demand Web Applications and IT Consulting" },
        { name: "description", content: "SOFTGATA - On-demand Web Applications and IT Consulting" },
    ]
}


export async function action({ request }: ActionFunctionArgs) {

    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    invariant(data.email, "Missing email")
    invariant(data.message, "Missing message")

    const response = await saveMessage(String(data.email), String(data.message))
    console.log("Saved softgata message", response)

    return true
}



export default function SoftgataLanding() {

    const data = useActionData<typeof action>()

    return (
        <main className="container-fluid">
            <NavBar />
            <MainHero />
            <ServiceCards />
            <ServiceDetails />
            <Steps />
            <Blog />
            <Contact messageSent={data} />
            <Footer />
        </main>
    )
}