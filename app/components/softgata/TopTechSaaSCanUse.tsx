import BookACall from "./BookACall"


export default function TopTechSaaSCanUse() {
    return (
        <section className="content container t-mb-48">

            <h1>Intro</h1>


            <p>
                There are a multitude of programming languages, packages, and web frameworks available for creating web applications.
                Here's why we primarily choose JavaScript with TypeScript for web applications and opt for Python and GoLang in certain edge cases.
            </p>

            <h3>TypeScript and Remix</h3>

            <p>
                By using JavaScript with TypeScript, we ensure type safety and avoid common runtime errors.
                Additionally, despite requiring more code, it is easier to maintain.
                The plethora of npm packages allows us to move quickly by integrating them into existing applications.
            </p>

            <p>
                Our default go-to stack is Remix (React)/TypeScript/Prisma ORM; it's perfect for building fast and reliable web applications.
                For instance, this website is built with React and Remix (pretty nice, isn't it?).
                We chose Remix because the developers didn't reinvent the wheel. Remix is essentially React plus React Router—a 10+ year-old battle-tested React package—on the server, with some minor compilation steps to separate server components from client components.
                Moreover, Remix is heavily used at Shopify for real user-facing e-commerce websites, which guarantees quality.
            </p>

            <h3>Python and FastAPI</h3>

            <p>
                When dealing with large amounts of complex data and AI/ML tasks, Python is invaluable. The available packages are well-maintained and performant, as they are built in C/C++/Rust, making data handling quite efficient (e.g., pandas, polars, numpy, etc.).
                Python is also extremely useful for creating REST APIs. With FastAPI as a web framework, you get Swagger documentation, rapid validation due to Pydantic (whose core is built in Rust), and an improved developer experience thanks to typing.
            </p>

            <p>
                If the web application is heavily data/AI/ML-oriented, building it solely with Python is sensible.
                Jinja, combined with Alpine.js or HTMX, can be used to create a dynamic user interface.
            </p>

            <h3>GoLang and Fiber</h3>

            <p>
                When performance is critical, choosing Go is the best decision one can make.
                Designed from the ground up to utilize multi-core CPUs and stripped of all unnecessary fluff, Go is a simple, fast, and powerful programming language. It can be paired with the GoFiber web framework (our choice) to create performant, resource-efficient web applications.
                It's also excellent for building CLI applications due to its ability to create cross-platform executables.
            </p>

            <p>
                Go is our default choice for creating CLIs.
                We recommend creating full-stack web applications with GoFiber, Alpine.js, and HTMX when aiming to reduce server costs.
            </p>

            <h3>Docker and Docker Compose</h3>

            <p>
                Deploying with Docker and Docker Compose is straightforward. With just one command, the web application goes live.
                We are quite conservative regarding cloud usage—a simple virtual machine suffices in 80% of cases.
                Opting for a managed database is the wisest decision when we have critical data to store.
                There is an abundance of managed PostgreSQL providers (such as Azure, AWS, DigitalOcean, Akamai, etc.) to choose from.
            </p>

            <h3>Figma for Design</h3>

            <p>
                We mustn't overlook Figma.
                Figma is incredibly convenient for website design.
                It requires no installation, boasts excellent community-created plugins, and is user-friendly (even for non-designers).
                This website was designed using Figma.
            </p>

            <h1 className="t-pt-12">Conclusion</h1>

            <p>
                The technologies outlined above are the ones we use to create web applications and websites. They are fundamental, popular, and time-tested stacks. The only thing missing is you, bringing an idea or a challenge that you believe we can solve.
            </p>


            <div className="t-pt-16">
                <BookACall />
            </div>

        </section>

    )
}