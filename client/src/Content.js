import React, { Component } from 'react';
import './Content.css';
import Card from "./Card";
import {connect} from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {fetchPersons, createPerson, filterPerson} from "./actions/personActions";
import AddKolegijModal from "./AddKolegijModal"

class Content extends Component{
    constructor(props){
        super(props);

        this.state={
            modalIsOpen: false
        };

        this.setQuery = this.setQuery.bind(this);
        this.addNewRandomPerson = this.addNewRandomPerson.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    componentDidMount(){
        this.props.fetchPersons();
    }


    setQuery(query){
        this.props.filterPerson(query)
    }

    addNewRandomPerson() {
        this.props.createPerson({name:"Dummy Kolegij",smjer:"Dummy Smjer",semestar:Math.floor((Math.random() * 6) + 1)});
    }


    handleButtonClick(){
        this.addNewRandomPerson();
        this.openModal();
    }

    openModal(){
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal(){
        this.setState({
            modalIsOpen: false
        })
    }



    render(){
        let filteredPersons = this.props.persons.filter(a => a.name.toLowerCase().includes(this.props.query.toLowerCase()));

        return(
            <div className="content-wrapper">
                <div className="content">
                    <div className="content-filter-wrapper">
                        <h2>Moji Kolegiji</h2>
                        <div className="filter-button-wrapper">
                            <input onChange={(event) => {
                                this.setQuery(event.target.value);
                            }}
                                   className="search-input" type="text" placeholder="Pretraži kolegij..." />
                            <button onClick={this.handleButtonClick} className="dodaj-kolegij-button">Dodaj Kolegij</button>
                        </div>
                    </div>
                    <div className="content-cards">
                        <ReactCSSTransitionGroup
                            transitionName="card"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                            {filteredPersons.map((person) =>
                                <Card
                                    key={person._id}
                                    name={person.name}
                                    smjer={person.smjer}
                                    semestar={person.semestar}
                                    resursi={person.resursi}
                                    id={person._id}
                                />
                            )}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
                    <AddKolegijModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    persons: state.persons.items,
    query: state.persons.query
});

const mapActionsToProps = {
    fetchPersons: fetchPersons,
    createPerson: createPerson,
    filterPerson: filterPerson
};

export default connect(mapStateToProps,mapActionsToProps)(Content);

