import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"


export const meta: MetaFunction = () => {
  return [
    { title: "Softgata Index" },
    { name: "description", content: "Softgata website index" },
  ]
}

export default function Index() {
  return (
    <div className="container t-mt-24">
      <h1 className="title is-1">SOFTGATA INDEX</h1>
      <p>Click on one of the websites you want to navigate to:</p>
      <ul className="t-list-disc t-mt-12">
        <li>
          <Link className="t-text-blue-600" to={"/softgata"}>softgata.com</Link>
        </li>
      </ul>
    </div>
  )
}
