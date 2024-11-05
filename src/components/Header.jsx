import Link from "next/link";
import { HeaderLinks } from "../Data";
import ScriptLoader from "./ScriptLoader";
import {Logo} from "../Data"
const Header = () => {
  return (
    <>

    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          {Logo}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            {HeaderLinks && HeaderLinks.length > 0
              ? HeaderLinks.map((link, index) => (
                  <li key={index} className="nav-item active">
                    {index === 0 ? (
                      <Link href="/" className="nav-link">
                        {link}
                      </Link>
                    ) : (
                      <Link
                        href={`/${link.toLowerCase()}`}
                        className="nav-link"
                      >
                        {link}
                      </Link>
                    )}
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </nav>
    <ScriptLoader />
  </>
  );
};

export default Header;
