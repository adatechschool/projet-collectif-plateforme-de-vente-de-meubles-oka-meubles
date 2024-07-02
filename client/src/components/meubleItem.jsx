import React from 'react'

const MeubleItem = (props) => {
    return (
        <div  style={{ width: '300px', height: '350px' }} className="">
            <img src={props.image} alt="" />
            <h3 className=''>{props.name}</h3>
            <p className=''>€ {props.price}</p>
        </div>
    )
}


export default MeubleItem