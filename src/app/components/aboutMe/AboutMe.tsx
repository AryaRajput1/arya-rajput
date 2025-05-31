import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutMe = () => {
    return (
        <div id='about' className='flex justify-between text-white py-4 gap-10'>
            <div>
                <Image src="/developer.jpg" width={400} height={600} alt='Ghibli Style Developer Image' />
            </div>
            <div className='flex flex-col gap-6 w-2/3'>
                <h3 className='text-blue-500 font-semibold text-2xl'>Who am i?</h3>
                <h2 className='text-3xl font-bold'>I’m Arya Rajput, a Frontend Developer with 3 years of hands-on experience.</h2>
                <p className='text-sm text-gray-50 border-b-1 pb-10 tracking-wide'>A driven and detail-oriented Developer crafting intuitive and scalable web interfaces. With a strong foundation in modern JavaScript frameworks and a relentless commitment to clean, maintainable code, I’m not just building applications—I’m building user experiences that drive results. I treat personal development with the same discipline I apply to my career. I believe in mastering fundamentals, pushing boundaries, and never settling for mediocrity—because good enough simply isn’t.
                </p>
                <table className="w-full table-auto text-sm">
                    <tbody>
                        <tr className="">
                            <td className="px-4 py-2">
                                <span className="font-medium text-gray-400">Name:</span> Arya Rajput
                            </td>
                            <td className="px-4 py-2">
                                <span className="font-medium text-gray-400">From:</span> Jaspur, Uttrakhand, India
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">
                               <Link href={'tel:+919756902592'}> <span className="font-medium text-gray-400">Phone:</span> +91-9756902592</Link>
                            </td>
                            <td className="px-4 py-2">
                                <Link href={'mailto:rajputarya10@gmail.com'}><span className="font-medium text-gray-400">Email:</span> rajputarya10@gmail.com</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default AboutMe
