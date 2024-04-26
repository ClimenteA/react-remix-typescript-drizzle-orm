import NavBar from "../components/softgata/Navbar"
import Footer from "../components/softgata/Footer"
import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"


export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - About us" },
        { name: "description", content: "SOFTGATA - A few words about us" },
    ]
}


export default function SoftgataAbout() {

    return (
        <div>

            <div className="t-flex t-place-content-center">

                <img
                    className="t-h-[480px] t-min-w-full t-object-cover t-absolute"
                    src='/softgata/article-business-automation-identify.jpg' alt="" />

                <div className="t-bg-[#0F2733] t-h-[480px] t-opacity-50 t-min-w-full t-absolute">
                </div>

                <h1 className="t-text-white t-absolute t-mt-48 title is-size-1-desktop is-size-2-tablet is-size-2-mobile">About us</h1>

            </div>

            <NavBar />

            <section className="t-mt-[480px] content container t-text-black lg:t-text-xl t-text-lg t-min-h-screen">

                <div className="mx-4">

                    <h1 className="title is-size-1-desktop is-size-2-tablet is-size-2-mobile">Hi there 👋</h1>

                    <div className="columns">

                        <div className="column is-two-thirds">
                            <p>
                                I am Alin Climente and I reprezent softgata.com.
                                I have been <strong>making applications since 2017</strong>.
                                Depending on the size and complexity of the project, we can increase the team from 1 to many.
                            </p>

                            <p>
                                I started my journey in the software development field by automating some menial tasks assigned to me at my first office job.
                                With a background in engineering (mechanics/robotics) my first instinct is to find the easiest way to do a job.
                                Some might say I'm lazy, but <strong>why work hard when you can work smart</strong>.
                                So, I automated myself out of that job by building some smart applications.
                                Since then, I'm full time on building end to end web applications (Python, Javascript, Typescript, Go).
                            </p>

                            <p>
                                If you decide to
                                <Link to={"/softgata/contact"} className="t-text-blue-600">
                                    {" "}send us a message{" "}
                                </Link>
                                I personally will respond and make sure to help you in the best way I can.
                                Remember, it costs nothing to see if we can help each other out.
                            </p>

                            <p>
                                On this page you will see an image with 2 people - the one showing his teeth is me.
                                An the lady, is my devoted wife (an business advisor I might say.).
                            </p>

                            <p>
                                So, if you have some new website/saas idea you want to test, some menial digital tasks that you think/are unsure can be automated, some data to move around feel free to
                                <Link to={"/softgata/contact"} className="t-text-blue-600">
                                    {" "}drop a message{" "}
                                </Link>.
                            </p>

                        </div>

                        <div className="column t-flex t-justify-center">
                            <img className="t-rounded-xl t-object-cover t-h-[600px] t-w-[400px]" src="/softgata/aboutus.jpg" alt="" />
                        </div>

                    </div>

                </div>

                <div className="mt-6 mx-4">
                    <p>Legal</p>
                    <ul>
                        <li>CLIMENTE ALIN IONEL PFA</li>
                        <li>CIF: (RO)43000098</li>
                        <li>Nr. înmatriculare: F22/1029/2020</li>
                        <li>EUID: ROONRC.F22/1029/2020</li>
                        <li>Location: Iasi, Romania</li>
                    </ul>
                </div>

            </section >

            <Footer />
        </div >
    )
}

