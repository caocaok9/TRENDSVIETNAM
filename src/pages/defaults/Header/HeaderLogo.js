import React from 'react';
import { Nav, Row, Container, Navbar, Image, Col } from 'react-bootstrap';
class HeaderLogo extends React.Component {
    render() {
        return (
            // <Container>
            //     <Row>
                    <div className="app-header-logo">
                        <Navbar bg="light">
                           
                                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                             
                            
                            <Nav>
                                
                                        <Image className="app-header-banner" src="images/banner2.png" alt="Trulli" id="imagelogo" />
                                    
                                        <Image className="app-header-banner" src="images/banner1.png" alt="Trulli" id="imagelogo" />
                                    
                                        <Image className="app-header-banner" src="images/banner1.png" alt="Trulli" />
                                   
                                </Nav>
                            
                           
                        </Navbar>
                    </div>
            //     </Row>
            // </Container>

        )
    }
}
export default HeaderLogo;