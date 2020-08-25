import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class LoginForm extends Component {

    loginWay = e => {
        e.preventDefault();
        this.props.loginStep();

    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }

    render() {
        const { values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
               <React.Fragment>
                <AppBar title="User Login" />
                <TextField 
                    hintText = "Enter Your Username"
                    floatingLabelText = "Username"
                    onChange = {handleChange('userName')}
                    defaultValue = {values.userName}
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
                    label="Login"
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.loginWay}
                />
                <RaisedButton
                    label="Sign Up"
                    primary = {false}
                    style = {styles.button}
                    onClick = {this.continue}
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

export default LoginForm;
