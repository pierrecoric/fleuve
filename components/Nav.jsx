"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {

    const [toggleDropDown, setToggleDropDown] = useState(false);

    const userIsLoggedIn = false;

    return (
        <>
            <nav id="mainNavOuter">

                <div id="mainNav">
                    <div id="titleBlock">
                        <div className="crimson-regular" id="logoBlock">
                            <Image
                                src = "/assets/images/logo/logo_3.svg"
                                width={20}
                                height={20}
                                alt="Fleuve-Logo"
                                display="block"
                            />
                            <div>
                                <h1 className="mainTitle">Fleuve</h1>
                            </div>
                        </div>

                        <p className="mainSubTitle">
                            /flœv/ mind mapping tool
                        </p>
                    </div>

                    {/*Desktop Nav*/}
                    <div id="desktopNav">
                        <div className="lato-regular">
                            <Link
                                href="/"
                                className="navLinks"
                            >
                                about
                            </Link>
                            <Link
                                href="/"
                                className="navLinks"
                            >
                                something
                            </Link>
                            <button
                                className="navButton lato-regular"
                            >
                                sign-in
                            </button>
                        </div>
                    </div>
                    {/*Mobile Nav*/}
                    <div id="mobileNav">
                        lilililililili
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;