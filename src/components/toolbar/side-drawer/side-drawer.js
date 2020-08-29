import React from 'react';
import './side-drawer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faHome,
    faUser,
    faCog,
    faQuestionCircle,
    faUserCircle,
    faChevronRight,
    faGlobe
} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


const SideDrawer = ({show}) => {

    let drawerclasses = 'side-drawer';
    if (show) {
        drawerclasses = 'side-drawer open';
    }

    return (
        <nav className={drawerclasses}>
            <div className="header-side">
                <Link to="./sign-in">
                    <span className="icon-user"><FontAwesomeIcon icon={faUserCircle}/></span>
                    <span className="text-header">Hello, Sign in</span>
                </Link>
            </div>
            <div className="body">
                <div className="body-side">
                    {/*<p>*/}
                    {/*    SHOP BY CATEGORY*/}
                    {/*</p>*/}
                    <ul>
                        <li>
                            <p>SHOP BY CATEGORY</p>
                        </li>
                        <li>
                            <Link to="./home">
                                <span className="icon1">< FontAwesomeIcon className="fa" icon={faHome}/></span>
                                <span className="title1">Home</span>
                                {/*<span style={{marginLeft: 150}}><FontAwesomeIcon icon={faChevronRight}/></span>*/}
                            </Link>
                        </li>
                        <li>
                            <a href="/">
                                <span className="icon1">< FontAwesomeIcon className="fa" icon={faUser}/></span>
                                <span className="title1">Users</span>
                                <span style={{marginLeft: 153}}><FontAwesomeIcon icon={faChevronRight}/></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="icon1">< FontAwesomeIcon className="fa" icon={faCog}/></span>
                                <span className="title1">Settings</span>
                                <span style={{marginLeft: 136}}><FontAwesomeIcon icon={faChevronRight}/></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="icon1">< FontAwesomeIcon className="fa"
                                                                          icon={faQuestionCircle}/></span>
                                <span className="title1">Help</span>
                                <span style={{marginLeft: 158}}><FontAwesomeIcon icon={faChevronRight}/></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-side">
                    <p>
                        HELP & SETTINGS
                    </p>
                    <ul>
                        <li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>Your Account</a>
                        </li>
                        <li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>
                                <span><FontAwesomeIcon icon={faGlobe}/></span>
                                <span className="text-globe">English</span>
                            </a>
                        </li>
                        <li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>

                                <span>United States</span>
                            </a>
                        </li>
                        <li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>
                                <span> Help </span>
                            </a>
                        </li>
                        <li>
                            <Link to="./sign-in"><span className="lii">Sign In</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default SideDrawer;