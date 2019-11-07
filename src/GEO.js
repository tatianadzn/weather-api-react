import React from 'react'
import GEOStyles from './style/GEO.module.css';

class GEO extends React.Component{

    render() {
        return(
            <div className={GEOStyles.GEOBlock}>
                <button
                    className={GEOStyles.button}
                    onClick={this.props.getLocation}
                >GEO Button</button>
            </div>
        )
    }
}

export default GEO;