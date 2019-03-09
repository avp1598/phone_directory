import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Contact from './contact';
import {Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

class Main extends Component{

    constructor(props){
        super(props);
    
        this.state = {
            data : [
                {name: "Juani dela Cruz", number: "+639221113434",mail:"dela@cruz.com"},
                {name: "Norah Jones", number: "+639223333434",mail:"norah@jones.com"}
                ],
            isModalOpen: false
          };
        
          this.toggleModal = this.toggleModal.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.deleteContact = this.deleteContact.bind(this);
  
        }
        deleteContact(contact) {
            var d=this.state.data;
            var index = d.indexOf(contact);
            if (index > -1) {
                d.splice(index, 1);
            }
            this.setState({
                data:d
            })
        }   

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
        
        handleSubmit(event) {
            event.preventDefault();
            this.toggleModal();
            var d=this.state.data;
            d.push({name:this.name.value,number:this.number.value,mail:this.mail.value})
            this.setState({
                data:d
            })
        }

    render(){
        var deleteContact=this.deleteContact;
        return (
            <div>
                <Header />
                <Button color="success" onClick={this.toggleModal}>Add Contact</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Contact</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="name">Contact Name</Label>
                                <Input type="text" id="name" name="name"
                                    innerRef={(input) => this.name = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="number">Number</Label>
                                <Input type="text" id="number" name="number"
                                    innerRef={(input) => this.number= input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="mail">Email-id</Label>
                                <Input type="text" id="mail" name="mail"
                                    innerRef={(input) => this.mail= input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Add</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Contact deleteContact={deleteContact.bind(this)} data={this.state.data} />
                <Footer />
            </div>
            );
        }
}

export default Main;