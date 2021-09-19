import React from 'react';


const Imagelist =(props)=>{


   const images= props.images.map((image)=>{
    
        return (<img style={{width:'400px',height:'251px' ,margin:'20px'}}src={image.webformatURL} alt="img"/>)
    })

    return(
    <center>{images}
        </center>)
}

export default Imagelist;