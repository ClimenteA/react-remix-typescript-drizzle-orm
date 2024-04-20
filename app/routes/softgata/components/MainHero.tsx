

export default function MainHero() {
    return (
        <div>

            <div>
                <h1 className="title is-1 has-text-centered t-leading-snug t-mt-28">
                    We'll help you bring <span className="t-text-rose-600">more value</span> <br /> to your customers.
                </h1>
                <p>
                    Enhance your business by integrating custom software solutions.
                    Save time, money, resources, increase accuracy of your business processes and maybe 10x your ROI.
                </p>
            </div>

            <div className="t-mt-28 is-flex is-flex-direction-column is-align-items-center">

                <button type="button" className="button is-large mb-4 is-primary t-text-white">
                    Let's talk, it's free
                    <i className="ml-2 bi bi-arrow-right"></i>
                </button>

                <div className="is-flex is-flex-direction-column is-align-items-center has-text-grey">
                    <p>See more below</p>
                    <i className="bi bi-arrow-down-short"></i>
                </div>

            </div>

        </div>
    )
}