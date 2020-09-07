import React, { Component } from "react";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";
import "../scrollbar.css";

class AlbumCreation extends Component {
  state = {};
  render() {
    const {
      match: { params },
    } = this.props;

    const customInput = (name, marginTop) => (
      <div className={"pl-4 pr-4 pt-" + marginTop + " w-100"}>
        <label htmlFor="formGroupExampleInput">{name}</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
        />
      </div>
    );

    return (
      <div className="mt-5 pt-5" style={{ position: "relative" }}>
        <center>
          <h1 className="title animated fadeIn">
            Prepare to create your album cover!
          </h1>
          <h1 className="subtitle animated fadeIn delay-1s">
            The style is {params.style}
          </h1>
        </center>
        <MDBRow className="animated fadeIn slower no-gutters mt-5 pr-5 pl-5">
          <MDBCol lg="8">
            <div
              style={{
                height: "40rem",
                backgroundImage:
                  "linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
              }}
            >
              <img
                style={{
                  height: "auto",
                  maxHeight: "100%",
                  width: "100%",
                }}
                src="../assets/Temp.jpg"
              ></img>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div style={{ height: "40rem", backgroundColor: "white" }}>
              {
                // These are our Title + Subtitle input components.
              }
              {customInput("Title", 4)}
              {customInput("Subtitle", 3)}

              {
                // Select a font! Add a color picker eventually...
              }
              <div className="pl-4 pr-4 pt-4 w-100">
                <label htmlFor="formGroupExampleInput">Font</label>
                <select className="browser-default custom-select">
                  <option>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>

                {
                  // A list of images related to the selected style (w/ scrollbar)!
                }
                <div
                  className="mt-5 scrollbar scrollbar-black"
                  style={{ height: "20vh" }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate earum corporis molestiae deleniti fugiat unde harum
                  quasi quia, sunt accusantium? Similique eum ipsum modi
                  praesentium at illum numquam sit odit. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Adipisci dolor tempore
                  commodi, inventore qui quis aliquam quae. Quod accusantium
                  maiores numquam cum nostrum ullam ad ex excepturi fugit
                  impedit. A! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Itaque, numquam quisquam ut totam quaerat nesciunt
                  repellendus expedita architecto voluptates tempore, quae iure
                  facilis minima illo quam suscipit maxime possimus optio!
                </div>

                {
                  // Finally, we add our save button!
                }
                <center>
                  <button
                    type="button"
                    className="mt-5 w-100 btn btn-black"
                    style={{ borderRadius: "25px" }}
                  >
                    <i class="fa fa-save pr-1"></i>
                    <span>Save</span>
                  </button>
                </center>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default AlbumCreation;
