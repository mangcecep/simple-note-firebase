import React from 'react'

const Button = ({title, onClick, loading}) => {
    if (loading) {
       return <button className="btn disable"> loading ... </button>
    } else {
        return <button className="btn" onClick={onClick}> {title} </button>
    }
}

export default Button