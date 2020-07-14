import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.username, values.message);
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
            Control.select model = ".rating"
            name = "rating"
            className = "form-control" >
            <
            option > 1 < /option> <
            option > 2 < /option> <
            option > 3 < /option> <
            option > 4 < /option> <
            option > 5 < /option> <
            /Control.select> <
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

function RenderDish({ dish }) {
    return ( <
        div className = "col-12 col-md-5 mt-1" >
        <
        Card >
        <
        CardImg width = "100%"
        src = { dish.image }
        alt = { dish.name }
        /> <
        CardBody >
        <
        CardTitle > { dish.name } < /CardTitle> <
        CardText > { dish.description } < /CardText> <
        /CardBody> <
        /Card> <
        /div>
    );
}


function RenderComments({ comments, addComment, dishId }) {

    const commentsMap = comments.map((comment) => {
        var date = comment.date.substring(0, 10).split('-');
        var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return ( <
            li >
            <
            p > { comment.comment } < /p> <
            p > --{ comment.author }, { month_names_short[date[1] - 1] } {
                ("0" + (parseInt(date[2]) + 1)).slice(-2) }, { date[0] } < /p> <
            /li>
        );
    })

    return ( <
        div className = "col-12 col-md-5 mt-1" >
        <
        h4 > Comments < /h4> <
        ul className = "list-unstyled" > { commentsMap } <
        /ul> <
        CommentForm dishId = { dishId }
        addComment = { addComment }
        /> <
        /div>
    );

}

const DishDetail = (props) => {
    if (props.isLoading) {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            Loading / >
            <
            /div> <
            /div>
        );
    } else if (props.errMess) {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            h4 > { props.errMess } < /h4> <
            /div> <
            /div>
        );
    } else if (props.dish != null) {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            Breadcrumb >
            <
            BreadcrumbItem > < Link to = "/menu" > Menu < /Link></BreadcrumbItem >
            <
            BreadcrumbItem active > { props.dish.name } < /BreadcrumbItem> <
            /Breadcrumb>

            <
            div className = "col-12" >
            <
            h3 > { props.dish.name } < /h3> <
            hr / >
            <
            /div> <
            /div> <
            div className = "row" >
            <
            RenderDish dish = { props.dish } > < /RenderDish> <
            RenderComments comments = { props.comments }
            addComment = { props.addComment }
            dishId = { props.dish.id }
            /> <
            /div> <
            /div>
        );
    } else {
        return ( <
            div > < /div>
        );
    }
}


export default DishDetail;