import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "Softgata Index" },
    { name: "description", content: "Softgata website index" },
  ]
}

export default function Index() {
  return (
    <div className="container mt-6">
      <h1 className="title is-1">SOFTGATA INDEX</h1>
      <ul>
        <li><a href="https://softgata.com/">softgata.com</a></li>
        <li><a href="https://www.linkedin.com/company/softgata">Linkedin</a></li>
      </ul>
    </div>
  )
}
