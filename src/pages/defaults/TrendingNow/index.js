import React from 'react';
import TinImages from './TinImages';
import TinScroll from './TinScroll';
import TopBanner from './TopBanner';
import { Col, Row,Container } from 'react-bootstrap';


import './TrendingNow.css';

class TrendingNow extends React.Component {
    render() {
        return (
            <div className="app-trending">
                <Container>
                    <Row>
                        <Col md={6}>
                            {/* <TopBanner /> */}
                            <TinImages />
                        </Col>
                        <Col md={3} style={{overflow: "auto"}}>
                            <TinScroll />
                        </Col>
                        <Col md={3}>
                            <TinScroll />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default TrendingNow;