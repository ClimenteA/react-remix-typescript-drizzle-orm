export default function Steps() {
    return (
        <div className="t-mt-24 container">

            <div>
                <h2 className="title is-2 has-text-centered">Ok... how does this work?</h2>
                <p className="has-text-centered -t-mt-5">Below are the steps we’ll take if you decide to collaborate with us.</p>
            </div>

            <div className="t-flex t-place-items-center t-gap-6 t-mt-24">

                <div className="t-space-y-12 t-min-w-[300px] t-z-10">

                    <div className="t-flex t-flex-row t-place-items-center">

                        <p className="t-bg-black t-min-w-[90px] t-min-h-[90px] t-rounded-[90px] t-grid t-place-content-center">
                            <span className="t-text-white title is-1 t-z-10">
                                1
                            </span>
                        </p>

                        <i className="m-4 t-block title is-1 bi bi-arrow-right"></i>

                        <p className="ml-4 t-text-xl t-max-w-[700px]">
                            Send us your email and a message in which you describe the area in your business which you think we can be of help.
                            It can be business automation, app integrations or SAAS development.
                        </p>

                    </div>


                    <div className="t-flex t-flex-row t-place-items-center">

                        <p className="t-bg-gray-300 t-min-w-[90px] t-min-h-[90px] t-rounded-[90px] t-grid t-place-content-center">
                            <span className="t-text-white title is-1 t-z-10">
                                2
                            </span>
                        </p>

                        <i className="m-4 t-block title is-1 bi bi-arrow-right"></i>

                        <p className="ml-4 t-text-gray-400 t-text-xl t-max-w-[700px]">
                            We will contact you with some possible solutions we can implement
                            and an estimate of price and time frame in which we can integrate them in your business.
                        </p>

                    </div>


                    <div className="t-flex t-flex-row t-place-items-center">

                        <p className="t-bg-gray-300 t-min-w-[90px] t-min-h-[90px] t-rounded-[90px] t-grid t-place-content-center">
                            <span className="t-text-white title is-1 t-z-10">
                                3
                            </span>
                        </p>

                        <i className="m-4 t-block title is-1 bi bi-arrow-right"></i>

                        <p className="ml-4 t-text-gray-400 t-text-xl t-max-w-[700px]">
                            We'll create a kickoff meeting in which we establish all the projects objectives, timeline, deliverables, budget and success metrics.
                        </p>

                    </div>

                </div>

                <img className="t-rounded-[40px] -t-z-10 t-w-[600px]" src="/public/softgata/email.jpg" alt="" />

            </div>

        </div>
    )
}