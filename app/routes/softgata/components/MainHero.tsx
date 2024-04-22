

export default function MainHero() {

    const binaryText = "{01010111}"

    return (
        <div className="t-relative container">

            <div className="t-relative">

                <svg
                    id="pacman"
                    className="t-absolute -t-z-10 -t-top-10 t-left-20"
                    width="360" height="360"
                    viewBox="0 0 363 363" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M363 181.5C363 145.163 352.093 109.662 331.691 79.5936C311.289 49.5248 282.331 26.272 248.566 12.8452C214.8 -0.581622 177.782 -3.56433 142.303 4.28315C106.823 12.1306 74.5158 30.447 49.5626 56.8614C24.6095 83.2758 8.15933 116.572 2.34146 152.44C-3.47641 188.309 1.60587 225.097 16.9305 258.045C32.255 290.992 57.1164 318.582 88.2964 337.241C119.476 355.901 155.54 364.772 191.818 362.706L181.5 181.5H363Z" fill="#FAFAFA" />
                </svg>

                <h1 className="title is-1 has-text-centered t-leading-relaxed t-mt-28 t-text-gray-900">
                    We'll help you bring <span className="t-text-rose-600">more value</span> <br /> to your customers.
                </h1>
                <p className="has-text-centered t-text-lg t-leading-relaxed">
                    Enhance your business by integrating custom software solutions.
                    <br />
                    Save time, money, resources, increase accuracy of your business processes and maybe 10x your ROI.
                </p>
            </div>

            <div className="t-mt-28 is-flex is-flex-direction-column is-align-items-center">

                <button type="button" className="button is-large has-text-weight-bold mb-4 is-primary t-text-white">
                    Let's talk, it's free
                    <i className="ml-2 bi bi-arrow-right"></i>
                </button>

                <div className="is-flex is-flex-direction-column is-align-items-center has-text-grey">
                    <p>See more below</p>
                    <i className="bi bi-arrow-down-short"></i>
                </div>

            </div>

            <div className="t-bg-rose-600 t-p-20 t-mt-32 t-rounded-[40px]">
                <p className="title is-2 t-leading-relaxed  has-text-white">
                    “The function of good software is to make the complex appear to be simple.”
                </p>
                <p className="mt-4 title is-4 has-text-white t-float-right">(Grady Booch)</p>
            </div>

            <span className="title is-1 t-text-gray-50 t-absolute -t-z-10 -t-top-[50px] t-right-[100px]">
                const
            </span>

            <span className="title is-1 t-text-gray-50 t-absolute -t-z-10 t-top-[260px] t-right-[620px]">
                {binaryText}
            </span>

            <span className="title is-1 t-text-gray-50 t-absolute -t-z-10 t-top-[450px] t-left-[100px]">
                SOFTWARE
            </span>

            <span className="title is-1 t-text-gray-50 t-absolute -t-z-10 t-top-[500px] t-left-[500px]">
                function
            </span>

            <svg
                className="t-absolute -t-z-10 t-top-[250px] t-right-[100px]"
                viewBox="0 0 1395 1395" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1394.5 13C1394.5 6.09647 1388.9 0.500032 1382 0.500032L1269.5 0.500032C1262.6 0.500032 1257 6.09647 1257 13C1257 19.9036 1262.6 25.5 1269.5 25.5H1369.5V125.5C1369.5 132.404 1375.1 138 1382 138C1388.9 138 1394.5 132.404 1394.5 125.5L1394.5 13ZM17.8388 1394.84L1390.84 21.8389L1373.16 4.1612L0.161165 1377.16L17.8388 1394.84Z" fill="#FAFAFA" />
            </svg>


            <svg
                className="t-absolute -t-z-10 t-top-[450px] t-right-[100px]"
                viewBox="0 0 1395 1395" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1394.5 13C1394.5 6.09647 1388.9 0.500032 1382 0.500032L1269.5 0.500032C1262.6 0.500032 1257 6.09647 1257 13C1257 19.9036 1262.6 25.5 1269.5 25.5H1369.5V125.5C1369.5 132.404 1375.1 138 1382 138C1388.9 138 1394.5 132.404 1394.5 125.5L1394.5 13ZM17.8388 1394.84L1390.84 21.8389L1373.16 4.1612L0.161165 1377.16L17.8388 1394.84Z" fill="#FAFAFA" />
            </svg>

            <svg
                className="t-absolute -t-z-10 t-top-[650px] t-right-[100px]"
                viewBox="0 0 1395 1395" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1394.5 13C1394.5 6.09647 1388.9 0.500032 1382 0.500032L1269.5 0.500032C1262.6 0.500032 1257 6.09647 1257 13C1257 19.9036 1262.6 25.5 1269.5 25.5H1369.5V125.5C1369.5 132.404 1375.1 138 1382 138C1388.9 138 1394.5 132.404 1394.5 125.5L1394.5 13ZM17.8388 1394.84L1390.84 21.8389L1373.16 4.1612L0.161165 1377.16L17.8388 1394.84Z" fill="#FAFAFA" />
            </svg>

        </div>
    )
}
