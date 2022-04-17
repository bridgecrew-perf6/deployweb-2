import React, { Component } from "react";

export default class SinhVien extends Component {
  hoTen = "Nguyen Van A";
  lop = "Fronend";

  renderThongTin = (tenTrungTam) => {
    return (
      <ul>
        <li>Họ tên:{this.hoTen}</li>
        <li>Lớp :{this.lop}</li>
        <li>TRUNG TAM :{tenTrungTam}</li>
      </ul>
    );
  };

  handleShowMessage = (message) => {
    alert(message);
  };

  render() {
    // const tenTrungTam = "CYBER";

    let message = "hekko";

    return (
      <div>
        <button onClick={this.handleShowMessage.bind(this, message)}>
          Show message
        </button>
        <br/>
        <br/>
        <button onClick={() => 
            this.handleShowMessage(message)
        }>
          Show message
        </button>

        {/* {this.renderThongTin(tenTrungTam)} */}
        {/* <ul>
                    <li>Họ tên:{this.hoTen}</li>
                    <li>Lớp :{this.lop}</li>
                    <li>TRUNG TAM :{tenTrungTam}</li>
                </ul> */}
      </div>
    );
  }
}
