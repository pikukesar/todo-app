import React, { Component } from 'react'
class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }


    handleChange(event) {
        //console.log(this.state)
        this.setState({
            [event.target.name]
                : event.target.value
        })

    }
    loginClicked() {
        //in28muinutes, dummy

        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            console.log('Success')
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
            console.log(this.state)
        }
        else
            console.log('Failed')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
            console.log(this.state)
    }
    render() {
        return (
            <div className="TodoApp">
                <ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed} />
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />
                

                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}
function ShowInvalidCredential(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credential</div>
    }
    return null

}

function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Login Success</div>
    }
    return null
}
export default TodoApp