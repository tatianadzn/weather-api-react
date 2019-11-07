import React from 'react';
import './Favourites.css';
import {connect} from 'react-redux';
import {addCityToFavourites} from "../../store/actions/actionCreators";


class Favourites extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city: '',
            errorText: ''
        }
    }

    handleChange = event => {
        this.setState({city: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        if (JSON.parse(localStorage.getItem(this.state.city)) === null){
            this.props.addCityToFavourites(this.state.city);
            this.props.onAddingNewCity(this.state.city);
        }else{
            this.setState({errorText: this.state.city + ': such city has already been added to favourites'});
            setTimeout(() => {
                this.setState({errorText:''});
            }, 4000)
        }
        document.getElementById('addCityInput').value = '';
    };


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input id={'addCityInput'} type={'text'} onChange={this.handleChange}/>
                    <input type={'submit'} value={'Add'}/>
                </form>
                <div>{this.state.errorText}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cityList: state.cityList,
        errorText: state.errorText
    };
};

const mapDispatchToProps = {
    addCityToFavourites
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);