import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import Confirm from './Confirm'
import Success from './Success'
import LoginForm from './LoginForm'
import Home from './Home'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    }

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Log out from the app
    logout = () => {
        const {step } = this.state;
        this.setState({
            step: 1
        })
    }

    //Move to the last page 
    loginStep = () => {
        const { step } = this.state;
        this.setState({
            step: 5
        });
    }

    //Handle fields Change
    handleChange = input => e => {
        this.setState({[input] : e.target.value});
    }


    render() {
        const { step} = this.state;
        const {firstName, lastName, userName, email,  password} = this.state;
        const values = {firstName, lastName, userName, email, password}
        
        switch(step) {
            case 1:
                return(
                    <LoginForm
                        handleChange = {this.handleChange}
                        values = {values}
                        loginStep = {this.loginStep}
                        nextStep = {this.nextStep}
                    />
                )
            case 2:
                return(
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3:
                return(
                    <Confirm 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                    />
                )
            case 4:
                return(
                    <Success
                        logout = {this.logout}
                    />
                )   
            case 5:
                return(
                    <Home
                        logout = {this.logout}
                    />
                )
        }
    }
}

export default UserForm;
