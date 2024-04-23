import { useState } from "react"
import { Link } from "@remix-run/react"


export default function NavBar() {
    const [navbarOpen, setNavbar] = useState<boolean>(false)
    const toggleNavbar = () => setNavbar(!navbarOpen)
    const closeNavbar = () => setNavbar(false)

    return (
        <div className="pt-6 is-flex is-justify-content-center t-select-none">

            <nav className="navbar t-w-9/12 t-bg-gray-100 t-rounded-full px-5" role="navigation" aria-label="main navigation">

                <div className="navbar-brand">

                    <Link to={"/softgata"} className="navbar-item has-text-weight-bold">
                        SOFT<span className="t-text-emerald-500">GATA</span>
                    </Link>

                    <a
                        role="button"
                        onClick={toggleNavbar}
                        className={navbarOpen ? "navbar-burger t-text-emerald-900 is-active" : "navbar-burger t-text-emerald-900"}
                        aria-label="menu"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>


                <div
                    className={navbarOpen ? "navbar-menu is-active t-absolute t-right-[40px] has-text-centered" : "navbar-menu"}>

                    <div className="navbar-end has-text-weight-bold">
                        <div className="navbar-item">
                            <Link to={"/softgata#services"} onClick={closeNavbar} className="py-2">Services</Link>
                        </div>
                        <div className="navbar-item">
                            <Link to={"/softgata/about"} onClick={closeNavbar} className="py-2">About us</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}