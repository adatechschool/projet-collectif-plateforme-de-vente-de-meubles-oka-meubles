import React, { useEffect, useState } from 'react';

const MeubleItem = (props) => {
    const [showDiv, setShowDiv] = useState(false);
    const [showDiv2, setShowDiv2] = useState(true);
    
    return (
        <div  style={{ width: '300px', height: '350px' }} className=""
            onClick={() => setShowDiv(!showDiv, !showDiv2)}
        >
            <div className=''  style = {{display: showDiv ? "none" : "block" }}>
                <img src={props.image} alt="" />
                <h3 className=''>{props.name}</h3>
                <p className=''>€ {props.price}</p>
            </div>
            <div className='' style = {{display: showDiv ? "block" : "none" }}>
                <p className=''>{props.description}</p>
                <p className=''>Dimensions : {props.dimension}</p>
            </div>
        </div>
    )
}
                
    



export default MeubleItem