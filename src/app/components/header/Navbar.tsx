import { Book, House } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

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
        icon: <Book  width={20} height={20} />
    }]

    return (
        <nav className="max-w-6xl flex justify-between items-center m-auto flex-col md:flex-row">
            <Link href={'/'} className="logo flex gap-2 h-full items-center">
                <span className='text-md font-bold text-white'>{logo}</span>
                <span className='text-white text-xl font-semibold'>Developer</span>
            </Link>
            <ul className='h-full flex text-white md:gap-6 flex-col md:flex-row mt-2 md:mt-0'>
                {
                    NAV_ITEMS.map((navItem) => {
                        return <li key={navItem.name} >
                            <Link href={navItem.href} className='flex justify-between items-center p-1 hover:bg-black gap-2'>
                                <span className='font-normal'>{navItem.icon}</span>
                                <span>{navItem.name}</span>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar
