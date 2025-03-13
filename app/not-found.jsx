import Image from "next/image";
import Link from "next/link";



import React from "react";

const NotFound = () => {
    return <>
            <div id="NotFoundOuter">
                <div id="NotFound">
                    <p className="crimson-regular text-medium">404, resource not found sorry</p>
                    <Image
                        src = "/assets/images/logo/logo_2.svg"
                        width={200}
                        height={200}
                        alt="Fleuve-Logo"
                    />
                    <Link
                        href={"/"}
                        className="crimson-regular text-medium simple-link"
                    >
                    <p>Back to the source</p>
                    </Link>
                </div>
            </div>
            
        </>
}

export default NotFound;