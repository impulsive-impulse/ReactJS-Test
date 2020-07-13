import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Input, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

/*<Label for="rating">Rating</Label>
<Input type="select" name="rating" id="rating">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</Input>*/


class AddComment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value +
            " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        const maxLength = (len) => (val) => !(val) || (val.length <= len);

        return ( <
            div >
            <
            Button outline color = "secondary"
            onClick = { this.toggleModal } > < span className = "fa fa-pencil fa-lg" / > Submit Comment < /Button> <
            Modal isOpen = { this.state.isModalOpen }
            toggle = { this.toggleModal } >
            <
            ModalHeader toggle = { this.toggleModal } > Submit Comment < /ModalHeader> <
            ModalBody >
            <
            LocalForm onSubmit = {
                (values) => this.handleSubmit(values) } >
            <
            Row className = "form-group" >
            <
            Label htmlFor = "rating"
            md = { 2 } > Rating < /Label> <
            Col md = { 10 } >
            <
            Input type = "select"
            name = "rating"
            id = "rating" >
            <
            option > 1 < /option> <
            option > 2 < /option> <
            option > 3 < /option> <
            option > 4 < /option> <
            option > 5 < /option> <
            /Input> <
            /Col> <
            /Row> <
            Row className = "form-group" >
            <
            Label htmlFor = "username"
            md = { 2 } > Username < /Label> <
            Col md = { 10 } >
            <
            Control.text model = ".username"
            id = "username"
            name = "username"
            placeholder = "Your Name"
            className = "form-control"
            validators = {
                {
                    maxLength: maxLength(15)
                }
            }
            /> <
            Errors className = "text-danger"
            model = ".username"
            show = "touched"
            messages = {
                {
                    maxLength: 'Must be 15 characters or less'
                }
            }
            /> <
            /Col> <
            /Row>



            <
            Row className = "form-group" >
            <
            Label htmlFor = "message"
            md = { 2 } > Comment < /Label> <
            Col md = { 10 } >
            <
            Control.textarea model = ".message"
            id = "message"
            name = "message"
            rows = "6"
            className = "form-control" / >
            <
            /Col> <
            /Row> <
            Row className = "form-group" >
            <
            Col md = {
                { size: 10, offset: 2 } } >
            <
            Button type = "submit"
            color = "primary" >
            Submit <
            /Button> <
            /Col> <
            /Row> <
            /LocalForm>  <
            /ModalBody> <
            /Modal> <
            /div>
        );
    }
}

export default AddComment;