import { useState } from "react"



export default function NavBar() {
    const [navbarOpen, setNavbar] = useState<boolean>(false)
    const [lang, setLang] = useState<boolean>(true)
    const toggleLang = () => setLang(!lang)
    const toggleNavbar = () => setNavbar(!navbarOpen)
    const closeNavbar = () => setNavbar(false)

    return (
        <div className="mt-6 is-flex is-justify-content-center">

            <nav className="navbar t-w-9/12 t-bg-gray-100 t-rounded-full px-5" role="navigation" aria-label="main navigation">

                <div className="navbar-brand">
                    <a className="navbar-item has-text-weight-bold">
                        SOFT<span className="t-text-emerald-500">GATA</span>
                    </a>

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
                            <a onClick={closeNavbar} className="py-2" href="#">Services</a>
                        </div>
                        <div className="navbar-item">
                            <a onClick={closeNavbar} className="py-2" href="#">About us</a>
                        </div>
                        <div className="navbar-item">
                            <a onClick={() => {
                                closeNavbar()
                                toggleLang()
                            }} className="py-2" href="#">
                                <span className={lang ? "t-text-emerald-500" : ""}> EN </span>
                                |
                                <span className={lang ? "" : "t-text-emerald-500"}> RO </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}