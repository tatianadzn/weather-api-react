import React from 'react';
import FavCity from './FavCity/FavCity'

class FavCityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: []
        }
    }

    componentDidMount() {
        this.setState({cityList: JSON.parse(localStorage.getItem('cityList'))});
    }

    render() {
        return(
            <div>
                {this.state.cityList !== null && this.state.cityList.map(city => {
                    return <FavCity
                            key={city}
                            city={city}
                        />
                })}
            </div>
        )
    }
}

export default FavCityList;