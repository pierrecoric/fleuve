"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Slant as Hamburger } from 'hamburger-react'

const Nav = () => {

    const [isOpen, setOpen] = useState(false)

    //temporary
    const userIsLoggedIn = false;

    return (
        <>
            <nav id="mainNavOuter">
                <div id="mainNav">
                    {/*Left block with the title and the logo*/}
                    <div id="titleBlock">
                        <div id="logoBlock">
                            <Image
                                src = "/assets/images/logo/logo_3.svg"
                                width={55}
                                height={55}
                                alt="Fleuve-Logo"
                            />
                        </div>
                        <div id="titleText" className="crimson-regular">
                            <h1 className="mainTitle">Fleuve</h1>
                            <p className="mainSubTitle">
                                /flœv/ mind-patterning
                            </p>
                        </div>
                    </div>

                    {/*Desktop Nav*/}
                    <div id="rightControls">
                        <button
                            className="navButton lato-regular"
                        >
                            sign-in
                        </button>
                            <Hamburger toggled={isOpen} 
                                toggle={setOpen}
                                label="Show menu"
                                color="#161624"
                            />
                    </div>
                </div>
            </nav>
            {isOpen? <div>open</div> : <div>close</div>}
        </>
    );
}

export default Nav;