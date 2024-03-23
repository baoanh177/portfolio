import Provider from "~/Providers/ThemeProvider";
import "./globals.css"
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";

export const metadata = {
    title: "Bao Anh's Portfolio",
    description: "Generated by create next app"
}

async function RootLayout({ children }) {
    const session = await getServerSession()

    return <>
        <html>
            <body className="bg-white dark:bg-black dark:text-white">
                <SessionProvider session={session}>
                    <Provider>
                        {children}
                    </Provider>
                </SessionProvider>
            </body>
        </html>
    </>
}

export default RootLayout;