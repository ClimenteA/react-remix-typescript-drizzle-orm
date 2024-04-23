import { Link } from "@remix-run/react"


export default function MainHero() {

    const binaryText = "{01010111}"

    return (
        <div className="t-relative container">

            <div className="t-relative mx-2">

                <svg
                    id="pacman"
                    className="t-absolute -t-z-10 -t-top-10 t-left-20 lg:t-block t-hidden"
                    width="360" height="360"
                    viewBox="0 0 363 363" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M363 181.5C363 145.163 352.093 109.662 331.691 79.5936C311.289 49.5248 282.331 26.272 248.566 12.8452C214.8 -0.581622 177.782 -3.56433 142.303 4.28315C106.823 12.1306 74.5158 30.447 49.5626 56.8614C24.6095 83.2758 8.15933 116.572 2.34146 152.44C-3.47641 188.309 1.60587 225.097 16.9305 258.045C32.255 290.992 57.1164 318.582 88.2964 337.241C119.476 355.901 155.54 364.772 191.818 362.706L181.5 181.5H363Z" fill="#FAFAFA" />
                </svg>

                <h1 className="title is-size-1-desktop is-size-2-mobile is-size-2-tablet has-text-centered md:t-leading-relaxed t-mt-28 t-text-gray-900">
                    We'll help you bring <span className="t-text-rose-600">more value</span> <br /> to your customers.
                </h1>
                <p className="has-text-centered md:t-text-lg t-text-sm md:t-leading-relaxed">
                    Enhance your business by integrating custom software solutions.
                    <br />
                    Save time, money, resources, increase accuracy of your business processes and maybe 10x your ROI.
                </p>
            </div>

            <div className="md:t-mt-28 t-mt-16 is-flex is-flex-direction-column is-align-items-center">

                <Link to={"/softgata/contact"} type="button" className="button is-large is-responsive has-text-weight-bold mb-4 is-primary t-text-white">
                    Let's talk, it's free
                    <i className="ml-2 bi bi-arrow-right"></i>
                </Link>

                <div className="is-flex is-flex-direction-column is-align-items-center has-text-grey">
                    <p className="md:t-text-sm t-text-xs">See more below</p>
                    <i className="md:t-text-sm t-text-xs bi bi-arrow-down-short"></i>
                </div>

            </div>

            <div className="t-bg-rose-600 lg:t-p-20 t-p-8 md:t-mt-32 t-mt-16 md:t-rounded-[40px] t-rounded-lg">
                <p className="title is-size-2-desktop is-size-3-tablet is-size-4-mobile md:t-leading-relaxed has-text-white">
                    “The function of good software is to make the complex appear to be simple.”
                </p>
                <div className="t-flex t-justify-end">
                    <p className="mt-4 title is-4-desktop is-size-5-tablet is-size-6-mobile has-text-white">(Grady Booch)</p>
                </div>
            </div>

            <span className="title is-1 t-text-gray-50 t-absolute -t-z-10 -t-top-[50px] t-right-[100px]">
                const
            </span>

            <span className="title is-1 t-text-gray-50 t-absolute -t-z-10 t-top-[260px] t-right-[620px] lg:t-inline-block t-hidden">
                {binaryText}
            </span>

            <span className="title is-1 t-text-gray-50 t-absolute -t-z-10 t-top-[450px] t-left-[100px]">
                SOFTWARE
            </span>

            <span className="title is-1 t-text-gray-50 t-absolute -t-z-10 t-top-[500px] t-left-[500px] lg:t-inline-block t-hidden">
                function
            </span>

            <svg
                className="t-absolute -t-z-10 xl:t-top-[250px] xl:t-right-[100px] lg:t-top-[260px] lg:t-right-[100px] t-top-[260px] t-right-[50px]"
                viewBox="0 0 1395 1395" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1394.5 13C1394.5 6.09647 1388.9 0.500032 1382 0.500032L1269.5 0.500032C1262.6 0.500032 1257 6.09647 1257 13C1257 19.9036 1262.6 25.5 1269.5 25.5H1369.5V125.5C1369.5 132.404 1375.1 138 1382 138C1388.9 138 1394.5 132.404 1394.5 125.5L1394.5 13ZM17.8388 1394.84L1390.84 21.8389L1373.16 4.1612L0.161165 1377.16L17.8388 1394.84Z" fill="#FAFAFA" />
            </svg>

            <svg
                className="t-absolute -t-z-10 xl:t-top-[450px] xl:t-right-[100px] lg:t-top-[420px] lg:t-right-[100px] t-top-[360px] t-right-[50px]"
                viewBox="0 0 1395 1395" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1394.5 13C1394.5 6.09647 1388.9 0.500032 1382 0.500032L1269.5 0.500032C1262.6 0.500032 1257 6.09647 1257 13C1257 19.9036 1262.6 25.5 1269.5 25.5H1369.5V125.5C1369.5 132.404 1375.1 138 1382 138C1388.9 138 1394.5 132.404 1394.5 125.5L1394.5 13ZM17.8388 1394.84L1390.84 21.8389L1373.16 4.1612L0.161165 1377.16L17.8388 1394.84Z" fill="#FAFAFA" />
            </svg>

            <svg
                className="t-absolute -t-z-10 xl:t-top-[650px] xl:t-right-[100px] lg:t-top-[580px] lg:t-right-[100px] t-top-[460px] t-right-[50px]"
                viewBox="0 0 1395 1395" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1394.5 13C1394.5 6.09647 1388.9 0.500032 1382 0.500032L1269.5 0.500032C1262.6 0.500032 1257 6.09647 1257 13C1257 19.9036 1262.6 25.5 1269.5 25.5H1369.5V125.5C1369.5 132.404 1375.1 138 1382 138C1388.9 138 1394.5 132.404 1394.5 125.5L1394.5 13ZM17.8388 1394.84L1390.84 21.8389L1373.16 4.1612L0.161165 1377.16L17.8388 1394.84Z" fill="#FAFAFA" />
            </svg>

        </div>
    )
}
