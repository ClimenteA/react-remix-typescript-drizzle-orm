import NavBar from "../softgata._index/components/Navbar"
import Footer from "../softgata._index/components/Footer"
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node"
import invariant from "tiny-invariant"



export const meta: MetaFunction = () => {
    return [
        { title: "SOFTGATA - Blog" }
    ]
}


export const loader = async ({ params }: LoaderFunctionArgs) => {
    invariant(params.slug, "Missing slug param")
    const slug = params.slug
    if (!slug) {
        throw new Response("Not Found", { status: 404 })
    }
    return json({ slug })
}


type Component = () => JSX.Element

interface Page {
    title: string
    image: string
    component: Component
}

const slugMapper: { [key: string]: Page } = {
    "how-to-identify-areas-in-your-business-that-can-be-automated": {
        title: "How to identify areas in your business that can be automated",
        image: '/softgata/article-business-automation-identify.jpg',
        component: () => <title>some jsx</title>
    },
    "how-will-an-automated-business-process-benefit-your-company": {
        title: "How will an automated business process benefit your company",
        image: '/softgata/happy-meeting-2.jpg',
        component: () => <title>some jsx</title>
    },
    "what-software-can-you-integrate-in-your-company-to-yield-more-results": {
        title: "What software can you integrate in your company to yield more results",
        image: '/softgata/laptop-charts.jpg',
        component: () => <title>some jsx</title>
    },
    "building-custom-software-vs-integrating-existing-software-in-your-business": {
        title: "Building custom software vs integrating existing software in your business",
        image: '/softgata/olarit.jpg',
        component: () => <title>some jsx</title>
    },
    "top-technologies-which-you-can-use-to-create-the-next-gen-saas": {
        title: "Top technologies which you can use to create the next gen SAAS",
        image: '/softgata/big-monitor-with-code.jpg',
        component: () => <title>some jsx</title>
    },
    "how-to-find-great-talent-for-your-company-and-what-great-talent-looks-for-at-work": {
        title: "How to find great talent for your company and what great talent looks for at work",
        image: '/softgata/casual-interview.jpg',
        component: () => <title>some jsx</title>
    },
}


export default function BlogPage() {

    const { slug } = useLoaderData<typeof loader>()
    const blog = slugMapper[slug]

    return (
        <div>

            <div className="t-flex t-place-content-center">

                <img
                    className="t-h-[480px] t-min-w-full t-object-cover t-absolute"
                    src={blog.image} alt="" />

                <div className="t-bg-[#0F2733] t-h-[480px] t-opacity-70 t-min-w-full t-absolute">
                </div>

                <h1 className="t-text-white t-max-w-[900px] t-text-center t-absolute t-mt-48 title is-size-1-desktop is-size-2-tablet is-size-2-mobile">
                    {blog.title}
                </h1>

            </div>

            <NavBar />

            <section className="t-mt-[480px] content container t-text-black lg:t-text-xl t-text-lg t-min-h-screen">
                <div className="mx-4">
                    <blog.component />
                </div>
            </section >

            <Footer />
        </div >
    )
}
