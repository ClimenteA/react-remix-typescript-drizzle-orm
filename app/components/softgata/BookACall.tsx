import { Link } from "@remix-run/react"

export default function BookACall() {

    return <div className="container">
        <div className="t-flex lg:t-flex-row lg:t-justify-between t-flex-col t-mt-16 md:mx-0 mx-2">

            <p className="title is-size-4-desktop is-size-5-tablet is-size-6-mobile t-text-gray-900">
                <i className="mr-2 bi bi-asterisk md:t-inline-block t-hidden"></i>
                We can help you achieve your objectives!
            </p>

            <Link to={"/softgata/contact"} className="title is-size-4-desktop is-size-5-tablet is-size-6-mobile t-text-gray-900">
                Book a call with us
                <i className="ml-2 bi bi-arrow-right"></i>
            </Link>

        </div>
    </div>

}