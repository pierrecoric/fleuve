"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Slant as Hamburger } from "hamburger-react";
import Menu from "@components/Menu"

const Nav = () => {

    const [isOpen, setOpen] = useState(false)

    //temporary
    const userLoggedIn = true;

    return (
        <>
            <nav id="mainNavOuter">
                <div id="mainNav">
                    {/*Left block with the title and the logo*/}
                    <div id="titleBlock">
                        <div id="titleText" className="crimson-regular">
                            <Link
                                href={"/"}
                                className="simple-link"
                            >
                                <h1 className="mainTitle">Fleuve</h1>
                            </Link>
                            <p className="mainSubTitle">
                                /flœv/ mind-patterning
                            </p>
                        </div>
                    </div>
                    <div id="logoBlock">
                            <Image
                                src = "/assets/images/logo/logo_3.svg"
                                width={45}
                                height={45}
                                alt="Fleuve-Logo"
                                className="rotatingLogo"
                            />
                    </div>
                    <div id="rightControls">
                        {!userLoggedIn &&
                            <button className="navButton lato-regular">
                                sign-in
                            </button>
                        }
                        {userLoggedIn &&
                            <Image
                                src="/assets/images/profile.png"
                                alt="profile picture"
                                className="profilePicture" 
                                width = {50}
                                height = {50}
                            />
                        }
                        <Hamburger toggled={isOpen} 
                            toggle={setOpen}
                            label="Show menu"
                            color="#161624"
                        /> 
                    </div>
                </div>
            </nav>
            {/*Render the menu when the hamburger button is toggled.*/}
            {isOpen && <Menu />}
        </>
    );
}

export default Nav;