import React, { Component } from "react";
import { MDBCol, MDBRow } from "mdbreact";
import AlbumSelection from "./AlbumSelection";

class Home extends Component {
  state = {};

  pictureAt = (name) => {
    return `assets/${name}`;
  };

  setFocusOn = (data) => {
    this.setState({ images: this.state.images, focus: data });
  };

  getStyle = (data, focus) => {
    const scaleValue =
      focus === null || focus !== data ? "scale(1.0)" : "scale(1.1)";

    const style = {
      position: "relative",
      transform: scaleValue,
    };

    return style;
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

    const { focus } = this.state;
    const { paths } = this.state.images;
    const colSize = 12 / paths.length;

    return (
      <div style={{ position: "relative", zIndex: 1 }}>
        <MDBRow className="mt-5">
          <MDBCol lg="12 mt-5">
            <center>
              <h1 className="mt-1 title animated bounceInDown">
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
              <div
                onMouseEnter={(e) => this.setFocusOn(data)}
                onMouseLeave={(e) => this.setFocusOn(null)}
                style={this.getStyle(data, focus)}
              >
                <center>
                  <AlbumSelection
                    pathTo={this.pictureAt(data)}
                    settings={"animated zoomIn delay-1s"}
                  ></AlbumSelection>
                </center>
              </div>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    );
  }
}

export default Home;
