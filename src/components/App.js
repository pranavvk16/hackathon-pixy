import axios from 'axios';
import React from 'react';
import Search from './Search'
import Imagelist from './Imagelist'
class App extends React.Component {

    state = { images: [] }//it hold all the response from api

     searchImage = async  (querry)=>{
        const response = await axios.get(`https://pixabay.com/api/?key=22789382-96f88f190658506f567d71687&q=${querry}&image_type=photo`);
        this.setState({ images: response.data.hits })
        // console.log(this.state.images);
        //an api call to get the image
    }
    render() {//getting serach tearm from user
        return (<><Search searchImage={this.searchImage} />
        <center><h4 style={{marginTop:'7px'}}>Search  Results </h4>
        We have found {(this.state.images.length)} matches</center>
        <Imagelist images={this.state.images}/>
         
        </>)
    }

}
export default App;