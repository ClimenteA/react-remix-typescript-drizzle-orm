import NavBar from "../components/softgata/Navbar"
import Footer from "../components/softgata/Footer"
import type { MetaFunction } from "@remix-run/node"


export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - Terms and conditions" }
    ]
}


export default function TOCPage() {

    const websiteName = "softgata.com"
    const companyName = "Climente Alin Ionel PFA"

    return (
        <div>

            <div className="t-flex t-place-content-center">

                <img
                    className="t-h-[480px] t-min-w-full t-object-cover t-absolute"
                    src="/softgata/man-in-costume.jpg" alt="" />

                <div className="t-bg-[#0F2733] t-h-[480px] t-opacity-70 t-min-w-full t-absolute">
                </div>

                <h1 className="t-text-white t-max-w-[900px] t-text-center t-absolute t-mt-48 title is-size-1-desktop is-size-2-tablet is-size-2-mobile">
                    Terms and conditions
                </h1>

            </div>

            <NavBar />

            <section className="t-mt-[480px] content container t-text-black lg:t-text-xl t-text-lg t-min-h-screen">
                <div className="mx-4">
                    <section className="content t-mb-48">

                        <strong>Last updated: 2024-04-25</strong>

                        <h3>Introduction</h3>

                        <p>
                            Welcome to {websiteName}!
                        </p>

                        <p>
                            These terms and conditions outline the rules and regulations for the use of {companyName}'s Website, located at {websiteName}.
                        </p>

                        <p>
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use {websiteName} if you do not agree to take all of the terms and conditions stated on this page.
                        </p>


                        <h3>Cookies</h3>

                        <p>
                            The website uses cookies to enhance user experience. By accessing {websiteName}, you agreed to use cookies in agreement with the {companyName}'s Privacy Policy.
                        </p>

                        <h3>License</h3>
                        <p>
                            Unless otherwise stated, {companyName} and/or its licensors own the intellectual property rights for all material on {websiteName}. All intellectual property rights are reserved. You may access this from {websiteName} for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>

                        <h3>User Representations</h3>

                        <p>By using the Site, you represent and warrant that:</p>

                        <ul>
                            <li>You have the legal capacity and you agree to comply with these Terms and Conditions;</li>
                            <li>You will not use the Site for any illegal or unauthorized purpose;</li>
                            <li>Your use of the Site will not violate any applicable law or regulation.</li>
                        </ul>

                        <h3>Your Privacy</h3>

                        <p>Please read our Privacy Policy (GDPR).</p>


                        <h3>Content Liability</h3>

                        <p>
                            We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website.
                        </p>

                        <h3>
                            Contact Information
                        </h3>

                        <p>
                            For any inquiries, please contact us at the following:
                            <br />
                            {companyName}, Iasi, Romania
                            <br />
                            Email: contact@softgata.com
                        </p>

                    </section>
                </div>
            </section >

            <Footer />
        </div >
    )
}
