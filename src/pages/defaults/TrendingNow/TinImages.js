import React from 'react';
import { Nav, Row, Container, Col, NavDropdown, Card } from 'react-bootstrap';
class TinImages extends React.Component {
    render() {
        return (
            <Container>
                <Row class="TinImages1">
                    <Col md={12}>
                    <Card className="card-big">
                        <Card.Img src="images/photo1.png" alt="Card image" />
                        <Card.ImgOverlay >
                            <Card.Title style={{
                                backgroundColor: "#F58220", width: "max-content", paddingLeft: "inherit", paddingRight: "inherit", paddingBottom: "0.5rem",
                                paddingTop: "0.5rem"
                            }}
                            >Kinh Doanh</Card.Title>
                            <Card.Text style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", fontSize: "1.5rem", fontWeight: "600", paddingTop: "0.8rem", paddingBottom: "0.8rem", textAlign: "left" }}>
                                Tự biến mình thành startup, doanh thu 2017 của Levi’s lập kỷ lục sau gần 2 thập kỷ
                             </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                </Row>
                <Row class="TinImages2">
                    <Col md={4} >
                    <Card className="card-small">
                        <Card.Img src="images/photo2.png" alt="Card image" />
                        <Card.ImgOverlay >
                            <Card.Title style={{
                                backgroundColor: "#F58220", width: "max-content", paddingLeft: "inherit", paddingRight: "inherit", paddingBottom: "0.5rem",
                                paddingTop: "0.5rem"
                            }}
                            >Life Style</Card.Title>
                            <Card.Text style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", fontWeight: "600", paddingTop: "0.8rem", paddingBottom: "0.8rem", textAlign: "left" }}>
                                Tự biến mình thành startup, doanh thu 2017 của Levi’s lập kỷ lục sau gần 2 thập kỷ
                             </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col md={4} >
                    <Card className="card-small">
                        <Card.Img src="images/photo2.png" alt="Card image" />
                        <Card.ImgOverlay >
                            <Card.Title style={{
                                backgroundColor: "#F58220", width: "max-content", paddingLeft: "inherit", paddingRight: "inherit", paddingBottom: "0.5rem",
                                paddingTop: "0.5rem"
                            }}
                            >Life Style</Card.Title>
                            <Card.Text style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", fontWeight: "600", paddingTop: "0.8rem", paddingBottom: "0.8rem", textAlign: "left" }}>
                                Tự biến mình thành startup, doanh thu 2017 của Levi’s lập kỷ lục sau gần 2 thập kỷ
                             </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col md={4} >
                    <Card className="card-small">
                        <Card.Img src="images/photo2.png" alt="Card image" />
                        <Card.ImgOverlay >
                            <Card.Title style={{
                                backgroundColor: "#F58220", width: "max-content", paddingLeft: "inherit", paddingRight: "inherit", paddingBottom: "0.5rem",
                                paddingTop: "0.5rem"
                            }}
                            >Life Style</Card.Title>
                            <Card.Text style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", fontWeight: "600", paddingTop: "0.8rem", paddingBottom: "0.8rem", textAlign: "left" }}>
                                Tự biến mình thành startup, doanh thu 2017 của Levi’s lập kỷ lục sau gần 2 thập kỷ
                             </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default TinImages;