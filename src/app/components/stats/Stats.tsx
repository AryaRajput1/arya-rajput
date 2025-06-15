'use client';

import React from 'react'
import CountUp from 'react-countup';

type PropTypes = { count: number, label: string, suffix?: string, id:number }

const Stats = ({ count, label, suffix='' }: PropTypes) => {
    return (
        <div className='p-4 flex gap-2 text-white w-65'>
            <span className='text-5xl font-bold text-white'><CountUp end={count} suffix={suffix}/></span>
            <label className='w-2 inline-block font-semibold'>{label}</label>
        </div>
    )
}

export default Stats
