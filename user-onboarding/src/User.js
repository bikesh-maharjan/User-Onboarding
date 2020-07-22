import React from 'react'

export default function User(data) {
    if (!data) {
        return <h2>Sorry , we're working on it!</h2>
    }

    return (
        <div className='user-container'>
            <h2>{data.name}</h2>
        </div>
    )
}