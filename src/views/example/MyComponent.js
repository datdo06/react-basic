import React from "react";
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleChange = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }

    handleChange2 = (event) => {
        this.setState({
            lastName: event.target.value,
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        alert('Click me')
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text"
                           value={this.state.firstName}
                            onChange={ (event) => this.handleChange(event) }
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text"
                           value={this.state.lastName}
                           onChange={ (event) => this.handleChange2(event) }
                    /><br/><br/>
                    <input type="buttuon"
                           value="Submit"
                           onClick={(event) => this.handleClick(event)}
                    />
                </form>
            </>
        )
    }
}

export default MyComponent;