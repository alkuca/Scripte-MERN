import React, { Component } from 'react';
import './ModalKolegijItem.css';



class ModalKolegijItem extends Component {
    render(){
        return(
            <div className="Modal-kolegij-content-item">
                <p>Modal kolegij content item</p>
                <button className="add-kolegij-modal-button">Dodaj</button>
            </div>
        )
    }
}

export default ModalKolegijItem;