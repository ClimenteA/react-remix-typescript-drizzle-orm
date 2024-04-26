import NavBar from "../components/softgata/Navbar"
import Footer from "../components/softgata/Footer"
import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"


export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - Cookie policy" }
    ]
}


export default function CookiePage() {

    const websiteName = "softgata.com"

    return (
        <div>

            <div className="t-flex t-place-content-center">

                <img
                    className="t-h-[480px] t-min-w-full t-object-cover t-absolute"
                    src="/softgata/cookies-basket.jpg" alt="" />

                <div className="t-bg-[#0F2733] t-h-[480px] t-opacity-70 t-min-w-full t-absolute">
                </div>

                <h1 className="t-text-white t-max-w-[900px] t-text-center t-absolute t-mt-48 title is-size-1-desktop is-size-2-tablet is-size-2-mobile">
                    Cookie policy
                </h1>

            </div>

            <NavBar />

            <section className="t-mt-[480px] content container t-text-black lg:t-text-xl t-text-lg t-min-h-screen">
                <div className="mx-4">
                    <section className="content t-mb-48">

                        <strong>Last updated: 2024-04-25</strong>

                        <h3>Introduction</h3>

                        <p>
                            Our website, {websiteName} ("we", "us", or "our"), uses cookies to improve your experience while navigating our website. This policy explains what cookies are, how we use them, the types of cookies we use, how third-parties we may partner with may use cookies on the website, your choices regarding cookies, and further information about cookies.
                        </p>

                        <h3>What are cookies?</h3>

                        <p>
                            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the website or a third-party to recognize you and make your next visit easier and the website more useful to you.
                        </p>

                        <h3>
                            How {websiteName} uses cookies
                        </h3>

                        <p>
                            When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:

                            <ul>
                                <li>
                                    To enable certain functions of the website, including those provided by React Remix (web framework used to create this website)</li>
                                <li>
                                    To provide analytics
                                </li>
                                <li>
                                    To store your preferences
                                </li>
                                <li>
                                    To enable advertisements delivery, including behavioral advertising
                                </li>
                            </ul>

                        </p>

                        <h3>Types of cookies we use</h3>

                        <ul>
                            <li>
                                Essential cookies: We may use essential cookies to authenticate users, prevent fraudulent use of user accounts, and enable necessary functions of the React Remix framework.
                            </li>
                            <li>
                                Performance cookies: These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.
                            </li>
                            <li>
                                Functionality cookies: These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences.
                            </li>
                            <li>
                                Advertising cookies: These cookies record your visit to our website, the pages you have visited, and the links you have followed.
                            </li>
                        </ul>

                        <h3>Your choices regarding cookies</h3>

                        <p>
                            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
                        </p>

                        <h3>More information about cookies</h3>

                        <p>
                            You can learn more about cookies on the following third-party websites:

                            <ul>
                                <li>AllAboutCookies: <Link className="t-text-blue-600" to="http://www.allaboutcookies.org/">http://www.allaboutcookies.org/</Link></li>
                                <li>Network Advertising Initiative: <Link className="t-text-blue-600" to="http://www.networkadvertising.org/">http://www.networkadvertising.org/</Link></li>
                            </ul>
                        </p>

                        <p>For any questions or concerns regarding our cookie policy, please contact us at <span className="t-text-blue-600">contact@softgata.com</span></p>

                    </section>
                </div>
            </section >

            <Footer />
        </div >
    )
}
