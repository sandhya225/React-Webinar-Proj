import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import logo from "./Meeting.jpg";
import Form from "react-bootstrap/Form";

export default class ClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    // This is to handle the Text box value
    this.handleChange = this.handleChange.bind(this);
    // This is to handle the Button Action
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /* Event to handle the Text Box 
     Value on Change Event
   */
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  /* Event to handle  Clear Text Box 
     Value on Click of Clear  Button
   */
  clearValue(event) {
    event.target.value = "";
    this.setState({ value: event.target.value });
  }
  /* Event to handle Submit Action
   */
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Card style={{ width: "73rem" }} className="card shadow text-center">
        <Card.Img variant="top" src={logo} style={{ height: "22rem" }} />
        <Card.Title>Join Meeting</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Meeting ID or Personal Link Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Meeting ID or Personal Link Name"
              />
              <Form.Text
                className="text-muted"
                value={this.state.value}
                onChange={this.handleChange}
              >
                By clicking "Join", you agree to our Terms of Services and
                Privacy Statement{" "}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Button onClick={this.clearValue} variant="secondary">
                Clear
              </Button>
              &nbsp;
              <Button
                style={{ paddingLeft: "16px", paddingRight: "16px" }}
                onClick={this.handleSubmit}
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
