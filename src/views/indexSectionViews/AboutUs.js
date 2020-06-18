import React from 'react'
import {  Container, Row, Col, UncontrolledTooltip } from "reactstrap";
export default function AboutUs() {
    return(
        <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
              <h1 className="title">
                Our Team
              </h1>
              <h4 className="d-none d-sm-block">
              We work together to design, create and produce work that we are proud of for folks that we believe in. We are available for hire in a wide range of creative disciplines for a variety of jobs, projects and gigs.
              </h4>
            </Col>
            </Row>
            <Row>
          <Col className="justify-content-md-center mt-5 mt-sm-0" sm="3" xs="6">
                {/* <UncontrolledTooltip className="d-block text-uppercase font-weight-bold mb-4"> */}
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample"  >
                  Thushar Sreenivas
                  </UncontrolledTooltip>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/thushar.jpeg")}
                  style={{ width: "150px" }}
                  id="UncontrolledTooltipExample"
                />
              </Col>
              <Col sm="3" xs="6">
              <UncontrolledTooltip placement="bottom" target="BenoSamBinu"  >
              Beno Sam Binu
                  </UncontrolledTooltip>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/beno_sam.jpeg")}
                  style={{ width: "150px" }}
                  id="BenoSamBinu"
                />
              </Col>
              <Col sm="3" xs="6" >
              <UncontrolledTooltip placement="bottom" target="AthulRajesh"  >
                  Athul Rajesh
                  </UncontrolledTooltip>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/athul.jpeg")}
                  style={{ width: "150px" }}
                  id="AthulRajesh"
                />
              </Col>
              <Col sm="3" xs="6" >
              <UncontrolledTooltip placement="bottom" target="NithinGeorgePhilips"  >
                  Nithin George Philips
                  </UncontrolledTooltip>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/nithin.jpeg")}
                  style={{ width: "150px" }}
                  id="NithinGeorgePhilips"
                />
              </Col>
            </Row>
            <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
        </div>
    )
}
{/* <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">tooltip</span>.</p>
      <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
        Hello world!
      </UncontrolledTooltip> */}