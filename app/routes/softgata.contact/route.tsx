import invariant from "tiny-invariant"
import { useActionData } from "@remix-run/react"
import type { MetaFunction } from "@remix-run/node"
import type { ActionFunctionArgs } from "@remix-run/node"
import NavBar from "../../components/softgata/Navbar"
import Contact from "../../components/softgata/Contact"
import Footer from "../../components/softgata/Footer"


export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - Contact us" },
        { name: "description", content: "SOFTGATA - Contact us" },
    ]
}


export async function action({ request }: ActionFunctionArgs) {

    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    invariant(data.email, "Missing email")
    invariant(data.message, "Missing message")

    console.log(data)

    return true
}



export default function ContactPage() {
    const data = useActionData<typeof action>()

    return (
        <main className="container-fluid">
            <NavBar />
            <Contact messageSent={data} />
            <Footer />
        </main>
    )
}
