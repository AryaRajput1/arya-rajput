import React from 'react'

const FloatingText = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <div className={`outlined-text hidden md:text-[100px] lg:text-[160px] md:block text-[200px] font-bold uppercase absolute ${className}`}>
            {children}
        </div>
    )
}

export default FloatingText
