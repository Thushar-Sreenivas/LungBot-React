import React, { useState, useEffect } from "react";
import SpinnerLungBot from "./Spinner";

const style = {
  // position: "fixed",
  // top: "50%",
  // left: "50%",
  display: "flex",
  marginTop: "250px",
  marginLeft: "250px",
};

const Result = ({ patientDetails, diseasePredictedValue, selectedFile }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 9000);
  });

  console.log("patient Details", patientDetails);
  return (
    <>
      {showSpinner ? (
        <SpinnerLungBot />
      ) : (
        <div style={style}>
          <img
            src={selectedFile}
            alt="X Ray"
            style={{ width: "500px", height: "500px", marginRight: "40px" }}
          />
          <div>
            <h1>Disease Prediction: {diseasePredictedValue}</h1>
            <h2>Patient Name: {patientDetails.patient_name}</h2>
            <h2>Doctor Name: Dr.James Thomas</h2>
            <h2>Gender: {patientDetails.gender}</h2>
            <h2>Age: {patientDetails.age}</h2>
            <h2>Email: {patientDetails.email}</h2>
            <h2>Phone: {patientDetails.phone}</h2>
            <h2>Symptoms: {patientDetails.symptoms}</h2>
            <h2>Previous illness: {patientDetails.previous_illness}</h2>
          </div>
        </div>
      )}
    </>
  );
};
export default Result;
