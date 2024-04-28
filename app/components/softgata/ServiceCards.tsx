import { Link } from "@remix-run/react"
import BookACall from "./BookACall"
import { useInView, animated } from '@react-spring/web'


interface ContentDetails {
    title: string
    content: string
    link: string
}


const cardContentMapper: { [key: string]: ContentDetails } = {
    "business-automation": {
        title: "Business Automation",
        content: "Together we can identify business processes in your organization which can be improved with software.",
        link: "/softgata#business-automation-details"
    },
    "saas-development": {
        title: "SAAS Development",
        content: "We can help you build your next disruptive web application. We use the following tech: Python, Typescript, Go.",
        link: "/softgata#saas-development-details"
    },
    "app-integrations": {
        title: "App Integrations",
        content: "Sometimes what you need is already built. We can help you find and integrate available software in your organization.",
        link: "/softgata#app-integrations-details"
    }
}


function CardContent({ content }: { content: string }) {

    const c = cardContentMapper[content]

    return (
        <>
            <div className="lg:t-mt-32 t-mt-24">
                <h2 className="title is-size-3-desktop is-size-4-tablet is-size-4-mobile has-text-white has-text-centered">
                    {c.title}
                </h2>

                <p className="t-text-gray-100 lg:t-mt-32 t-mt-16 has-text-centered lg:t-text-md t-text-sm">
                    {c.content}
                </p>
            </div>

            <div className="t-flex t-justify-end t-mt-16">
                <Link to={c.link} className="lg:t-text-sm t-text-xs has-text-success">
                    See more
                    <i className="ml-1 bi bi-arrow-right t-text-xs"></i>
                </Link>
            </div>

        </>
    )
}


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

    const cardClasses = "t-flex t-flex-col lg:t-max-w-[430px] lg:t-h-[550px] t-max-w-[400px] t-h-[400px] t-shadow-xl lg:t-mx-0 t-mx-2 lg:t-rounded-[20px] t-rounded-md lg:t-p-8 t-p-4 t-bg-cover t-bg-center t-bg-no-repeat"

    return (
        <div id="services" className="lg:t-pt-32 t-pt-16">

            <div className="container">
                <p className="title is-4 t-text-gray-900 md:ml-0 ml-2 ">
                    We offer the following services:
                </p>
            </div>

            <div className="t-flex t-flex-wrap t-place-content-center lg:t-gap-16 t-gap-8 mt-6">

                <animated.article
                    ref={cardRef}
                    style={cardDrop}
                    className={cardClasses + " t-bg-[url('/softgata/business-automation.jpg')]"}
                >
                    <CardContent content="business-automation" />
                </animated.article>


                <animated.article
                    ref={cardRef}
                    style={cardDrop}
                    className={cardClasses + " t-bg-[url('/softgata/saas-development.jpg')]"}
                >
                    <CardContent content="saas-development" />
                </animated.article>

                <animated.article
                    ref={cardRef}
                    style={cardDrop}
                    className={cardClasses + " t-bg-[url('/softgata/app-integrations.jpg')]"}
                >
                    <CardContent content="app-integrations" />
                </animated.article>

            </div>

            <BookACall />

        </div>
    )

}
