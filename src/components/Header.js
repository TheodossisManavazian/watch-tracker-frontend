import { useResolvedPath, useMatch, Link } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function Header(){
    return (
        <header className="w-full h-auto bg-primary sticky top-0 left-0 z-10">
            <nav className="m-auto h-24 p-3 flex justify-between">
                <Link to="/" className='text-xl sm:text-2xl w-atuo md:max-xl:text-4xl xl:text-4xl font-semibold m-auto bg-gradient-to-r from-text to-secondary text-[RGBA(0,0,0,0)] bg-clip-text'>WATCH <span className='bg-gradient-to-l from-accent-primary-200 to-accent-primary text-[RGBA(0,0,0,0)] bg-clip-text'>TRACKER</span></Link>
                <ul className="hidden lg:flex xl:flex text-xl m-auto gap-3 justify-center">
                    <NavLink to='/watches'>Models</NavLink>
                    <Separator/>
                    <NavLink to='/about'>About</NavLink>
                    <Separator/>
                    <NavLink to='/contact'>Contact</NavLink>
                </ul>
                <MobileNav/>
            </nav>
        </header>
    )
}

function NavLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})


    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props} className="hover:text-accent-secondary">{children}</Link>
        </li>
    )

}

function Separator(){
    return (
        <li>
            |
        </li>
    )
}