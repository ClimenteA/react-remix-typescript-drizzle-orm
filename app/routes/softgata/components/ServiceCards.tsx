

export default function ServiceCards() {

    return (
        <div className="lg:t-mt-32 t-mt-16">

            <div className="container">
                <p className="title is-4 t-text-gray-900 md:ml-0 ml-2 ">
                    We offer the following services:
                </p>
            </div>

            <div className="t-flex t-flex-wrap t-place-content-center t-gap-10 mt-6">

                <article
                    className="t-flex t-flex-col t-max-w-[430px] t-h-[550px] t-shadow-xl t-rounded-[20px] t-p-8 t-bg-[url('/softgata/business-automation.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                >

                    <div className="t-mt-32">
                        <h2 className="title is-3 has-text-white has-text-centered">Business Automation</h2>

                        <p className="t-text-gray-100 t-mt-32 has-text-centered">
                            Together we can identify business processes in your organization which can be improved with software.
                        </p>
                    </div>

                    <div className="t-flex t-justify-end mt-6">
                        <a href="#" className="has-text-success">
                            See more
                            <i className="ml-1 bi bi-arrow-right t-text-xs"></i>
                        </a>
                    </div>

                </article>


                <article
                    className="t-flex t-flex-col t-max-w-[430px] t-h-[550px] t-shadow-xl t-rounded-[20px] t-p-8 t-bg-[url('/softgata/saas-development.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                >

                    <div className="t-mt-32">
                        <h2 className="title is-3 has-text-white has-text-centered">SAAS Development</h2>

                        <p className="t-text-gray-100 t-mt-32 has-text-centered">
                            We can help you build your next disruptive web application. We use the following tech: Python, Typescript, Go.
                        </p>
                    </div>

                    <div className="t-flex t-justify-end mt-6">
                        <a href="#" className="has-text-success">
                            See more
                            <i className="ml-1 bi bi-arrow-right t-text-xs"></i>
                        </a>
                    </div>

                </article>

                <article
                    className="t-max-w-[430px] t-h-[550px] t-shadow-xl t-rounded-[20px] t-p-8 t-bg-[url('/softgata/app-integrations.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                >

                    <div className="t-mt-32">
                        <h2 className="title is-3 has-text-white has-text-centered">App Integrations</h2>

                        <p className="t-text-gray-100 t-mt-32 has-text-centered">
                            Sometimes what you need is already built. We can help you find and integrate available software in your organization.
                        </p>
                    </div>

                    <div className="t-flex t-justify-end mt-6">
                        <a href="#" className="has-text-success">
                            See more
                            <i className="ml-1 bi bi-arrow-right t-text-xs"></i>
                        </a>
                    </div>

                </article>

            </div>

            <div className="container">
                <div className="t-flex lg:t-flex-row lg:t-justify-between t-flex-col t-mt-16 md:mx-0 mx-2">

                    <p className="title is-size-4-desktop is-size-4-tablet is-size-5-mobile t-text-gray-900">
                        <i className="mr-2 bi bi-asterisk md:t-inline-block t-hidden"></i>
                        We can help you achieve your objectives!
                    </p>

                    <a href="#" className="title is-size-4-desktop is-size-4-tablet is-size-5-mobile t-text-gray-900">
                        Book a call with us
                        <i className="ml-2 bi bi-arrow-right"></i>
                    </a>

                </div>
            </div>

        </div>
    )

}
