import React, { Component } from "react";
import { MDBCol, MDBRow } from "mdbreact";
import AlbumSelection from "./AlbumSelection";

class Home extends Component {
  state = {};

  pictureAt = (name) => {
    return `assets/${name}`;
  };

  componentDidMount() {
    this.loadImages();
  }

  loadImages() {
    fetch("images.json")
      .then((response) => response.json())
      .then((data) => this.setState({ images: data }));
  }

  render() {
    if (!this.state.images) {
      return "";
    }

    const { paths } = this.state.images;
    const colSize = 12 / paths.length;

    return (
      <div className="h-100 mt-5" style={{ position: "fixed" }}>
        <MDBRow className="mt-5">
          <MDBCol lg="12 mt-5">
            <center>
              <h1 className="title animated bounceInDown">
                Album cover generator.
              </h1>
              <p className="subtitle mt-4 animated fadeIn slower">
                Select a catagory below to begin.
              </p>
            </center>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5">
          {paths.map((data, index) => (
            <MDBCol lg={colSize.toString()} key={data}>
              <center>
                <AlbumSelection
                  pathTo={this.pictureAt(data)}
                  settings={"animated zoomIn delay-1s"}
                ></AlbumSelection>
              </center>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    );
  }
}

export default Home;
