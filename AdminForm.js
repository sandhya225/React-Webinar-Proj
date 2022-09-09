import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "./groupMeeting.jpg";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default class AdmminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  clearValue(event) {
    event.target.value="";
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Card style={{ width: "60rem" }}>
          <Card.Img variant="top" src={logo} style={{ height: "18rem" }} />
          <Card.Title style={{ textAlign: "center" }}>Join Meeting</Card.Title>
          <Card.Body>
            <Form >
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
                <Button onClick={this.clearValue}  variant="secondary">
                  Clear
                </Button>
                &nbsp;
                <Button  onClick={this.handleSubmit} variant="primary">
                  Join
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
