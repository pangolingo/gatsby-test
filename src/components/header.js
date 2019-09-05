import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    id="header"
  >
      {/* from MobilityForAll */}
      <div className="header">
        <div className="header__bg"></div>
        <div className="navigation header__navigation">
          <a href="/en-us/" className="navigation__logo">
            <div role="img" aria-label="Toyota IOC IPC logos" className="navigation__logo-img"></div>
          </a>
          <button type="button" aria-controls="navigation" aria-label="Click to go to main navigation." className="hamburger navigation__hamburger">
            <div className="hamburger__box">
              <div className="hamburger__inner"></div>
            </div>
          </button>
          <div className="navigation__main main-navigation">
            <div className="main-navigation__wrap">
              <nav aria-label="Main" className="main-navigation__nav">
                <ul className="main-navigation__list list-reset">
                  <li className="main-navigation__list-item">
                    <a href="#mobility-solutions" data-analytics-type="header" data-analytics-value="mobility-solutions" className="main-navigation__link">Mobility Solutions</a>
                  </li>
                  <li className="main-navigation__list-item">
                    <a href="#impossible-stories" data-analytics-type="header" data-analytics-value="impossible--stories" className="main-navigation__link">Impossible  Stories</a>
                  </li>
                  <li className="main-navigation__list-item">
                    <a href="#mobility-projects" data-analytics-type="header" data-analytics-value="mobility-projects" className="main-navigation__link">Mobility Projects</a>
                  </li>
                </ul>
              </nav>
              <button type="button" aria-label="Click to go to language selector." className="main-navigation__language">English</button>
            </div>
          </div>
          <div className="languages-helper"><button type="button" aria-label="Click to go to language selector." className="languages-navigation__desktop-control">English</button></div>
        </div>
      </div>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
