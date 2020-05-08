import React, { Component } from 'react';
import { Row, Col, Button, Modal, ModalHeader, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormOpen: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isFormOpen: !this.state.isFormOpen
    });
  }

  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
  }

  render() {
    return(
      <div>
        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"> Submit Comment</span></Button>
        <Modal isOpen={this.state.isFormOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Submit Comment
          </ModalHeader>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="p-3">
            <Row className="form-group">
              <Label htmlFor="rating" md={12}>Rating</Label>
              <Col md={12}>
                <Control.select model=".rating" id="rating" name="rating"
                  className="form-control"
                  validators={{
                    required
                  }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="name" md={12}>Your Name</Label>
              <Col md={12}>
                <Control.text model=".name" id="name" name="name"
                  placeholder="Your name"
                  className="form-control"
                  validators={{
                    required, minLength: minLength(3), maxLength: maxLength(15)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: 'required',
                    minLength: 'Must be greater than 2 numbers',
                    maxLength: 'must be less than 15 numbers',
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={12}>
                <Label>Comment</Label>
                <Control.textarea model=".commentText" id="commentText" name="commentText"
                  className="form-control"
                  rows="6"
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Col>
                <Button type="submit" color="primary">Submit</Button>
              </Col>
            </Row>
          </LocalForm>
        </Modal>
      </div>
    );
  }
}

export default CommentForm;
