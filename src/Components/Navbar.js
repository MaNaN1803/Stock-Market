import { Component } from "react";
import logoimg from "./mainlogo.png";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-container">
            <ul className="nav-menu1" style={{ alignItems: "center" }}>
              <div
                className="logo"
                style={{ display: "flex", alignItems: "centre" }}
              >
                <img src={logoimg} alt="" />
              </div>
            </ul>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="/Homepage" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#promise" className="nav-link">
                  Promising Stocks
                </a>
              </li>
              <li className="nav-item">
                <a href="#simu" className="nav-link">
                  Simulator
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-secondary bg-dark dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Search Here
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#simu">
                  Apple
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#simu">
                  Google
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#simu">
                  Netflix
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#simu">
                  Tesla
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
