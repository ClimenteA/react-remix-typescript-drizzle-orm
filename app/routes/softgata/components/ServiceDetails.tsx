

export default function ServiceDetails() {
    return (
        <div className="t-bg-gray-50 t-mt-20 t-shadow-sm p-6 t-rounded-[40px] t-bg-[url('/public/softgata/future-robot.jpg')] t-bg-contain t-bg-right t-bg-no-repeat">


            <div className="t-flex t-flex-col t-gap-24 my-6 t-min-w-[600px]">

                <div>
                    <h2 className="title is-3">
                        <i className="mr-4 bi bi-arrow-right"></i>
                        Business Automation
                    </h2>
                    <p className="t-max-w-[700px] t-bg-gray-50 t-bg-opacity-50 t-rounded-md p-2">
                        Any repeatable, “robotic” and long term business process slows down your operations and your revenue.
                        No matter the domain of your business if it involves doing work on a computer
                        some of the tasks can be automated.
                    </p>
                </div>

                <div>
                    <h2 className="title is-3">
                        <i className="mr-4 bi bi-arrow-right"></i>
                        SAAS Development
                    </h2>
                    <p className="t-max-w-[700px] t-bg-gray-50 t-bg-opacity-50 t-rounded-md p-2">
                        We can execute custom web applications in the following technologies: Python with
                        Django, FastAPI, Flask, Typescript with React and Remix.run, MongoDb, PostgresDB,
                        Go with GoFiber, AI integrations, external API integrations - any CRUD data oriented web application.
                    </p>
                </div>

                <div>
                    <h2 className="title is-3">
                        <i className="mr-4 bi bi-arrow-right"></i>
                        App Integrations
                    </h2>
                    <p className="t-max-w-[700px] t-bg-gray-50 t-bg-opacity-50 t-rounded-md p-2">
                        There is an tremendous amount of software already built.
                        Each one of them with its pros and cons. Before embarking in creating custom software solutions
                        is wise to investigate if existing solutions can be implemented in a business process. We can help you identify them.
                    </p>
                </div>

            </div>

        </div>
    )
}