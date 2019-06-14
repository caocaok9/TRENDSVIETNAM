import React from 'react';
import { Nav, Row, Container, Navbar, NavDropdown } from 'react-bootstrap';

class HeaderTop extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="app-header-top">
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav>

                                    <Nav.Item className="border-right">
                                        <Nav.Link>Thứ hai, 8/4/2019, 15:29 ( GMT+7) </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link >RSS</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link style={{ color: "#FFC500" }}>Đặt làm trang chủ</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link ><i className="fas fa-phone-alt"></i>&nbsp;0903 069 798</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                            <Nav className="mr-auto">
                                <Nav.Item href="#home">


                                    <div className="input-group header-search">
                                        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></span>
                                        </div>
                                    </div>

                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link style={{ color: "#4AC8FF", fontStyle: "italic", float: "right", paddingRight: "0px" }}><i className="fas fa-user"></i>Go Premium</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar>
                    </div>
                </Row>
            </Container>
        )
    }
}
export default HeaderTop;