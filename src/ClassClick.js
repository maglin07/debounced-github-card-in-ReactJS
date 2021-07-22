import React, { Component } from "react"
import "./index.css"
import Button from "react-bootstrap/Button"
import { Card, Image} from "react-bootstrap"
import Profile from './Profile'


class ClassClick extends Component {
  state = {
    user: [],
    active: false,
    userData:[],
  }

  clickHandler = () => {
    fetch("https://api.github.com/users/2021maggie")
      .then((response) => response.json())
      .then((data) => this.setState({ user: data, active: !this.state.active }))
  }

  render() {
    let userinfo
    if (this.state.active) {
      userinfo = (
        <Card style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Title>GitHub Profile Card</Card.Title>
            <Card.Text>
            <Image src={this.state.user.avatar_url}  />
            </Card.Text>

            <Card.Text>Username: {this.state.user.login}</Card.Text>
            <Card.Text>Url: {this.state.user.html_url}</Card.Text>
          </Card.Body>
        </Card>
      )
    } else {
      userinfo = null
    }
    return (
      <div>
        <Button
          variant="success"
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={this.clickHandler}
        >
          My Profile
        </Button>
        <br></br>
        <br></br>
        <Profile />
        {userinfo}
      </div>
    )
  }
}

export default ClassClick

