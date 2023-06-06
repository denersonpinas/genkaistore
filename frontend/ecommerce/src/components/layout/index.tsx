import { useRouter } from "next/router"
import { Footer } from "../footer"
import { Navbar } from "../navbar"

export function Layout({ children }) {
    const router = useRouter()
    const {pathname} = router

    return (
        <main className="min-h-screen">
            <section className="bg-personWhite">
                <Navbar/>
                {children}
                <Footer isHome={pathname === '/' ? true : false}/>
            </section>
        </main>
    )
}