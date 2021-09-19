import React from 'react';

class Search extends React.Component {

    
    state = {querry: ''}
//querry is the Search word the we get from user
    render() {
        return (<div>
            <form onSubmit={(e)=>{ e.preventDefault();//passing serach term to api call
                this.props.searchImage(this.state.querry) }}> 
                <center>
                    <h2>Find Anything </h2>
                    <div className="ui icon input">
                        <input style={{ border: '1px solid grey',width:'1130px', textAlign:'center',fontSize:'20px' ,padding:"6px" }}
                            onChange={(e) => {
                                this.setState({ querry: e.target.value })}} 
                                value={this.state.querry}type="text" placeholder="Search..." />
                        <i className="search icon" />
                    </div>
                </center>
            </form>
        </div>)
    }
}

export default Search;
