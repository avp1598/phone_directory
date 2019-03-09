import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav,NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>

                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            </Nav>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Phone directory</h1>
                                <p>This is state of art of phone directory built specifically for your needs.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;