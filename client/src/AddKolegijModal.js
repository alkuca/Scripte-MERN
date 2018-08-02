import React, { Component } from 'react';
import './AddKolegijModal.css';
import ModalKolegijItem from "./ModalKolegijItem"
const images = require.context('../public/images', true);
const iks = images("./iks.png");

class AddKolegijModal extends Component {
    render(){
         let modalIsOpen = this.props.modalIsOpen;

        if (modalIsOpen === false) {
            return null;
        }else
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-content">

                        <div className="modal-input-wrapper">
                            <input onChange={(event) => {

                            }}
                                   type="text" placeholder="Pretraži kolegij..." />
                            <div className="modal-close">
                                <img onClick={this.props.closeModal} className="modal-close-button" src={iks} alt="arrow"/>
                            </div>
                        </div>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                        <ModalKolegijItem/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddKolegijModal;