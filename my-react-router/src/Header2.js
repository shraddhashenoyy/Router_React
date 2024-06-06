import React from "react";

const Header2 =()=>{
    const newStyle={
        color:"white",
        backgroundColor:"Red",
        padding:"10px",
    };
    return(
        <>
            <h1 style={newStyle}>Refering those styling information</h1>
            <p>where myStyle is the object here.</p>
        </>
    );
}
export default Header2;