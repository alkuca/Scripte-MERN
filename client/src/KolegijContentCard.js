import React, { Component } from 'react';
import './KolegijContent.css';

class KolegijContentCard extends Component{
    render(){

        return(
            <div className="resource-card">
                <div className="resource-card-content">
                    <h3 className="resource-card-content-kolegij">
                        {this.props.test}
                    </h3>
                    <p className="resource-card-content-type">

                    </p>
                    <p className="resource-card-content-date">

                    </p>
                    <p className="resource-card-content-name">

                    </p>
                    <div className="resource-card-content-buttons">
                        <button id="otvori-button">Otvori</button>
                        <button id="preuzmi-button">Preuzmi</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default KolegijContentCard;