import { Footer } from "../footer"
import { Navbar } from "../navbar"

export function Layout({ children }) {

    return (
        <main className="min-h-screen">
            <section className="bg-personWhite">
                <Navbar/>
                {children}
                <Footer/>
            </section>
        </main>
    )
}