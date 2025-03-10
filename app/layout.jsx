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