import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"
import { Aside } from "../aside"
import { useState } from "react"
import { Menu } from "../menu"

export function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main className="min-h-screen">
            <Aside isOpen={isOpen} setIsOpen={setIsOpen}/>
            <section className="bg-white flex-grow lg:ml-[25%]">
                <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
                {children}
            </section>
        </main>
    )
}