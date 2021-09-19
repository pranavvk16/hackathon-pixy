import React from 'react';


const Imagelist = (props) => {
// map through all of the images object to display images seperatly
console.log(props.images);
    const images = props.images.map((image) => {

        return (<a className="imagelist" key={image.id} href={image.webformatURL}><img  style={{ width: '400px', height: '251px', margin: '20px' }} src={image.webformatURL} alt="img" /></a>)
    })

    return (
        <center className="imagelist-center">{images}
        </center>)
}

export default Imagelist;