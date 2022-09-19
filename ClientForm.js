import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "./Meeting.jpg";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default class ClientForm extends React.Component {
  //Parameters passed from Parents
  constructor(props) {
    super(props);
    // props -- parameters, state --- Local variable
    this.state = {};
    this.email = { value: "email@gmail.com" };
    // This is to handle the Button Action
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }
  clearFields() {
    this.setState({ link: "", email: "" });
  }
  /* Event to handle Submit Action
   */
  handleSubmit(event) {
    event.preventDefault();
    //as of now handled like this , Bcz
    //we dont have any login pages to collect the email, name etc
    const data = {
      email: this.email.value,
    };
    let username = "username";
    axios
      .post(`http://localhost:3444/meeting`, data)
      .then((response) => {
        let URL =
          response.data.join_url.replaceAll(
            "https://us04web.zoom.us/j/",
            "http://localhost:9996/?"
          ) + `?role=1?name=${username}`;
        //TODO need to cross check why link is not replacing here
        window.location.replace(`${URL}`);
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <Card style={{ width: "73rem" }} className="card shadow text-center">
        <Card.Img variant="top" src={logo} style={{ height: "22rem" }} />
        <Card.Title>Join Meeting</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label style={{ float: "left" }}>Meeting Link</Form.Label>
              <Form.Control
                type="text"
                value={this.state.link}
                onChange={(event) =>
                  this.setState({ link: event.target.value })
                }
                autocomplete="off"
                placeholder="Enter Meeting Link"
              />
              <Form.Text style={{ float: "left" }} className="text-muted">
                By clicking "Join", you agree to our Terms of Services and
                Privacy Statement
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label style={{ float: "left" }}>
                Email (Optional)
              </Form.Label>
              <Form.Control
                type="text"
                value={this.state.email}
                onChange={(event) =>
                  this.setEmail({ email: event.target.value })
                }
                autocomplete="off"
                placeholder="Enter Email ID"
              />
            </Form.Group>
            <Form.Group>
              <Button
                onClick={(evnt) => this.clearFields(evnt)}
                variant="secondary"
              >
                Clear
              </Button>
              &nbsp;
              <Button
                style={{ paddingLeft: "16px", paddingRight: "16px" }}
                onClick={(evt) => this.handleSubmit(evt)}
                variant="primary"
              >
                Join
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
