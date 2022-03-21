import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

class UpSkill extends React.Component {
  render() {
    return (
      <>
        <section className="upskill section">
          <Container fluid>
            <Row>
              <Col md={2}>&nbsp;</Col>
              <Col md={8}>
                <h3 className="h3">
                  Upskill with our design courses, and advance your career with
                  a unique blend of <span className="bg"><strong className="el">cohort-based learning,</strong></span> live lectures and 
                   <span className="bg bg_1"><strong className="el">industry mentorship.</strong></span>
                </h3>
              </Col>
              <Col md={2}>
                &nbsp;
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default UpSkill;
