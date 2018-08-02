import React, { Component } from 'react';
import './KolegijContent.css';
import {createPerson, fetchPersons, filterPerson} from "./actions/personActions";
import connect from "react-redux/es/connect/connect";
import  KolegijContentCard from "./KolegijContentCard"


class KolegijContent extends Component {
    constructor(props){
        super(props);

        this.setQuery = this.setQuery.bind(this);
    }

    componentDidMount(){
        this.props.fetchPersons();
    }

    setQuery(query){
        this.props.filterPerson(query)
    }
    render(){

        return(
            <div className="kolegij-content-wrapper">
                <div className="kolegij-content">
                    <div className="kolegij-content-filter-wrapper">
                        <h2>Strukture Podataka i Algoritmi  <span className="kolegij-details">/  3. godina informatike</span></h2>
                        <div className="kolegij-filter-button-wrapper">
                            <input onChange={(event) => {
                                this.setQuery(event.target.value);
                            }}

                                className="resours-search-input" type="text" placeholder="Pretraži resurs (ime)..." />
                            <select
                                className="resours-type-select">
                                <option disabled value>Vrsta</option>
                                <option value="Ispit">Ispit</option>
                                <option value="Kolokvij">Kolokvij</option>
                                <option value="Zadaća">Zadaća</option>
                                <option value="Seminar">Seminar</option>
                            </select>
                            <select
                                className="resours-type-select something">
                                <option disabled value>Nesto</option>
                                <option value="Nesto">Nesto</option>
                                <option value="Nesto">Nesto</option>
                                <option value="Nesto">Nesto</option>
                            </select>
                            <select
                                className="resours-type-select year">
                                <option disabled value>Godina</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                            <button className="dodaj-resurs-button">Uploadaj Resours</button>
                        </div>
                    </div>

                </div>
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

export default connect(mapStateToProps,mapActionsToProps)(KolegijContent);

