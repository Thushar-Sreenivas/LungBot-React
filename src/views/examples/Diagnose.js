/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
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
  Spinner,
} from "reactstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import qs from "qs";
import PagesNavbar from "components/Navbars/ExamplesNavbar";
import SpinnerLungBot from "./Spinner";
import Result from "./Result";
const Diagnose = () => {
  const color = { color: "white", backgroundColor: "black" };
  const [selectedFile, setSelectedFile] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();
  const [showSpinner, setShowSpinner] = useState(false);
  const [diseasePredictedValue, setDiseasePredictedValue] = useState("");
  const [showResultPage, setShowResultPage] = useState(false);

  const [patientDetails, setPatientDetails] = useState({
    patient_name: "",
    gender: "",
    age: "",
    email: "",
    phone: "",
    previous_illness: "",
    symptoms: "",
    doctor_name: "Dr John Mathew",
  });
  const [file, setFile] = useState(null);
  const fileSelectedHandler = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    // console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    setShowSpinner(true);
    const formData = new FormData();
    // console.log(selectedFile);
    formData.append("image", selectedFile, selectedFile.name);
    // console.log(formData);
    try {
      axios
        .post("https://mlmodellungbot.herokuapp.com/", formData)
        .then((res) => {
          console.log(res);
          setDiseasePredictedValue(res.data);
          // setTimeout(() => {
          setShowSpinner(false);
          // }, 5000);
          setShowResultPage(true);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = (register) => {
    setPatientDetails({
      patient_name: register.patient_name,
      gender: register.gender,
      age: register.age,
      email: register.email,
      phone: register.phone,
      previous_illness: register.previous_illness,
      symptoms: register.symptoms,
      doctor_name: register.doctor_name,
    });
    console.log("Patient At diagonise", patientDetails);
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
    // console.log(register);
    fileUploadHandler();
  };
  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
      <PagesNavbar />
      <div className="wrapper">
        {/* <Card style={{width:'40%',margin:'auto',marginTop:'120px',backgroundColor:'black'}}> */}
        {/* {showSpinner ? <SpinnerLungBot /> : null} */}
        {showResultPage ? (
          // <SpinnerLungBot />
          <Result
            patientDetails={patientDetails}
            diseasePredictedValue={diseasePredictedValue}
            selectedFile={file}
          />
        ) : (
          <Card style={{ margin: "120px 120px 120px 120px", width: "80%" }}>
            <CardBody>
              <form
                onSubmit={handleSubmit(onSubmit)}
                // style={{ marginTop: "10px" }}
              >
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
                      placeholder="Enter your previous illness history"
                      innerRef={register}
                    />
                    {/* {errors.occupation && <span>This field is required</span>} */}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="lung_xray" sm={2}>
                      <Button>Upload</Button>
                    
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="file"
                      name="lung_xray"
                      id="lung_xray"
                      innerRef={register}
                      placeholder="Enter X Ray"
                      onChange={fileSelectedHandler}
                      // color='white'
                    />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button style={{ marginLeft: "80px" }}>Submit</Button>
                  </Col>
                </FormGroup>
              </form>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
};

export default Diagnose;
