import { Link } from "@remix-run/react"


export default function Footer() {
    return (
        <footer className="t-bg-gray-900 t-py-24 t-relative">

            <Link to={"/softgata"}>
                <div className="t-flex t-justify-center">
                    <div>
                        <h2 className="lg:t-text-6xl t-text-4xl t-font-bold">
                            <span className="t-text-white">SOFT</span>
                            <span className="has-text-success">GATA</span>
                        </h2>
                        <p className="t-text-gray-400 lg:t-text-3xl t-text-lg lg:ml-1">Your Software Partner</p>
                    </div>
                </div>
            </Link>


            <div className="container t-mt-16 t-flex lg:t-flex-nowrap t-flex-wrap t-gap-8 t-justify-between px-4">

                <ul className="has-text-white t-space-y-2 lg:t-text-lg t-text-xs">
                    <p className="t-font-bold mb-3">Legal</p>
                    <li>
                        <Link to={"/softgata/about"}>
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to={"/softgata/cookie-policy"}>
                            Cookie policy
                        </Link>
                    </li>
                    <li>
                        <Link to={"/softgata/gdpr"}>
                            GDPR
                        </Link>
                    </li>
                    <li>
                        <Link to={"/softgata/terms-and-conditions"}>
                            Terms and conditions
                        </Link>
                    </li>
                </ul>

                <ul className="has-text-white t-space-y-2 lg:t-text-lg t-text-xs">
                    <p className="t-font-bold mb-3">Social</p>
                    <li>
                        <Link to={"https://www.linkedin.com/company/softgata"}>
                            linkedin
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://medium.com/@climente-alin"}>
                            medium
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://dev.to/climentea"}>
                            dev.to
                        </Link>
                    </li>
                </ul>


                <ul className="has-text-white t-space-y-2 lg:t-text-lg t-text-xs">
                    <p className="t-font-bold mb-3">Projects</p>
                    <li>
                        <Link to={"https://github.com/ClimenteA/flaskwebgui"}>
                            Python web app to desktop app converter
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://github.com/ClimenteA/simple-server-monitor"}>
                            Server notifier service
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://github.com/ClimenteA/Local-Remote-Developer-Jobs-Aggregator"}>
                            Local remote jobs aggregator
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://github.com/ClimenteA/PFASimplu"}>
                            Accounting app for freelancers
                        </Link>
                    </li>
                </ul>

            </div>

            <p className="t-absolute t-text-gray-400 t-text-xs t-right-4 t-bottom-4">Copyright Climente Alin Ionel PFA</p>

        </footer>
    )
}