import { getSortedRoutes } from 'next/dist/next-server/lib/router/utils'
import Link from 'next/link'
const Navbar = () => {

    const routes = [
        {link: "/", name: "home"},
        {link: "/work", name: "work"},
        {link: "/about", name: "about"},
        {link: "/contact", name: "contact"},
    ]

    return (
        <header className="w-full absolute top-0 left-0 overflow-hidden py-6">
            <nav className="flex px-4 items-center justify-between max-w-screen-2xl mx-auto">
                <div className="text-2xl">Logo</div>
                <ul className="flex space-x-6 items-center text-xl font-main capitalize">
                   {
                       routes.map((route ,index) => 
                       <li key={`${route.name}-${index}`}>
                            <Link href={route.link}><a>{route.name}</a></Link>
                        </li>
                       )
                   }
                </ul>
            </nav>

        </header>
    )
}

export default Navbar
