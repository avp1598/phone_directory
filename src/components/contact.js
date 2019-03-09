import React, { Component } from 'react';
import { Fade} from 'react-animation-components';
import { Media, Button} from 'reactstrap';

class Contact extends Component{

    render(){
        var deleteContact = this.props.deleteContact;
        const leadercontent=this.props.data.map((contact) =>{
            return(
                <Fade in>
                    <div className="col-12 mt-5">
                        <Media tag="li">
                            <Media left middle>
                                <Media object src="assets/images/c.jpg"/>
                            </Media>
                            <Media body className="ml-5">
                                <Media heading>{contact.name}</Media>
                                <p>{contact.mail}</p><br/>
                                <p>{contact.number}</p>
                                <Button color="danger" onClick={()=>{deleteContact(contact)}}>Delete</Button>
                            </Media>
                            
                        </Media>
                    </div>
                </Fade>
            )
        });
        return leadercontent;
    }
}
export default Contact;