import React from "react";
import Link from "next/link";

const Menu = () => {
    const userLoggedIn = true;
    return(<>
        <div id="menu">
            {userLoggedIn &&
                <Link
                className="simple-link lato-regular menu-link"
                href="/"
                >
                    my profile
                </Link>
            }
            {userLoggedIn &&
                <Link
                className="simple-link lato-regular menu-link"
                href="/"
                >
                    my trees
                </Link>
            }
            <Link
                className="simple-link lato-regular menu-link"
                href="/"
            >
                navigate trees
            </Link>
            <Link
                className="simple-link lato-regular menu-link"
                href="/"
            >
                tutorial
            </Link>
            <Link
                className="simple-link lato-regular menu-link"
                href="/"
            >
                about Fleuve
            </Link>
            <button
                className="menuButton lato-regular menu-link"
            >
                donate
            </button>
            {userLoggedIn &&
                <button className="menuButton lato-regular menu-link">
                    sign-out
                </button>
            }
        </div>
    </>);
}

export default Menu;