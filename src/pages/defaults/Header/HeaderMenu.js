import React from 'react';
import { Nav, Row, Container, Navbar, NavDropdown } from 'react-bootstrap';
// class HeaderMenu extends React.Component {
class HeaderMenu extends React.Component {
    handleSelect(eventKey) {
        alert(`selected ${eventKey}`);
    }
    render() {
        return (
            <div className="app-header-menu" >
            <Container>
                <Row>
                    <Nav variant="pills" activeKey="1" onSelect={k => this.handleSelect(k)}>
                        <Nav.Item>
                            <Nav.Link eventKey="1" href="#/home" className="app-header-menu-icon app-icon-home">
                                <i class="fas fa-home"></i>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{borderTop: "#F58220 solid 3px", borderRight: "0.5px solid rgba(140, 137, 137, 0.6)"}}>
                            <Nav.Link eventKey="2" title="Item">
                                KINH DOANH
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{borderTop: "#F04E23 solid 3px", borderRight: "0.5px solid rgba(140, 137, 137, 0.6)"}}>
                            <Nav.Link eventKey="2" title="Item">
                                LIFESTYLE
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{borderTop: "#FFC709 solid 3px", borderRight: "0.5px solid rgba(140, 137, 137, 0.6)"}}>
                            <Nav.Link eventKey="2" title="Item">
                                ĐỜI SỐNG
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{borderTop: "#00B6B4 solid 3px", borderRight: "0.5px solid rgba(140, 137, 137, 0.6)"}}>
                            <Nav.Link eventKey="2" title="Item">
                                ĂN CHƠI
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{borderTop: "#008F55 solid 3px", borderRight: "0.5px solid rgba(140, 137, 137, 0.6)"}}>
                            <Nav.Link eventKey="2" title="Item">
                                THỜI TRANG
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{borderTop: "#84C44C solid 3px", borderRight: "0.5px solid rgba(140, 137, 137, 0.6)"}}>
                            <Nav.Link eventKey="2" title="Item">
                            PHIM ẢNH
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{borderTop: "#7D7FBD solid 3px", borderRight: "0.5px solid rgba(140, 137, 137, 0.6)"}}>
                            <Nav.Link eventKey="2" title="Item">
                            ÂM NHẠC
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{borderTop: "#30519A solid 3px", borderRight: "0.5px solid rgba(140, 137, 137, 0.6)"}}>
                            <Nav.Link eventKey="2" title="Item">
                            DESIGN
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{borderTop: "#0091D0 solid 3px", borderRight: "0.5px solid rgba(140, 137, 137, 0.6)"}}>
                            <Nav.Link eventKey="2" title="Item">
                            VIDEOS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{borderTop: "#FFC709 solid 3px", borderRight: "0.5px solid rgba(140, 137, 137, 0.6)"}}>
                            <Nav.Link eventKey="2" title="Item">
                            HEALTH
                            </Nav.Link>
                        </Nav.Item>
                        
                        <NavDropdown id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">
                                Something else here
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Row>
            </Container>
            </div>
        )
    }
}
export default HeaderMenu;