import { Link } from "@remix-run/react"
import BookACall from "./BookACall"
import { useInView, animated } from '@react-spring/web'


export default function ServiceCards() {

    const [cardRef, cardDrop] = useInView(
        () => ({
            from: { y: -20 },
            to: { y: 0 },
        }),
        {
            rootMargin: '-60% 0%',
            once: true
        }
    )

    return (
        <div id="services" className="lg:t-pt-32 t-pt-16">

            <div className="container">
                <p className="title is-4 t-text-gray-900 md:ml-0 ml-2 ">
                    We offer the following services:
                </p>
            </div>

            <div className="t-flex t-flex-wrap t-place-content-center t-gap-16 mt-6">

                <animated.article
                    ref={cardRef}
                    style={cardDrop}
                    className="t-flex t-flex-col lg:t-max-w-[430px] lg:t-h-[550px] t-max-w-[400px] t-h-[500px] t-shadow-xl t-rounded-[20px] lg:t-p-8 t-p-4 t-bg-[url('/softgata/business-automation.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                >

                    <div className="t-mt-32">
                        <h2 className="title is-3 has-text-white has-text-centered">
                            Business Automation
                        </h2>

                        <p className="t-text-gray-100 t-mt-32 has-text-centered">
                            Together we can identify business processes in your organization which can be improved with software.
                        </p>
                    </div>

                    <div className="t-flex t-justify-end mt-6">
                        <Link to={"/softgata#business-automation-details"} className="has-text-success">
                            See more
                            <i className="ml-1 bi bi-arrow-right t-text-xs"></i>
                        </Link>
                    </div>

                </animated.article>


                <animated.article
                    ref={cardRef}
                    style={cardDrop}
                    className="t-flex t-flex-col lg:t-max-w-[430px] lg:t-h-[550px] t-max-w-[400px] t-h-[500px] t-shadow-xl t-rounded-[20px] lg:t-p-8 t-p-4 t-bg-[url('/softgata/saas-development.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                >

                    <div className="t-mt-32">
                        <h2 className="title is-3 has-text-white has-text-centered">SAAS Development</h2>

                        <p className="t-text-gray-100 t-mt-32 has-text-centered">
                            We can help you build your next disruptive web application. We use the following tech: Python, Typescript, Go.
                        </p>
                    </div>

                    <div className="t-flex t-justify-end mt-6">
                        <Link to={"/softgata#saas-development-details"} className="has-text-success">
                            See more
                            <i className="ml-1 bi bi-arrow-right t-text-xs"></i>
                        </Link>
                    </div>

                </animated.article>

                <animated.article
                    ref={cardRef}
                    style={cardDrop}
                    className="t-flex t-flex-col lg:t-max-w-[430px] lg:t-h-[550px] t-max-w-[400px] t-h-[500px] t-shadow-xl t-rounded-[20px] lg:t-p-8 t-p-4 t-bg-[url('/softgata/app-integrations.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                >

                    <div className="t-mt-32">
                        <h2 className="title is-3 has-text-white has-text-centered">App Integrations</h2>

                        <p className="t-text-gray-100 t-mt-32 has-text-centered">
                            Sometimes what you need is already built. We can help you find and integrate available software in your organization.
                        </p>
                    </div>

                    <div className="t-flex t-justify-end mt-6">
                        <Link to={"/softgata#app-integrations-details"} className="has-text-success">
                            See more
                            <i className="ml-1 bi bi-arrow-right t-text-xs"></i>
                        </Link>
                    </div>

                </animated.article>

            </div>

            <BookACall />

        </div>
    )

}
