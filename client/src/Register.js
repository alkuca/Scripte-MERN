import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {userSignUpRequest} from "./actions/personActions";

class Register extends Component{
    constructor(props){
        super(props);

        this.state={
            name:"",
            surname:"",
            email:"",
            password:"",
            passwordConfirmation:""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();
        this.props.userSignUpRequest(this.state)
        console.log(this.state)
    }

    render(){
        const {userSignUpRequest} = this.props;
        return(
            <div className="register-container">
                <div className="register-content-wrapper">
                    <form onSubmit={this.onSubmit} className="register-content">
                        <h2>Ime:</h2>
                        <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                        <h2>Prezime:</h2>
                        <input type="text" name="surname" value={this.state.surname} onChange={this.onChange} />
                        <h2>Email:</h2>
                        <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
                        <h2>Password:</h2>
                        <input type="text" name="password" value={this.state.password} onChange={this.onChange} />
                        <h2>Ponovi Password:</h2>
                        <input type="text" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.onChange} />
                        <div className="register-buttons">
                            <button
                                className="button registracija-button-submit">
                                    Registriraj se
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default connect((state) => {return {} },{userSignUpRequest})(Register);
