import React from 'react';
import { Nav, Row, Container, Navbar, NavDropdown } from 'react-bootstrap';
class HeaderLogo extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="app-header-logo">
                        <Navbar bg="light">
                            <Navbar.Brand href="#home">Logo</Navbar.Brand>
                            <div>
                                <img src="images/banner2.png" alt="Trulli" id="imagelogo"></img>
                                <img src="images/banner1.png" alt="Trulli" id="imagelogo"></img>
                                <img src="images/banner1.png" alt="Trulli" ></img>
                            </div>
                        </Navbar>


                    </div>
                </Row>
            </Container>

        )
    }
}
export default HeaderLogo;