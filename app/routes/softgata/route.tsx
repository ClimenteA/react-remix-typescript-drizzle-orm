import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - On-demand Web Applications and IT Consulting" },
        { name: "description", content: "SOFTGATA - On-demand Web Applications and IT Consulting" },
    ]
}

export default function SoftgataLanding() {
    return (
        <main className="container">
            <h1>Softgata landing</h1>
        </main>
    )
}