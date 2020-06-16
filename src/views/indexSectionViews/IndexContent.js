import React from 'react'
import {  Container, Row, Col } from "reactstrap";
export default function IndexContent() {
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
                What we do
              </h1>
              <h4 className="d-none d-sm-block">
              LungBot is designed from the ground-up to deliver the most accurate and quantitative
  reports for referring pulmonologists. Built using deep learning technology trained on thousanda of X-Ray images.
              </h4>
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