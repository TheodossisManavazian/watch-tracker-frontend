import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState, useEffect} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";


const routes = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Models",
        href: "/watches"
    },
    {
        title: "Contact",
        href: "/contact"
    }
]


export default function MobileNav() {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    return (
        <div ref={ref} className="lg:hidden xl:hidden m-auto z-[100]">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 shadow-4xl right-0 top-[24] p-5 pt-0 bg-primary"
                >
                <ul className="grid gap-2">
                {routes.map((route, idx) => {
                    return (
                    <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                        }} key={route.title} className="w-full p-[0.08rem]">
                        
                        <Link
                        onClick={() => setOpen((prev) => !prev)}
                        className="flex items-center justify-between w-full p-5"
                        to={route.href} >
                        {route.title}
                        </Link>
                    </motion.li>
                    );
                })}
                </ul>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
};