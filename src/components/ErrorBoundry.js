import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      errorMessage: ''
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorMessage: info
    })
  }

  render() {
    if(this.state.hasError) {
      return <h1>Error encountered.... {this.state.errorMessage}</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry;