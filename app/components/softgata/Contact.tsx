import { Form } from "@remix-run/react"
import { useEffect, useRef } from "react"

export default function Contact({ messageSent = false }) {

    let $form = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (messageSent) $form.current?.reset()
    }, [messageSent])

    return (
        <div className="t-bg-white">
            <div className="container lg:t-py-48 t-py-32">
                <Form ref={$form} method="post" className="box t-py-16 lg:t-px-12 t-px-6 t-bg-gray-50">

                    <h2 className="title is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                        {messageSent ? "Message sent!" : "Let's get in touch!"}
                    </h2>
                    <p className="-t-mt-3 lg:t-text-md t-text-sm">
                        {
                            messageSent ?
                                "Thank you for your message! We will contact you as soon as we can."
                                : "Provide and a short description of the issue you think we can be of help."
                        }</p>

                    {
                        messageSent ? null :
                            <div>
                                <div className="field t-mt-16 t-max-w-[370px]">
                                    <label className="label">Your email</label>
                                    <div className="control">
                                        <input className="input is-dark" name="email" type="email" placeholder="youremail@company.com" />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Your message</label>
                                    <div className="control">
                                        <textarea className="textarea is-dark" name="message" placeholder="Write a short overview of the area you think we can help you."></textarea>
                                    </div>
                                </div>

                                <div className="t-flex t-justify-end">
                                    <button type="submit" className="button t-bg-rose-600 t-text-white is-large is-responsive mt-6">
                                        Send
                                        <i className="ml-2 bi bi-send"></i>
                                    </button>
                                </div>
                            </div>
                    }
                </Form>
            </div>
        </div>
    )
}