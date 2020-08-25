import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, LsitItem, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        //Process Form 
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName , userName,
             email , password}} = this.props;

        return (
            <MuiThemeProvider>
               <React.Fragment>
                <AppBar title="Confirm User Data" />
                <List>
                    <ListItem
                        primaryText = "First Name"
                        secondaryText = { firstName }
                    />
                    <ListItem
                        primaryText = "Last Name"
                        secondaryText = { lastName }
                    />
                    <ListItem
                        primaryText = "Username"
                        secondaryText = { userName }
                    />
                    <ListItem
                        primaryText = "Email"
                        secondaryText = { email }
                    />
                    <ListItem
                        primaryText = "Password"
                        secondaryText = { password }
                    />
                </List>

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
