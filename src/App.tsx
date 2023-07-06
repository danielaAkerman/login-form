import React from "react";
import { LoginForm } from "./LoginForm";
import { ThankYou } from "./ThankYou";

export class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }
  onLogin(userData) {
    console.log("loginnnnnnnnnnn", userData)
    // VALIDAR
    this.setState({
        submitted: true
    })
  }
  render() {
    return !this.state.submitted ? (
      <LoginForm onLogin={(val) => this.onLogin(val)} />
    ) : (
      <ThankYou />
    );
  }
}
