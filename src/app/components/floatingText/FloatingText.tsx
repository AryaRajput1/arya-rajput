import React from 'react'

const FloatingText = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <div className={`outlined-text text-[200px] font-bold uppercase absolute ${className}`}>
            {children}
        </div>
    )
}

export default FloatingText
