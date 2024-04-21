

export default function ServiceCards() {

    return (
        <div className="t-mt-32">
            <p className="title is-4 t-text-gray-900">
                We offer the following services:
            </p>

            <div className="t-grid xl:t-grid-cols-3 xl:t-gap-24 t-grid-cols-1 t-gap-12 mt-6 t-place-items-center">

                <article
                    style={{ borderRadius: "20px" }}
                    className="t-shadow-xl t-p-8 t-w-[450px] t-min-h-[550px] t-bg-[url('/public/softgata/business-automation.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                >

                    <div className="t-mt-32">
                        <h2 className="title is-3 has-text-white has-text-centered">Business Automation</h2>

                        <p className="t-text-gray-100 t-mt-32 has-text-centered">
                            Together we can identify business processes in your organization which can be improved with software.
                        </p>
                    </div>

                    <a href="#" className="t-mt-24 has-text-success t-float-right">
                        See more
                        <i className="ml-1 bi bi-arrow-right t-text-xs"></i>
                    </a>

                </article>


                <article
                    style={{ borderRadius: "20px" }}
                    className="t-shadow-xl t-p-8 t-w-[450px] t-min-h-[550px] t-bg-[url('/public/softgata/saas-development.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                >

                    <div className="t-mt-32">
                        <h2 className="title is-3 has-text-white has-text-centered">SAAS Development</h2>

                        <p className="t-text-gray-100 t-mt-32 has-text-centered">
                            We can help you build your next disruptive web application. We use the following tech: Python, Typescript, Go.
                        </p>
                    </div>

                    <a href="#" className="t-mt-24 has-text-success t-float-right">
                        See more
                        <i className="ml-1 bi bi-arrow-right t-text-xs"></i>
                    </a>

                </article>

                <article
                    style={{ borderRadius: "20px" }}
                    className="t-shadow-xl t-p-8 t-w-[450px] t-min-h-[550px] t-bg-[url('/public/softgata/app-integrations.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                >

                    <div className="t-mt-32">
                        <h2 className="title is-3 has-text-white has-text-centered">App Integrations</h2>

                        <p className="t-text-gray-100 t-mt-32 has-text-centered">
                            Sometimes what you need is already built. We can help you find and integrate available software in your organization.
                        </p>
                    </div>

                    <a href="#" className="t-mt-24 has-text-success t-float-right">
                        See more
                        <i className="ml-1 bi bi-arrow-right t-text-xs"></i>
                    </a>

                </article>

            </div>


            <div className="t-flex t-flex-row t-justify-between t-mt-16">

                <p className="title is-4 t-text-gray-900">
                    <i className="mr-2 bi bi-asterisk"></i>
                    We can help you achieve your objectives!
                </p>

                <a href="#" className="title is-4 t-text-gray-900">
                    Book a call with us
                    <i className="ml-2 bi bi-arrow-right"></i>
                </a>

            </div>

        </div>
    )

}
