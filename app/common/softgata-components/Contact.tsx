import { useFetcher } from "@remix-run/react"

export default function Contact() {

    const fetcher = useFetcher()

    return (
        <div className="t-bg-white">
            <div className="container t-py-48">

                <fetcher.Form method="post" className="box t-py-16 t-px-12 t-bg-gray-50">

                    <h2 className="title is-size-2-desktop is-size-3-tablet is-size-3-mobile">Let's get in touch!</h2>

                    <div className="field t-mt-16 t-max-w-[370px]">
                        <label className="label">Your email</label>
                        <div className="control">
                            <input className="input is-dark is-large is-responsive" type="email" placeholder="youremail@company.com" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Your message</label>
                        <div className="control">
                            <textarea className="textarea is-large is-dark" placeholder="Write a short overview of the area you think we can help you."></textarea>
                        </div>
                    </div>

                    <div className="t-flex t-justify-end">
                        <button type="submit" className="button t-bg-rose-600 t-text-white is-large mt-6">
                            Send
                            <i className="ml-2 bi bi-send"></i>
                        </button>
                    </div>

                </fetcher.Form>

            </div>
        </div>
    )
}