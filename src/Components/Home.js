import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from "material-ui/RaisedButton";

export class Home extends Component {

    home = e => {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <MuiThemeProvider>
               <React.Fragment>
                <AppBar title="Home" />
                    <h1>You are logged in!!!</h1>
                    <br/>
                    <RaisedButton
                        label="Log Out"
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

export default Home;
