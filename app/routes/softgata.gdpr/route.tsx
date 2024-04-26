import NavBar from "../../components/softgata/Navbar"
import Footer from "../../components/softgata/Footer"
import type { MetaFunction } from "@remix-run/node"


export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - GDPR" }
    ]
}


export default function GDPRPage() {

    const websiteName = "softgata.com"

    return (
        <div>

            <div className="t-flex t-place-content-center">

                <img
                    className="t-h-[480px] t-min-w-full t-object-cover t-absolute"
                    src="/softgata/camera-door.jpg" alt="" />

                <div className="t-bg-[#0F2733] t-h-[480px] t-opacity-70 t-min-w-full t-absolute">
                </div>

                <h1 className="t-text-white t-max-w-[900px] t-text-center t-absolute t-mt-48 title is-size-1-desktop is-size-2-tablet is-size-2-mobile">
                    GDPR
                </h1>

            </div>

            <NavBar />

            <section className="t-mt-[480px] content container t-text-black lg:t-text-xl t-text-lg t-min-h-screen">
                <div className="mx-4">
                    <section className="content t-mb-48">


                        <h3>GDPR Compliance Statement</h3>

                        <strong>Last updated: 2024-04-25</strong>

                        <h3>Introduction</h3>

                        <p>
                            {websiteName} ("we", "us", or "our") is committed to complying with the General Data Protection Regulation (GDPR). We respect your privacy and are committed to protecting your personal data. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
                        </p>

                        <h3>The Data We Collect</h3>

                        <p>
                            We collect the following types of personal data:
                            <ul>
                                <li>
                                    Contact Information: When you fill out the contact form on our website, we collect your email address and any message you send us.
                                </li>
                                <li>
                                    Usage Data:We may also collect information on how the website is accessed and used ("Usage Data").
                                </li>
                            </ul>
                        </p>

                        <h3>How We Use Your Data</h3>

                        <p>We use the collected data for various purposes:</p>

                        <ul>
                            <li>
                                To provide and maintain our website
                            </li>
                            <li>
                                To notify you about changes to our website
                            </li>
                            <li>
                                To allow you to participate in interactive features of our website when you choose to do so
                            </li>
                            <li>
                                To provide customer support
                            </li>
                            <li>
                                To gather analysis or valuable information so that we can improve our website
                            </li>
                            <li>
                                To monitor the usage of our website
                            </li>
                            <li>
                                To detect, prevent, and address technical issues
                            </li>
                            <li>
                                To contact you for future possible collaboration
                            </li>
                        </ul>

                        <h3>
                            Your Data Protection Rights Under GDPR
                        </h3>

                        <ul>
                            <li>The right to access, update or delete the information we have on you.</li>
                            <li>The right of rectification.</li>
                            <li>The right to object.</li>
                            <li>The right of restriction.</li>
                            <li>The right to data portability.</li>
                            <li>The right to withdraw consent.</li>
                        </ul>

                        <p>Please note that we may ask you to verify your identity before responding to such requests.</p>

                        <h3>
                            Security of Data
                        </h3>

                        <p>
                            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
                        </p>

                        <h3>Contact Us</h3>

                        <p>
                            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at contact@softgata.com.
                        </p>

                        <p className="t-mt-16">Climente Alin Ionel PFA <br />Iasi, Romania</p>

                    </section>
                </div>
            </section >

            <Footer />
        </div >
    )
}
