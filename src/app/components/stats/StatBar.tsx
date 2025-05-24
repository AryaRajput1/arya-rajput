import React from 'react'
import Stats from './Stats'

const StatBar = () => {
    const stats = [{
        id: 1,
        count: 12,
        suffix: '+',
        label: 'Projects Completed'
    },{
        id: 2,
        count: 3,
        label: 'Years Experience'
    },{
        id: 3,
        count: 2000,
        suffix: '+',
        label: 'Code Commits'
    },{
        id: 4,
        count: 30,
        suffix: '+',
        label: 'Successfull Prduction'
    }]
    return (
        <div className='flex gap-3 justify-between'>
            {
                stats.map((stat) => {
                    return <Stats {...stat} key={stat.id} />
                })
            }

        </div>
    )
}

export default StatBar
