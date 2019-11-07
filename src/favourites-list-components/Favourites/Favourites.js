import React from 'react';
import './Favourites.css';
import {connect} from 'react-redux';
import {addCityToFavourites} from "../../store/actions/actionCreators";


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
        event.preventDefault();
        //check if it exists, then add to localStorage !
        //get array into redux state
        this.props.addCityToFavourites(this.state.city);
        this.props.onReload(this.state.city);
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

const mapStateToProps = state => {
    return {
        cityList: state.cityList
    };
};

const mapDispatchToProps = {
    addCityToFavourites
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);