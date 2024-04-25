import { Link } from "@remix-run/react"


export default function Blog() {
    return (
        <div>
            <div className="t-mt-32 t-p-10 t-bg-gray-200">

                <div className="container t-flex lg:t-flex-nowrap t-flex-wrap t-items-baseline t-justify-between">
                    <p className="title is-size-3-desktop is-size-4-tablet is-size-4-mobile">
                        Take the first step
                        <i className="ml-2 bi bi-arrow-right"></i>
                    </p>

                    <Link to={"/softgata/contact"} className="button is-large t-font-bold title is-size-3-desktop is-size-4-tablet is-size-4-mobile t-bg-rose-600 t-text-white">
                        Contact us
                    </Link>

                </div>

            </div>

            <div className="t-bg-[#2C5850]">

                <p className="lg:t-text-9xl t-text-5xl t-font-extrabold t-text-white pt-6 pl-6">
                    <i className="bi bi-asterisk"></i>
                </p>

                <div className="container t-pb-10">

                    <div className="t-grid xl:t-grid-cols-2 xl:t-gap-24 t-grid-cols-1 t-gap-12 mt-6 t-place-items-center">

                        <Link to={"/softgata/blog/how-to-identify-areas-in-your-business-that-can-be-automated"}>
                            <article
                                className="t-relative t-shadow-xl t-flex t-place-items-end t-rounded-[20px] 
                            t-p-8 t-max-w-[500px] t-min-h-[300px] 
                            t-bg-[url('/softgata/article-business-automation-identify.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                            >

                                <h2 className="lg:t-text-2xl t-text-xl t-font-bold has-text-white has-text-centered t-bg-gray-900 p-4 t-rounded-[20px]">
                                    How to identify areas in your business that can be automated
                                </h2>

                            </article>
                        </Link>

                        <Link to={"/softgata/blog/how-will-an-automated-business-process-benefit-your-company"}>
                            <article
                                className="t-relative t-shadow-xl t-flex t-place-items-end t-rounded-[20px] 
                            t-p-8 t-max-w-[500px] t-min-h-[300px] t-bg-[url('/softgata/happy-meeting-2.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                            >

                                <h2 className="lg:t-text-2xl t-text-xl t-font-bold has-text-white has-text-centered t-bg-gray-900 p-4 t-rounded-[20px]">
                                    How will an automated business process benefit your company
                                </h2>

                            </article>
                        </Link>


                        <Link to={"/softgata/blog/what-software-can-you-integrate-in-your-company-to-yield-more-results"}>
                            <article
                                className="t-relative t-shadow-xl t-flex t-place-items-end t-rounded-[20px] 
                            t-p-8 t-max-w-[500px] t-min-h-[300px] t-bg-[url('/softgata/laptop-charts.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                            >

                                <h2 className="lg:t-text-2xl t-text-xl t-font-bold has-text-white has-text-centered t-bg-gray-900 p-4 t-rounded-[20px]">
                                    What software can you integrate in your company to yield more results
                                </h2>

                            </article>
                        </Link>

                        <Link to={"/softgata/blog/building-custom-software-vs-integrating-existing-software-in-your-business"}>
                            <article
                                className="t-relative t-shadow-xl t-flex t-place-items-end t-rounded-[20px] t-p-8 
                            t-max-w-[500px] t-min-h-[300px] 
                            t-bg-[url('/softgata/olarit.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                            >

                                <h2 className="lg:t-text-2xl t-text-xl t-font-bold has-text-white has-text-centered t-bg-gray-900 p-4 t-rounded-[20px]">
                                    Building custom software vs integrating existing software in your business
                                </h2>

                            </article>
                        </Link>

                        <Link to={"/softgata/blog/top-technologies-which-you-can-use-to-create-the-next-gen-saas"}>
                            <article
                                className="t-relative t-shadow-xl t-flex t-place-items-end t-rounded-[20px] 
                            t-p-8 t-max-w-[500px] t-min-h-[300px] t-bg-[url('/softgata/big-monitor-with-code.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                            >

                                <h2 className="lg:t-text-2xl t-text-xl t-font-bold has-text-white has-text-centered t-bg-gray-900 p-4 t-rounded-[20px]">
                                    Top technologies which you can use to create the next gen SAAS
                                </h2>

                            </article>
                        </Link>


                        <Link to={"/softgata/blog/how-to-find-great-talent-for-your-company-and-what-great-talent-looks-for-at-work"}>
                            <article
                                className="t-relative t-shadow-xl t-flex t-place-items-end t-rounded-[20px] t-p-8 t-max-w-[500px] t-min-h-[300px] t-bg-[url('/softgata/casual-interview.jpg')] t-bg-cover t-bg-center t-bg-no-repeat"
                            >

                                <h2 className="lg:t-text-2xl t-text-xl t-font-bold has-text-white has-text-centered t-bg-gray-900 p-4 t-rounded-[20px]">
                                    How to find great talent for your company and what great talent looks for at work
                                </h2>

                            </article>
                        </Link>

                    </div>
                </div>

                <p className="lg:t-text-9xl t-text-5xl t-font-extrabold t-text-white p-6 t-text-right">Blog</p>

            </div>
        </div>

    )
}

