


export default function Footer() {
    return (
        <footer className="t-bg-gray-900 t-py-24 t-relative">

            <div className="t-flex t-justify-center">
                <div>
                    <h2 className="lg:t-text-6xl t-text-4xl t-font-bold">
                        <span className="t-text-white">SOFT</span>
                        <span className="has-text-success">GATA</span>
                    </h2>
                    <p className="t-text-gray-400 lg:t-text-3xl t-text-lg lg:ml-1">Your Software Partner</p>
                </div>
            </div>

            <div className="container t-mt-16 t-flex lg:t-flex-nowrap t-flex-wrap t-gap-8 t-justify-between px-4">

                <ul className="has-text-white t-space-y-2">
                    <caption className="t-text-lg t-font-bold mb-3">Legal</caption>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Cookie policy</a>
                    </li>
                    <li>
                        <a href="#">GDPR</a>
                    </li>
                    <li>
                        <a href="#">Terms and conditions</a>
                    </li>
                </ul>

                <ul className="has-text-white t-space-y-2">
                    <caption className="t-text-lg t-font-bold mb-3">Social</caption>
                    <li>
                        <a href="#">Linkedin</a>
                    </li>
                    <li>
                        <a href="#">Medium</a>
                    </li>
                    <li>
                        <a href="#">Youtube</a>
                    </li>
                </ul>


                <ul className="has-text-white t-space-y-2">
                    <caption className="t-text-lg t-font-bold mb-3">Projects</caption>
                    <li>
                        <a href="#">Accounting app for freelancers</a>
                    </li>
                    <li>
                        <a href="#">Python web app to desktop app converter</a>
                    </li>
                    <li>
                        <a href="#">Local remote jobs aggregator</a>
                    </li>
                    <li>
                        <a href="#">Server notifier service</a>
                    </li>
                </ul>

            </div>

            <p className="t-absolute t-text-gray-400 t-text-xs t-right-4 t-bottom-4">Copyright Climente Alin Ionel PFA</p>

        </footer>
    )
}