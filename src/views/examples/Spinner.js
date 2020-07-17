/* eslint-disable no-unused-vars */
import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const spinnerOverride = css`
  display: flex;
  margin: 400px 300px;
  border-color: red;
  top: 50%;
  justifycontent: center;
  aligncontent: center;
`;

class SpinnerLungBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h1 style={{ marginLeft: "60px" }}>
          The X Ray is now being analysed through different layers of Neural
          Network
        </h1>
        {/* <h1>Spinner</h1> */}
        {/* <ClipLoader
          css={override}
          size={150}
          color={"#FFF"}
          loading={this.state.loading}
        /> */}
        {/* <PacmanLoader
          size={100}
          css={spinnerOverride}
          color={"#FFF"}
          loading={true}
        /> */}
        <RingLoader
          size={250}
          color={"#FFF"}
          loading={true}
          css={spinnerOverride}
        />
      </div>
    );
  }
}
export default SpinnerLungBot;
