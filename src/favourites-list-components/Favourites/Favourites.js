import React from 'react';
import './Favourites.css';


class Favourites extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city: ''
        }
    }

    handleChange = event => {
        this.setState({city: event.target.value});
    };

    handleSubmit = event => {

        //check if it exists, then add to localStorage !

        event.preventDefault();
        let cityList = [];
        if (JSON.parse(localStorage.getItem('cityList'))!= null) {
            cityList = JSON.parse(localStorage.getItem('cityList'));
        }
        cityList.push(this.state.city);
        localStorage.setItem('cityList', JSON.stringify(cityList));

        //get array into redux state
    };


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type={'text'} onChange={this.handleChange}/>
                    <input type={'submit'} value={'Add'}/>
                </form>
            </div>
        );
    }
}

export default Favourites;
