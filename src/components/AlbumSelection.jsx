import React, { Component } from "react";

class AlbumSelection extends Component {
  render() {
    const { pathTo } = this.props;
    const { settings } = this.props;
    const name = pathTo.substring(pathTo.indexOf("/") + 1, pathTo.indexOf("."));

    return (
      <div className={settings}>
        <img src={pathTo}></img>
        <p className="subtitle mt-4">{name}</p>
      </div>
    );
  }
}

export default AlbumSelection;
