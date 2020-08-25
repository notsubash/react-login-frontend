import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {

    continue = e => {
        e.preventDefault();
        //Process Form 
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    home = e => {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <MuiThemeProvider>
               <React.Fragment>
                <AppBar title="Successful Registration" />
                    <h1>Thank You For Your Submission</h1>
                    <h3>You will be further notified through your email</h3>
                    <br/>
                    <RaisedButton
                        label="Log In"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.home}
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

export default Success;
