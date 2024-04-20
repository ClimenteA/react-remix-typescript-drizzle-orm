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
            <h1 className="title is-1">Softgata Landing</h1>
        </main>
    )
}