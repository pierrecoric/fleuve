import "@styles/global.css"
import Nav from "@components/Nav";



export const metadata = {
    title: "Fleuve",
    description: "Mind mapping tool: A body of water that reaches the sea"
}

const RootLayout = ({ children }) => {
    return (
        <>
            <html lang="en">
                <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/assets/images/logo/logo_4.svg" sizes="any" />
                </head>
                <body>
                    <main>
                        <Nav/>
                        {children}
                    </main>
                </body>
            </html>
        </>
    );
}

export default RootLayout;