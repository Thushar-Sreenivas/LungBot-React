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
import PagesNavbar from "components/Navbars/ExamplesNavbar";

const Diagnose = (props) => {
  const color = {color:'white',backgroundColor:'black'}
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <><PagesNavbar/>
      <div className="wrapper">
        <Card style={{width:'35%',margin:'auto',marginTop:'120px',backgroundColor:'black'}}>
          <CardBody >
            <form onSubmit={handleSubmit(onSubmit)} style={{marginTop:'10px'}}>
              <FormGroup row>
                <Label for="patientName" sm={2}>
                  Patient Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="string"
                    name="patientName"
                    id="patientName"
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
                    <option style={color}>Male</option>
                    <option style={color}>Female</option>
                    <option style={color}>Prefer not to say</option>
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
                    placeholder="Enter Patient Age"
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
                    placeholder="Enter Patient Email "
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
                    placeholder="Enter Patient Phone Number"
                    innerRef={register}
                  />
                  {errors.phone && <span>This field is required</span>}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="previousIllness" sm={2}>
                  Previous Illness
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="previousIllness"
                    id="previousIllness"
                    placeholder="Enter Patient illness history"
                    innerRef={register}
                  />
                  {/* {errors.occupation && <span>This field is required</span>} */}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleFile" sm={2}>
                  Upload
                </Label>
                <Col sm={10}>
                  <Input
                    type="file"
                    name="file"
                    id="exampleFile"
                    innerRef={register}
                    placeholder="Enter X Ray"
                    // color='white'
                  />
                </Col>
              </FormGroup>
              <p className="category">Symptoms</p>
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
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> <span className="form-check-sign" />
                  Diabetes
                </Label>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button style={{marginLeft:'80px'}}>Submit</Button>
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
