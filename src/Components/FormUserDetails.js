import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
               <React.Fragment>
                <AppBar title="User Registration" />
                <TextField 
                    hintText = "Enter Your First Name"
                    floatingLabelText = "First Name"
                    onChange = {handleChange('firstName')}
                    defaultValue = {values.firstName}
                />
                <br/>
                <TextField 
                    hintText = "Enter Your Last Name"
                    floatingLabelText = "Last Name"
                    onChange = {handleChange('lastName')}
                    defaultValue = {values.lastName}
                />
                <br/>
                <TextField 
                    hintText = "Enter Your Username"
                    floatingLabelText = "Username"
                    onChange = {handleChange('userName')}
                    defaultValue = {values.userName}
                />
                <br/>
                <TextField 
                    hintText = "Enter Your Email"
                    floatingLabelText = "Email"
                    onChange = {handleChange('email')}
                    defaultValue = {values.email}
                />
                <br/>
                <TextField 
                    hintText = "Enter Your Password"
                    floatingLabelText = "Password"
                    onChange = {handleChange('password')}
                    defaultValue = {values.password}
                />
                <br/>
                <RaisedButton
                    label="Continue"
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.continue}
                />

                <RaisedButton
                    label="Back"
                    primary = {false}
                    style = {styles.button}
                    onClick = {this.back}
                />
                
               </React.Fragment> 
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
       margin: 15 
    }
}

export default FormUserDetails
