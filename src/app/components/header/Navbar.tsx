'use client';
import { Book, CalendarCheck, Clock9, House, Menu, Presentation, X } from 'lucide-react'
import Link from 'next/link'
import { ReactNode, useState } from 'react'

type NavItemsTypes = {
    name: string
    href: string
    icon: ReactNode
}[]
const Navbar = () => {
    const logo = '</>'

    const NAV_ITEMS: NavItemsTypes = [{
        name: 'Home',
        href: '/',
        icon: <House width={20} height={20} />
    }, {
        name: 'About',
        href: '/#about',
        icon: <Book width={20} height={20} />
    },
    {
        name: 'Projects',
        href: '/#projects',
        icon: <Presentation width={20} height={20} />
    },
    {
        name: 'Experience',
        href: '/#experience',
        icon: <CalendarCheck width={20} height={20} />
    },
    {
        name: 'Education',
        href: '/#education',
        icon: <Clock9 width={20} height={20} />
    }]

    const [expandNav, setExpandNav] = useState(false)

    return (<>
        <nav className="max-w-6xl flex justify-between items-center mx-auto p-4 h-20">
            <Link href={'/'} className="logo flex gap-2 h-full items-center">
                <span className='text-md font-bold text-white'>{logo}</span>
                <span className='text-white text-3xl font-semibold'>Developer</span>
            </Link>
            <button onClick={() => setExpandNav(prev => !prev)} className='block md:hidden text-white cursor-pointer'>{expandNav ? <X /> : <Menu />}</button>
            {/* for big screens */}
            <ul className={` text-white gap-6 flex-row md:flex hidden`}>
                {
                    NAV_ITEMS.map((navItem) => {
                        return <li key={navItem.name} >
                            <Link href={navItem.href} className='flex justify-center md:justify-between items-center p-1 hover:bg-black/50 rounded gap-2 px-2'>
                                <span className='font-normal'>{navItem.icon}</span>
                                <span>{navItem.name}</span>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </nav>
        {expandNav && <ul className={`md:hidden bg-black/50 p-4 gap-4 text-white z-10 flex justify-center items-center flex-col `}>
            {
                NAV_ITEMS.map((navItem) => {
                    return <li key={navItem.name} >
                        <Link href={navItem.href} className='flex justify-center md:justify-between items-center p-1 hover:bg-black/50 rounded gap-2 px-2'>
                            <span className='font-normal'>{navItem.icon}</span>
                            <span>{navItem.name}</span>
                        </Link>
                    </li>
                })
            }
        </ul>}
    </>
    )
}

export default Navbar
