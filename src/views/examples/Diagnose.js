import React from "react";
import {
  Card,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useForm } from "react-hook-form";
import axios from 'axios'
import qs from "qs";


const Diagnose = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (register) => {
    axios({
      method: "post",
      url: "http://localhost:3000/patient/",
      headers: {
        head: "good",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        // patient_id: register.patient_id,
        patient_name: register.patient_name,
        gender: register.gender,
        age: register.age,
        email: register.email,
        phone: register.phone,
        previous_illness: register.previous_illness,
        symptoms: register.symptoms,
        doctor_name: register.doctor_name,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(register);
  }
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
      <div className="wrapper">
        <Card style={{}}>
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup row>
                <Label for="patient_name" sm={2}>
                  Patient Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="string"
                    name="patient_name"
                    id="patient_name"
                    placeholder="Name"
                    innerRef={register({ required: true })}
                  />
                  {errors.patientName && <span>This field is required</span>}
                </Col>
              </FormGroup>
              {/* <Col lg="3" sm="6">
                <FormGroup>
                  <Input defaultValue="" placeholder="Regular" type="text" />
                </FormGroup>
              </Col> */}
              <FormGroup row>
                <Label for="gender" sm={2}>
                  Gender
                </Label>
                <Col sm={10}>
                  <Input
                    type="select"
                    name="gender"
                    id="gender"
                    placeholder="Select"
                    innerRef={register({ required: true })}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                  </Input>
                  {errors.gender && <span>This field is required</span>}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="age" sm={2}>
                  Age
                </Label>
                <Col sm={10}>
                  <Input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Enter your Age"
                    innerRef={register({ required: true })}
                  />
                  {errors.age && <span>This field is required</span>}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="email" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email "
                    innerRef={register({ required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="phone" sm={2}>
                  Phone
                </Label>
                <Col sm={10}>
                  <Input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone Number"
                    innerRef={register}
                  />
                  {errors.phone && <span>This field is required</span>}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="symptoms" sm={2}>
                  Symptoms
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="symptoms"
                    id="symptoms"
                    placeholder="Enter your Symptoms"
                    innerRef={register}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="previous_illness" sm={2}>
                  Previous Illness
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="previous_illness"
                    id="previous_illness"
                    placeholder="Enter your previous illness if any"
                    innerRef={register}
                  />
                  {/* {errors.occupation && <span>This field is required</span>} */}
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="lung_xray" sm={2}>
                  Upload
                </Label>
                <Col sm={10}>
                  <Input
                    type="file"
                    name="lung_xray"
                    id="lung_xray"
                    innerRef={register}
                    placeholder="Enter X Ray"
                    // color='white'
                  />
                </Col>
              </FormGroup>
              {/* <p className="category">Symptoms</p>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> <span className="form-check-sign" />
                  Chest Pain
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> <span className="form-check-sign" />
                  Difficulty Breathing
                </Label>
              </FormGroup> */}
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button>Submit</Button>
                </Col>
              </FormGroup>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Diagnose;
