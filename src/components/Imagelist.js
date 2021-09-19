import React from 'react';


const Imagelist = (props) => {

console.log(props.images);
    const images = props.images.map((image) => {

        return (<a href={image.webformatURL}><img key={image.id} style={{ width: '400px', height: '251px', margin: '20px' }} src={image.webformatURL} alt="img" /></a>)
    })

    return (
        <center>{images}
        </center>)
}

export default Imagelist;