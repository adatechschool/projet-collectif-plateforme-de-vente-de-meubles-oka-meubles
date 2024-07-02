import React from "react";

const Items = () => {
    state = {
        post:{}
    }
    
    function getItems() {
        fetch("http://localhost:3001/api/items")
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            this.setState({post : result})
            console.log(result);
        })
    }
    
    getItems();
    

    return (
        <div className= "">
            <h1></h1>

        </div>
    )
}


export default Items