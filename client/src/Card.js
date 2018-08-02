import React, { Component } from 'react';
import './Content.css';
import {removePerson} from "./actions/personActions";
import {connect} from "react-redux";
const images = require.context('../public/images', true);
const iks = images("./iks.png");

class Card extends Component{


    removeCard(){
        this.props.removePerson(this.props.id)
    }


    render(){
        return(
            <div className="card">
                <h2>{this.props.name}</h2>
                <p>ID: {this.props.id}</p>
                <p>SMJER: {this.props.smjer}</p>
                <p>SEMESTAR: {this.props.semestar}</p>

                <div className="remove-button">
                    <img onClick={this.removeCard.bind(this)} className="remove-button-icon" src={iks} alt="arrow"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    persons: state.persons
});

const mapActionsToProps = {
    removePerson: removePerson
};

export default connect(mapStateToProps,mapActionsToProps)(Card);

