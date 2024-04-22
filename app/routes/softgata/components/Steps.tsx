import { useState } from "react"


export default function Steps() {
    const [selected, setSelected] = useState<number>(1)

    const selectedCircleClasses = "t-bg-black t-min-w-[90px] t-min-h-[90px] t-rounded-[90px] t-grid t-place-content-center"
    const selectedArrowRightClasses = "m-4 t-block title is-1 bi bi-arrow-right lg:t-block t-hidden"
    const selectedTextClasses = "ml-4 lg:t-text-xl t-text-lg lg:mt-0 mt-4"

    const unselectedCircleClasses = "t-bg-gray-300 t-min-w-[90px] t-min-h-[90px] t-rounded-[90px] t-grid t-place-content-center"
    const unselectedArrowRightClasses = "m-4 t-block title t-text-gray-400 is-1 bi bi-arrow-right lg:t-block t-hidden"
    const unselectedTextClasses = "ml-4 t-text-gray-400 lg:t-text-xl t-text-lg lg:mt-0 mt-4"

    const imageSrcMapper: { [key: number]: string } = {
        1: "/softgata/email.jpg",
        2: "/softgata/call-vintage.jpg",
        3: "/softgata/zoom-dogs.jpg",
    }

    return (
        <div className="lg:t-mt-24 t-mt-16 container">

            <div>
                <h2 className="title is-size-2-desktop is-size-3-tablet is-size-3-mobile has-text-centered">
                    Ok... how does this work?
                </h2>
                <p className="has-text-centered -t-mt-5 lg:t-text-lg t-text-sm">
                    Below are the steps we'll take if you decide to collaborate with us.
                </p>
            </div>

            <div className="t-flex lg:t-flex-row lg:t-flex-nowrap t-flex-wrap t-place-items-center t-gap-6 t-mt-24">

                <div className="t-space-y-12 t-min-w-[600px] t-z-10 ml-2">

                    <a className="t-block t-cursor-pointer t-select-none" onClick={() => setSelected(1)}>
                        <div className="t-flex lg:t-flex-row t-flex-col t-place-items-center">

                            <p className={selected == 1 ? selectedCircleClasses : unselectedCircleClasses}>
                                <span className="t-text-white title is-1 t-z-10">
                                    1
                                </span>
                            </p>

                            <i className={selected == 1 ? selectedArrowRightClasses : unselectedArrowRightClasses}></i>

                            <p className={selected == 1 ? selectedTextClasses : unselectedTextClasses}>
                                Send us your email and a message in which you describe the area in your business which you think we can be of help.
                                It can be business automation, app integrations or SAAS development.
                            </p>

                        </div>
                    </a>

                    <a className="t-block t-cursor-pointer t-select-none" onClick={() => setSelected(2)}>
                        <div className="t-flex lg:t-flex-row t-flex-col t-place-items-center">

                            <p className={selected == 2 ? selectedCircleClasses : unselectedCircleClasses}>
                                <span className="t-text-white title is-1 t-z-10">
                                    2
                                </span>
                            </p>

                            <i className={selected == 2 ? selectedArrowRightClasses : unselectedArrowRightClasses}></i>

                            <p className={selected == 2 ? selectedTextClasses : unselectedTextClasses}>
                                We will contact you with some possible solutions we can implement
                                and an estimate of price and time frame in which we can integrate them in your business.
                            </p>

                        </div>
                    </a>

                    <a className="t-block t-cursor-pointer t-select-none" onClick={() => setSelected(3)}>
                        <div className="t-flex lg:t-flex-row t-flex-col t-place-items-center">

                            <p className={selected == 3 ? selectedCircleClasses : unselectedCircleClasses}>
                                <span className="t-text-white title is-1 t-z-10">
                                    3
                                </span>
                            </p>

                            <i className={selected == 3 ? selectedArrowRightClasses : unselectedArrowRightClasses}></i>

                            <p className={selected == 3 ? selectedTextClasses : unselectedTextClasses}>
                                We'll create a kickoff meeting in which we establish all the projects objectives, timeline, deliverables, budget and success metrics.
                            </p>

                        </div>
                    </a>

                </div>

                <div className="mx-auto lg:t-mt-0 t-mt-6">
                    <img className="lg:t-rounded-[40px] t-rounded-[20px] -t-z-10 lg:t-min-w-[600px] t-w-[700px] lg:t-h-[400px] t-h-[500px] t-object-cover" src={imageSrcMapper[selected]} alt="" />
                </div>

            </div>

        </div>
    )
}