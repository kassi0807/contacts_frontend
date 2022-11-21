import brand from "../assets/logo/logo-white.svg"
import {Link} from "react-router-dom"

export const Navbar = () => 
<header className="fixed-top navbar navbar-dark text-bg-primary">
    <article className="container">
        <section>
            <Link className="navbar-brand"
                to="/">
                <img src={brand} height="24" alt="brand"/>
            </Link>
        </section>
        <section className="d-flex gap-2">
            <Link className="btn btn-outline-light border-0 bi-search"
                to="/contacts/search">
            </Link>
        </section>
    </article>
</header>