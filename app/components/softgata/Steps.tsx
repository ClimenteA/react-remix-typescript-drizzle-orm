import { useEffect, useState } from "react"
import { useInView, animated } from '@react-spring/web'



export default function Steps() {
    const [stepSelected, setStepSelected] = useState<boolean>(false)
    const [selected, setSelected] = useState<number>(1)

    useEffect(() => {
        if (stepSelected) return
        const interval = setInterval(() => {
            if (selected == 1) setSelected(2)
            if (selected == 2) setSelected(3)
            if (selected == 3) setSelected(1)
        }, 2000)
        return () => clearTimeout(interval)
    }, [selected])

    const selectStep = (step: number) => {
        setSelected(step)
        setStepSelected(true)
    }

    const animation = () => ({
        from: { y: -60 },
        to: { y: 0 },
    })

    const options = {
        rootMargin: '-90% 0%',
        once: true
    }

    const [headerRef, headerDrop] = useInView(animation, options)

    const selectedCircleClasses = "t-bg-black lg:t-min-w-[90px] lg:t-min-h-[90px] lg:t-rounded-[90px] t-min-w-[50px] t-min-h-[50px] t-rounded-[50px] t-grid t-place-content-center"
    const unselectedCircleClasses = "t-bg-gray-300 lg:t-min-w-[90px] lg:t-min-h-[90px] lg:t-rounded-[90px] t-min-w-[50px] t-min-h-[50px] t-rounded-[50px] t-grid t-place-content-center"

    const selectedArrowRightClasses = "m-4 t-block title is-1 bi bi-arrow-right lg:t-block t-hidden"
    const unselectedArrowRightClasses = "m-4 t-block title t-text-gray-400 is-1 bi bi-arrow-right lg:t-block t-hidden"

    const selectedTextClasses = "lg:ml-4 lg:t-text-lg t-text-sm lg:t-ml-0 t-ml-3 t-text-left"
    const unselectedTextClasses = "lg:ml-4 t-text-gray-400 lg:t-text-lg t-text-sm lg:t-ml-0 t-ml-3 t-text-left"


    const imageSrcMapper: { [key: number]: string } = {
        1: "/softgata/email.jpg",
        2: "/softgata/call-vintage.jpg",
        3: "/softgata/zoom-dogs.jpg",
    }

    return (
        <div className="lg:t-mt-24 t-mt-16 container">

            <animated.div ref={headerRef} style={headerDrop}>
                <h2 className="title is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered">
                    Ok... how does this work?
                </h2>
                <p className="has-text-centered t-mx-auto -t-mt-5 lg:t-text-lg md:t-text-sm t-text-xs md:t-max-w-full t-max-w-[390px]">
                    Below are the steps we'll take if you decide to collaborate with us.
                </p>
            </animated.div>

            <div className="t-flex lg:t-flex-row lg:t-flex-nowrap t-flex-wrap t-place-items-center t-gap-6 lg:t-mt-24 t-mt-16">

                <div className="t-space-y-12 lg:t-min-w-[600px] t-z-10 ml-2">

                    <a className="t-block t-cursor-pointer t-select-none" onClick={() => selectStep(1)}>
                        <div className="t-flex t-flex-row t-place-items-center">

                            <p className={selected == 1 ? selectedCircleClasses : unselectedCircleClasses}>
                                <span className="t-text-white title is-size-1-desktop is-size-3-tablet is-size-3-mobile t-z-10">
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

                    <a className="t-block t-cursor-pointer t-select-none" onClick={() => selectStep(2)}>
                        <div className="t-flex t-flex-row t-place-items-center">

                            <p className={selected == 2 ? selectedCircleClasses : unselectedCircleClasses}>
                                <span className="t-text-white title is-size-1-desktop is-size-3-tablet is-size-3-mobile t-z-10">
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

                    <a className="t-block t-cursor-pointer t-select-none" onClick={() => selectStep(3)}>
                        <div className="t-flex t-flex-row t-place-items-center">

                            <p className={selected == 3 ? selectedCircleClasses : unselectedCircleClasses}>
                                <span className="t-text-white title is-size-1-desktop is-size-3-tablet is-size-3-mobile t-z-10">
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

                <div className="mx-auto lg:t-mt-0 t-mt-6 t-px-2">
                    <img className="lg:t-rounded-[40px] t-rounded-[15px] -t-z-10 lg:t-min-w-[600px] t-w-[700px] lg:t-h-[400px] t-h-[300px] t-object-cover" src={imageSrcMapper[selected]} alt="" />
                </div>

            </div>

        </div >
    )
}